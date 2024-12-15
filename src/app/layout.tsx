/** @format */

import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
	title: 'Xernerx Studios',
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={''}>
				<Header></Header>
				<main>{children}</main>
				<Footer></Footer>
			</body>
		</html>
	);
}
