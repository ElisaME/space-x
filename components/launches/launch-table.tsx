'use client';

import { useState } from 'react';
import type { Launch, Rocket } from '@/types';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { StatusBadge } from '@/components/shared/status-badge';
import { Button } from '@/components/ui/button';
import {
	ChevronFirst,
	ChevronLast,
	ChevronLeft,
	ChevronRight,
} from 'lucide-react';

interface LaunchTableProps {
	launches: Launch[];
	rockets: Rocket[];
	onLaunchClick: (launch: Launch) => void;
	itemsPerPage?: number;
}

export function LaunchTable({
	launches,
	rockets,
	onLaunchClick,
	itemsPerPage = 10,
}: LaunchTableProps) {
	const [currentPage, setCurrentPage] = useState(1);

	const rocketsMap = new Map(rockets.map((r) => [r.id, r]));

	// Bulild paginacin
	const totalPages = Math.ceil(launches.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentLaunches = launches.slice(startIndex, endIndex);

	const getStatus = (launch: Launch) => {
		if (launch.upcoming) return 'upcoming';
		if (launch.success === true) return 'success';
		if (launch.success === false) return 'failed';
		return 'upcoming';
	};

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString('en-US', {
			month: 'short',
			day: '2-digit',
			year: 'numeric',
		});
	};

	return (
		<div className="space-y-4">
			{/* Header */}
			<div className="flex items-center justify-between">
				<h2 className="text-sm font-bold uppercase tracking-wide text-gray-400">
					Historical Data Logs
				</h2>
			</div>

			{/* Tabla */}
			<div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
				<Table>
					<TableHeader>
						<TableRow className="border-gray-800 hover:bg-transparent">
							<TableHead className="text-gray-400">Flight #</TableHead>
							<TableHead className="text-gray-400">Mission Name</TableHead>
							<TableHead className="text-gray-400">Date</TableHead>
							<TableHead className="text-gray-400">Rocket Type</TableHead>
							<TableHead className="text-gray-400">Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{currentLaunches.map((launch) => {
							const rocket = rocketsMap.get(launch.rocket);
							return (
								<TableRow
									key={launch.id}
									onClick={() => onLaunchClick(launch)}
									className="cursor-pointer border-gray-800 transition-colors hover:bg-gray-800/50"
								>
									<TableCell className="font-mono text-gray-400">
										{launch.flight_number}
									</TableCell>
									<TableCell className="font-medium text-white">
										{launch.name}
									</TableCell>
									<TableCell className="text-gray-400">
										{formatDate(launch.date_local)}
									</TableCell>
									<TableCell className="text-gray-400">
										{rocket?.name || 'Unknown'}
									</TableCell>
									<TableCell>
										<StatusBadge status={getStatus(launch)} />
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>

			{/* Paginación */}
			<div className="flex items-center justify-between">
				<p className="text-sm text-gray-400">
					Showing {startIndex + 1}-{Math.min(endIndex, launches.length)} of{' '}
					{launches.length}
				</p>
				<div className="flex items-center gap-2">
					<Button
						variant="outline"
						size="sm"
						onClick={() => setCurrentPage(1)}
						className="border-gray-800 bg-transparent text-white hover:bg-gray-900 disabled:opacity-50"
					>
						<ChevronFirst className="h-4 w-4" />
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
						disabled={currentPage === 1}
						className="border-gray-800 bg-transparent text-white hover:bg-gray-900 disabled:opacity-50"
					>
						<ChevronLeft className="h-4 w-4" />
					</Button>

					<div className="flex gap-1">
						{(() => {
							const pages = [];
							const maxVisblePages = 5;
							let startPage = Math.max(
								1,
								currentPage - Math.floor(maxVisblePages / 2)
							);
							const endPage = Math.min(
								totalPages,
								startPage + maxVisblePages - 1
							);
							if (endPage - startPage < maxVisblePages - 1) {
								startPage = Math.max(1, endPage - maxVisblePages + 1);
							}
							for (let i = startPage; i <= endPage; i++) {
								pages.push(
									<Button
										key={i}
										variant={currentPage === i ? 'default' : 'outline'}
										size="sm"
										onClick={() => setCurrentPage(i)}
										className={
											currentPage === i
												? 'bg-blue-600 text-white hover:bg-blue-700'
												: 'border-gray-800 bg-transparent text-white hover:bg-gray-900'
										}
									>
										{i}
									</Button>
								);
							}
							return pages;
						})()}
					</div>

					<Button
						variant="outline"
						size="sm"
						onClick={() =>
							setCurrentPage((prev) => Math.min(totalPages, prev + 1))
						}
						disabled={currentPage === totalPages}
						className="border-gray-800 bg-transparent text-white hover:bg-gray-900 disabled:opacity-50"
					>
						<ChevronRight className="h-4 w-4" />
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={() => setCurrentPage(totalPages)}
						className="border-gray-800 bg-transparent text-white hover:bg-gray-900 disabled:opacity-50"
					>
						<ChevronLast className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	);
}
