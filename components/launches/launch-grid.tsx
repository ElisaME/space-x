'use client';
import { Launch, Launchpad, Rocket } from '@/types';
import { LaunchCard } from './launch-card';

interface LaunchGridProps {
	launches: Launch[];
	rockets: Rocket[];
	launchpads: Launchpad[];
	viewMode: 'grid' | 'list';
	onLaunchClick: (launch: Launch) => void;
}

export function LaunchGrid({
	launches,
	rockets,
	launchpads,
	viewMode,
	onLaunchClick,
}: LaunchGridProps) {
	//Maps para eficientar búsqueda de referencias
	const rocketsMap = new Map(rockets.map((r) => [r.id, r]));
	const launchpadsMap = new Map(launchpads.map((lp) => [lp.id, lp]));

	if (launches.length === 0) {
		return (
			<div className="flex min-h-100 items-center justify-center">
				<p className="text-gray-500">No launches found</p>
			</div>
		);
	}
	return (
		<div
			className={
				viewMode === 'grid'
					? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-5'
					: 'space-y-4'
			}
		>
			{launches.map((launch, index) => {
				const rocket = rocketsMap.get(launch.rocket);
				const launchpad = launchpadsMap.get(launch.launchpad);
				return (
					<LaunchCard
						key={launch.id}
						launch={launch}
						rocket={rocket}
						launchpad={launchpad}
						viewMode={viewMode}
						onClick={() => onLaunchClick(launch)}
						index={index}
					/>
				);
			})}
		</div>
	);
}
