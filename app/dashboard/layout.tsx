import { Header } from '@/components/layout/header';
import './../globals.css';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen bg-gray-950">
			<Header />
			<main className="container mx-auto px-6 py-8">{children}</main>
		</div>
	);
}
