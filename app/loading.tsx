import { LaunchCardSkeleton } from '@/components/launches/launch-card-skeleton';
import { LaunchTableSkeleton } from '@/components/launches/launch-table-skeleton';
import { Skeleton } from '@/components/ui/skeleton';

export default function LaunchesLoading() {
	return (
		<div className="space-y-6">
			{/* Search and  Filters */}
			<div className="flex items-center gap-4">
				<div className="flex-1">
					<Skeleton className="h-10 w-full bg-gray-800" />
				</div>
			</div>
			<div className="flex justify-between items-center">
				<div className="flex gap-2">
					<Skeleton className="h-9 w-20 bg-gray-800" />
					<Skeleton className="h-9 w-24 bg-gray-800" />
					<Skeleton className="h-9 w-24 bg-gray-800" />
				</div>
				<div className="flex gap-1 rounded-lg border border-gray-800 bg-gray-900 p-1">
					<Skeleton className="h-9 w-9 bg-gray-800" />
					<Skeleton className="h-9 w-9 bg-gray-800" />
				</div>
			</div>
			<div>
				<Skeleton className="h-5 w-64 bg-gray-800 mb-2" />
				{/* Grid skeleton */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{Array.from({ length: 6 }).map((_, index) => (
						<LaunchCardSkeleton key={index} viewMode="grid" />
					))}
				</div>
				{/* Table Skeleton */}
				<LaunchTableSkeleton />
			</div>
		</div>
	);
}
