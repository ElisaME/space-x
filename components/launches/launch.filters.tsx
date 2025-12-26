'use client';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Grid, List } from 'lucide-react';

interface LaunchFilterProps {
	currentFilter: string;
	onFilterChange: (filter: string) => void;
	viewMode: 'grid' | 'list';
	onViewModeChange: (mode: 'grid' | 'list') => void;
}
export function LaunchFilters({
	currentFilter,
	onFilterChange,
	viewMode,
	onViewModeChange,
}: LaunchFilterProps) {
	const filters = [
		{ value: 'all', label: 'All' },
		{ value: 'success', label: 'Success' },
		{ value: 'upcoming', label: 'Upcoming' },
	];
	return (
		<div className="flex items-center gap-4 justify-between">
			<div className="flex items-center gap-3">
				{filters.map((filter) => (
					<Button
						key={filter.value}
						variant={currentFilter === filter.value ? 'default' : 'outline'}
						onClick={() => onFilterChange(filter.value)}
						size="sm"
						className={cn(
							currentFilter === filter.value
								? 'bg-blue-600 text-white hover:bg-blue-700'
								: 'border-gray-700 text-gray-400 hover:bg-gray-800',
							'cursor-pointer'
						)}
					>
						{filter.label}
					</Button>
				))}
			</div>
			{/* View mode */}
			<div className="flex gap-1 bg-gray-900 border border-gray-800 rounded-lg p-1">
				<button
					onClick={() => onViewModeChange('grid')}
					className={cn(
						'rounded p-2 transition-colors',
						viewMode === 'grid'
							? 'bg-gray-800 text-white'
							: 'text-gray-500 hover:bg-gray-300'
					)}
				>
					<Grid className="h-4 w-4" />
				</button>
				<button
					onClick={() => onViewModeChange('list')}
					className={cn(
						'rounded p-2 transition-colors',
						viewMode === 'list'
							? 'bg-gray-800 text-white'
							: 'text-gray-500 hover:bg-gray-300'
					)}
				>
					<List className="h-4 w-4" />
				</button>
			</div>
		</div>
	);
}
