import { cn } from '@/lib/utils';
import { Card, CardContent } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

interface LaunchCardSkeletonProps {
	viewMode: 'grid' | 'list';
}

export function LaunchCardSkeleton({ viewMode }: LaunchCardSkeletonProps) {
	return (
		<Card
			className={cn(
				'overflow-hidden border-gray-800 bg-gray-900',
				viewMode === 'list' && 'flex flex-row'
			)}
		>
			{/* Imagen skeleton */}
			<Skeleton
				className={cn(
					'bg-gray-800',
					viewMode === 'grid' ? 'h-64 w-full' : 'h-48 w-48 shrink-0'
				)}
			/>

			{/* Contenido skeleton */}
			<CardContent className={cn('p-6', viewMode === 'list' && 'flex-1')}>
				<div className="space-y-3">
					{/* Título */}
					<div className="space-y-2">
						<Skeleton className="h-6 w-3/4 bg-gray-800" />
						<Skeleton className="h-4 w-1/4 bg-gray-800" />
					</div>

					{/* Rocket */}
					<Skeleton className="h-4 w-1/2 bg-gray-800" />

					{/* Fecha y ubicación */}
					<div className="space-y-2 border-t border-gray-800 pt-3">
						<Skeleton className="h-4 w-2/3 bg-gray-800" />
						<Skeleton className="h-4 w-1/2 bg-gray-800" />
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
