/** @format */
'use client';

import Dashboard from '@/../public/icons/dashboard.svg';
import Home from '@/../public/icons/home.svg';
import Icon from '@/../public/icons/icon.svg';
import Link from 'next/link';

export default function Header() {
	return (
		<>
			<header className='rainbow'>
				<div>
					<Link href='https://xernerx.com'>
						<button title='Xernerx Studios'>
							<Icon className='icon text-violet-300' />
						</button>
					</Link>
					<Link href='/'>
						<button title='Home'>
							<Home className='icon' />
						</button>
					</Link>
					<Link href='https://app.xernerx.com'>
						<button title='Dashboard'>
							<Dashboard className='icon' />
						</button>
					</Link>
				</div>
			</header>
		</>
	);
}
