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
			<body>{children}</body>
		</html>
	);
}
