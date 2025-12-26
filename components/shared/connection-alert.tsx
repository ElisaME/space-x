'use client';

import { WifiOff } from 'lucide-react';

interface ConnectionAlertProps {
	message?: string;
}

export default function ConnectionAlert({
	message = 'Connection to Starbase lost.',
}: ConnectionAlertProps) {
	return (
		<div className="py-2 border border-red-900/20 bg-red-950/50 backdrop-blur-sm">
			<div className="container mx-auto px-6">
				<div className="flex items-center gap-3">
					<WifiOff className="w-4 h-4" />
					<p className="text-sm text-red-400">{message}</p>
				</div>
			</div>
		</div>
	);
}
