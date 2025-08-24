/** @format */
'use client';

import Link from 'next/link';

import Icon from '@/../public/icons/icon.svg';
import Home from '@/../public/icons/home.svg';
import Cloud from '@/../public/icons/cloud.svg';
import Api from '@/../public/icons/api.svg';

export default function Header() {
	return (
		<>
			<div>
				<Link href="https://xernerx.com">
					<button title="Xernerx Studios">
						<Icon className="icon text-violet-300" />
					</button>
				</Link>
				<Link href="/">
					<button title="Home">
						<Home className="icon" />
					</button>
				</Link>
				<Link href="https://api.xernerx.com">
					<button title="API Documentation and endpoint">
						<Api className="icon" />
					</button>
				</Link>
				<Link href="https://xernerx.com/hosting">
					<button title="Hosting">
						<Cloud className="icon" />
					</button>
				</Link>
			</div>
		</>
	);
}
