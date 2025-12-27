'use client';

import { cn } from '@/lib/utils';
import { Launch } from '@/types/launch';
import { Launchpad, Rocket } from '@/types/rocket';
import { MapPin, RocketIcon, X } from 'lucide-react';
import { StatusBadge } from '../shared/status-badge';
import { Button } from '../ui/button';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface MissionDetailProps {
	launch: Launch | null;
	rocket?: Rocket;
	launchpad?: Launchpad;
	isOpen: boolean;
	onClose: () => void;
}

export function MissionDetailPanel({
	launch,
	rocket,
	launchpad,
	isOpen,
	onClose,
}: MissionDetailProps) {
	const getStatus = () => {
		if (!launch) return 'upcoming';
		if (launch.upcoming) return 'upcoming';
		if (launch.success === true) return 'success';
		if (launch.success === false) return 'failed';
		return 'upcoming';
	};
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Overlay */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
					/>

					<div
						className={cn(
							'fixed insert-0 z-40 bg-black/50 transition-opacity top-0 h-full w-full left-0',
							isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
						)}
						onClick={onClose}
					></div>
					{/* Panel */}
					<div
						className={cn(
							'fixed top-0 right-0 z-100 h-full w-80 bg-gray-950 shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto border-l border-gray-800 sm:w-[400px]',
							isOpen ? 'translate-x-0' : 'translate-x-full'
						)}
					>
						{/* Mission Badge */}
						<div
							className="relative h-36 bg-gray-900 shrink-0"
							data-alt="Dark abstract pattern"
							style={{
								backgroundImage:
									"url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6v17VLdSU31mgHicSPQ9ls6_1JjfTa0c21GEFbVtd8nAslAsILxsmmFVBB55owAYW1WlKK9FPNhwPVZNEuAIXs8RE5xIS_41HR5z9IsyCIp_n_4ubc175i51QLcjWIrX035dKLx1tLAhrCJUmJhvxjQSNndu70T_gr7g5nTu9jGfwwgLlL02a52NjypXQtNCEJ6HEu5fbIG1sjtRsv2IQR316igQaFd2f8CtA8c0T_SvGx8rLWLglG83Ss5JQaC_RWjibDlrJ1Tt1')",
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						>
							<StatusBadge
								status={getStatus()}
								className="absolute top-4 right-4"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#161b26] to-transparent"></div>
							<div className="absolute -bottom-10 left-6">
								<div className="size-20 bg-black rounded-full border-4 border-[#161b26] flex items-center justify-center overflow-hidden">
									{launch?.links.patch.large || launch?.links.patch.small ? (
										<div className="relative h-32 w-32">
											<Image
												src={
													launch.links.patch.large ||
													launch.links.patch.small ||
													''
												}
												alt={launch.name}
												fill
												className="w-full h-full object-contain p-1"
											/>
										</div>
									) : (
										<div className="text-6xl">🚀</div>
									)}
								</div>
							</div>
						</div>
						{/* Panel Animation */}
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3 }}
							className="mb-6 flex items-start justify-between"
						>
							<div className="p-6">
								{/* Header */}
								<div className="flex items-start justify-between my-6">
									<div>
										<p className="text-blue-500 font-medium text-sm">
											SELECTED MISSION
										</p>
										<p className="text-white">{launch?.name}</p>
									</div>
									<p className="text-gray-400 text-sm">
										FLIGHT: {launch?.flight_number}
									</p>
								</div>
								<motion.button
									whileHover={{ scale: 1.1, rotate: 90 }}
									whileTap={{ scale: 0.9 }}
									onClick={onClose}
									className="cursor-pointer rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-900 hover:text-white absolute top-4 left-4"
								>
									<X className="h-5 w-5" />
								</motion.button>
								{/* Content */}
								<div className="grid grid-cols-2 gap-4 mb-6">
									{/* Rocket */}
									<div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
										<div className="text-gray-400 flex text-sm tracking-tight">
											<RocketIcon className="w-4 h-4 mr-2" />
											ROCKET
										</div>
										<p className="text-white">{rocket?.name}</p>
									</div>
									{/* Site */}
									<div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
										<div className="text-gray-400 flex text-sm tracking-tight">
											<MapPin className="w-4 h-4 mr-2" />
											Site
										</div>
										<p className="text-white">{launchpad?.region}</p>
									</div>
								</div>
								{/* Mission Overview */}
								{launch?.details && (
									<div className="mb-6">
										<h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">
											Mission Overview
										</h3>
										<p className="text-sm leading-relaxed text-gray-400">
											{launch.details}
										</p>
									</div>
								)}

								{/* Webcast */}
								{launch?.links.webcast && (
									<div className="mb-6">
										<h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">
											Webcast Replay
										</h3>
										<div className="aspect-video overflow-hidden rounded-lg bg-gray-900">
											<iframe
												src={`https://www.youtube.com/embed/${
													launch.links.webcast.split('v=')[1]
												}`}
												className="h-full w-full"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen
											/>
										</div>
									</div>
								)}

								{/* Links */}
								<div className="space-y-2">
									{launch?.links.article && (
										<Button
											variant="outline"
											className="w-full border-gray-800 bg-transparent text-white hover:bg-gray-900"
											asChild
										>
											<a
												href={launch.links.article}
												target="_blank"
												rel="noopener noreferrer"
											>
												Read Article
											</a>
										</Button>
									)}
									{launch?.links.wikipedia && (
										<Button
											variant="outline"
											className="w-full border-gray-800 bg-transparent text-white hover:bg-gray-900"
											asChild
										>
											<a
												href={launch.links.wikipedia}
												target="_blank"
												rel="noopener noreferrer"
											>
												View on Wikipedia
											</a>
										</Button>
									)}
								</div>
							</div>
						</motion.div>
					</div>
				</>
			)}
		</AnimatePresence>
	);
}
