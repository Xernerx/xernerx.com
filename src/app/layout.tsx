/** @format */

import type { Metadata } from 'next';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

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
				<Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4242117068384423" crossOrigin="anonymous" strategy="afterInteractive"></Script>
				<Header />

				<main>{children}</main>
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
