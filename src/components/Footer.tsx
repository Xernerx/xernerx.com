/** @format */
'use client';

import Link from 'next/link';

export default function Footer() {
	return (
		<>
			<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
				<div className="text-center md:text-left">
					<h3 className="text-lg font-semibold text-white">Xernerx Studios</h3>
					<p className="text-sm">&copy; {new Date().getFullYear()} Xernerx Studios. All rights reserved.</p>
				</div>

				<div className="flex space-x-6 text-sm">
					<Link href="/terms" className="hover:text-white">
						Terms of Service
					</Link>
					<Link href="/privacy" className="hover:text-white">
						Privacy Policy
					</Link>
				</div>

				<div className="flex space-x-6">
					<Link href="/discord" target="_blank" rel="noopener noreferrer" className="hover:text-white">
						Discord
					</Link>
					<Link href="https://github.com/xernerx" target="_blank" rel="noopener noreferrer" className="hover:text-white">
						GitHub
					</Link>
					<Link href="https://www.npmjs.com/package/xernerx" target="_blank" rel="noopener noreferrer" className="hover:text-white">
						npm
					</Link>
				</div>
			</div>
		</>
	);
}
