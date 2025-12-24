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
	const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
	return (
		<div className="space-y-6">
			<div className="flex items-center gap-4">
				<div className="flex-1">
					<SearchBar value={searchValue} onChange={setSearchValue} />
				</div>
			</div>
			<LaunchFilters
				currentFilter="all"
				viewMode={viewMode}
				onFilterChange={() => {}}
			/>
			{/* Launches */}
			<LaunchGrid
				launches={launches}
				rockets={rockets}
				launchpads={launchpads}
				viewMode={viewMode}
			/>
		</div>
	);
}
