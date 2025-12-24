'use client';

import { Card, CardContent } from '@/components/ui/card';
import { getLaunchImage } from '@/lib/selectors';
import { cn } from '@/lib/utils';
import { Launch, Launchpad, Rocket } from '@/types';
import Image from 'next/image';
import { StatusBadge } from '../shared/status-badge';
import { Calendar, MapPin } from 'lucide-react';

interface LaunchCardProps {
	launch: Launch;
	rocket?: Rocket;
	launchpad?: Launchpad;
	viewMode: 'grid' | 'list';
}
export function LaunchCard({
	launch,
	viewMode,
	rocket,
	launchpad,
}: LaunchCardProps) {
	const imageUrl = getLaunchImage(launch.links);

	const getStatus = () => {
		if (launch.success === true) return 'success';
		if (launch.success === false) return 'failed';
		return 'upcoming';
	};
	const status = getStatus();
	return (
		<Card
			className={cn(
				'group overflow-hidden border-gray-800 bg-gray-900 transition-all hover:border-gray-700 p-0',
				viewMode === 'list' && 'flex flex-row'
			)}
		>
			<div
				className={cn(
					'relative overflow-hidden bg-gray-950',
					viewMode === 'grid' ? 'h-64 w-full' : 'h-48 w-48 shrink-0'
				)}
			>
				{imageUrl && (
					<Image
						src={imageUrl}
						alt={launch.name}
						className="object-cover transition-transform duration-300 group-hover:scale-105"
						fill
					/>
				)}
				{/* Status Badge */}
				<div className="absolute right-3 top-3">
					<StatusBadge status={status} />
				</div>
			</div>
			<CardContent>
				<div className="space-y-3 py-2">
					{/* Nombre y # de vuelo */}
					<div>
						<h3 className="text-lg font-bold text-white">{launch.name}</h3>
						<p className="text-sm text-gray-500">
							FLIGHT {launch.flight_number}
						</p>
					</div>
					{/* Cohete */}
					{rocket && <p className="text-sm text-gray-400">{rocket.name}</p>}
					{/* Fecha y lugar */}
					<div className="space-y-2 border-t border-gray-800 pt-3">
						<div className="flex items-center gap-2 text-sm text-gray-400">
							<Calendar className="h-4 w-4" />
							<span>{launch.date_local}</span>
						</div>
						{launchpad && (
							<div className="flex items-center gap-2 text-sm text-gray-400">
								<MapPin className="h-4 w-4" />
								<span>{launchpad.name}</span>
							</div>
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
