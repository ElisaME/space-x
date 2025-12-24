import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
	status: 'success' | 'upcoming' | 'failed' | 'active';
	className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
	const variants = {
		success: 'bg-green-500/10 text-green-500 border-green-500/20',
		upcoming: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
		failed: 'bg-red-500/10 text-red-500 border-red-500/20',
		active: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
	};

	const labels = {
		success: 'SUCCESS',
		upcoming: 'UPCOMING',
		failed: 'FAILED',
		active: 'ACTIVE',
	};
	return (
		<Badge
			className={cn(
				'font-bold tracking-tight text-xs border px-3 py-1',
				variants[status],
				className
			)}
		>
			{labels[status]}
		</Badge>
	);
}
