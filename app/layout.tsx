import { Header } from '@/components/layout/header';
import './globals.css';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={spaceGrotesk.className}>
			<body>
				<div className="min-h-screen bg-gray-950">
					<Header />
					<main className="container mx-auto px-6 py-8">{children}</main>
				</div>
			</body>
		</html>
	);
}
