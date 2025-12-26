'use client';
import { useState } from 'react';
import { Launch, Rocket, Launchpad } from '@/types';
import { SearchBar } from '@/components/shared/search-bar';
import { LaunchGrid } from './launch-grid';
import { LaunchFilters } from './launch.filters';
import { MissionDetailPanel } from '../layout/mission-detail-panel';
import { LaunchTable } from './launch-table';

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
	const [isOpen, setIsOpen] = useState(false);
	const [selectedLaunch, setSelectedLaunch] = useState<Launch | null>(null);

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

	//Get recent launches
	const recentLaunches = filteredLaunches.slice(0, 6);
	const historicalLaunches = [...filteredLaunches].sort(
		(a, b) =>
			new Date(b.date_local).getTime() - new Date(a.date_local).getTime()
	);

	const handleLaunchClick = (launch: Launch) => {
		setSelectedLaunch(launch);
		setIsOpen(true);
	};

	const handleClosePanel = () => {
		setIsOpen(false);
	};
	return (
		<>
			<div className="space-y-6">
				{/* Search and Filters */}
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
				{/* Recent Launches */}
				<div>
					<h2 className=" text-sm text-gray-400 font-bold uppercase tracking-wide">
						{' '}
						Upcoming & Recent Missions
					</h2>
				</div>
				{/* Launches */}
				<LaunchGrid
					launches={recentLaunches}
					rockets={rockets}
					launchpads={launchpads}
					viewMode={viewMode}
					onLaunchClick={handleLaunchClick}
				/>
				{/* Historical data table */}
				<LaunchTable
					launches={historicalLaunches}
					rockets={rockets}
					onLaunchClick={handleLaunchClick}
				/>
			</div>
			{/* Panel detalle */}
			<MissionDetailPanel
				key={selectedLaunch?.id}
				launch={selectedLaunch}
				rocket={
					selectedLaunch
						? rockets.find((r) => (r.id = selectedLaunch.rocket))
						: undefined
				}
				launchpad={
					selectedLaunch
						? launchpads.find((r) => (r.id = selectedLaunch.launchpad))
						: undefined
				}
				isOpen={isOpen}
				onClose={handleClosePanel}
			/>
		</>
	);
}
