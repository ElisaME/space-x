import { Rocket } from 'lucide-react';
import Link from 'next/link';

export function Header() {
	return (
		<header className="border-b border-gray-800 bg-gray-950">
			<div className="container mx-auto flex h-16 items-center justify-between px-6">
				{/* Logo / Title */}
				<div className="flex items-center gap-3">
					<Rocket className="h-6 w-6 text-blue-500" />
					<h1 className="text-white text-xl font-bold tracking-tight uppercase">
						Mission Control
					</h1>
				</div>
				{/* Nav */}
				<nav className="flex items-center gap-8">
					<Link
						href="/"
						className="text-sm font-medium text-blue-500 hover:text-blue-400"
					>
						Launches
					</Link>
					<Link
						href="/vehicles"
						className="text-sm font-medium text-blue-500 hover:text-blue-400"
					>
						Vehicles
					</Link>
					<Link
						href="/analytics"
						className="text-sm font-medium text-blue-500 hover:text-blue-400"
					>
						Analytics
					</Link>
				</nav>
			</div>
		</header>
	);
}
