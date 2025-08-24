/** @format */

import type { Metadata } from 'next';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
	title: 'Xernerx Studios',
	description: 'Simplifying the complex',
	icons: {
		icon: [
			{ url: '/icons/icon.svg', media: '(prefers-color-scheme: light)' },
			{ url: '/icons/favicon.svg', media: '(prefers-color-scheme: dark)' },
		],
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={``}>
				<Header />

				<main>{children}</main>
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
