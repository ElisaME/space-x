'use client';
import { useState } from 'react';
import { Launch, Rocket, Launchpad } from '@/types';
import { SearchBar } from '@/components/shared/search-bar';
import { LaunchGrid } from './launch-grid';
import { LaunchFilters } from './launch.filters';

interface LaunchClientProps {
	launches: Launch[];
	rockets: Rocket[];
	launchpads: Launchpad[];
}
export default function LaunchesClient({
	launches,
	rockets,
	launchpads,
}: LaunchClientProps) {
	const [searchValue, setSearchValue] = useState('');
	const [statusFilter, setStatusFilter] = useState<string>('all');
	const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

	const filteredLaunches = launches.filter((launch) => {
		// Filter by search
		const matchesSearch =
			launch.name.toLowerCase().includes(searchValue.toLowerCase()) ||
			launch.flight_number.toString() === searchValue;
		// Filter by status
		const matchesStatus =
			statusFilter === 'all' ||
			(statusFilter === 'success' && launch.success === true) ||
			(statusFilter === 'upcoming' && launch.upcoming === true);
		return matchesSearch && matchesStatus;
	});

	return (
		<div className="space-y-6">
			<div className="flex items-center gap-4">
				<div className="flex-1">
					<SearchBar value={searchValue} onChange={setSearchValue} />
				</div>
			</div>
			<LaunchFilters
				currentFilter={statusFilter}
				viewMode={viewMode}
				onViewModeChange={setViewMode}
				onFilterChange={setStatusFilter}
			/>
			{/* Launches */}
			<LaunchGrid
				launches={filteredLaunches}
				rockets={rockets}
				launchpads={launchpads}
				viewMode={viewMode}
			/>
		</div>
	);
}
