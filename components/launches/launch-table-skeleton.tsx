import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

export function LaunchTableSkeleton() {
	return (
		<div className="space-y-4">
			{/* Header */}
			<div className="flex items-center justify-between">
				<Skeleton className="h-5 w-48 bg-gray-800" />
				<Skeleton className="h-9 w-32 bg-gray-800" />
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
						{Array.from({ length: 10 }).map((_, i) => (
							<TableRow key={i} className="border-gray-800">
								<TableCell>
									<Skeleton className="h-4 w-12 bg-gray-800" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-48 bg-gray-800" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-32 bg-gray-800" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-4 w-24 bg-gray-800" />
								</TableCell>
								<TableCell>
									<Skeleton className="h-6 w-20 bg-gray-800" />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

			{/* Paginación skeleton */}
			<div className="flex items-center justify-between">
				<Skeleton className="h-5 w-40 bg-gray-800" />
				<div className="flex gap-2">
					<Skeleton className="h-9 w-9 bg-gray-800" />
					<Skeleton className="h-9 w-9 bg-gray-800" />
					<Skeleton className="h-9 w-9 bg-gray-800" />
				</div>
			</div>
		</div>
	);
}
