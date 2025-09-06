/** @format */

import API from '@/../public/icons/api.svg';
import Dashboard from '@/../public/icons/dashboard.svg';
import Github from '@/../public/icons/github.svg';
import Link from 'next/link';
import NPM from '@/../public/icons/npm.svg';

export default function Home() {
	return (
		<>
			<div>
				<img src='logos/purple.png' className='banner' />
				<p></p>

				<section id='about' className='ml-[10rem] mr-[10rem] mb-[5rem]'>
					<h1>About</h1>
					<p>
						Xernerx Studios is a developer-driven project dedicated to building <strong>open-source tools and services</strong> for Discord bot creators. Our work focuses on making development easier,
						more structured, and accessible to anyone who wants to build meaningful experiences on Discord.
					</p>
					<p>
						We believe in <strong>open source</strong>, <strong>transparency</strong>, and <strong>community collaboration</strong>. Every package and service we release is designed with reliability
						and developer-friendliness in mind, giving creators the freedom to customize, extend, and improve their projects.
					</p>
					<p>
						At Xernerx Studios, our mission is simple:
						<em>empower developers with the right tools so they can focus on creating great bots, not reinventing the wheel.</em>
					</p>
				</section>

				<div className='grid-container'>
					<div className='card card-content'>
						<h2>Services</h2>
						<div className='card-content'>
							<div className='flex justify-between mt-2 mb-2'>
								Statistics Dashboard
								<p className='flex gap-3'>
									<Link href='https://app.xernerx.com'>
										<Dashboard className='icon' />
									</Link>
								</p>
							</div>

							<div className='flex justify-between mt-2 mb-2'>
								Statistics API
								<p className='flex gap-3'>
									<Link href='https://api.xernerx.com'>
										<API className='icon' />
									</Link>
								</p>
							</div>
						</div>
					</div>
					<div className='card card-content'>
						<h2>Software</h2>
						<div className='card-content'>
							<div className='flex justify-between mt-2 mb-2'>
								Xernerx Framework
								<p className='flex gap-3'>
									<Link href='https://www.npmjs.com/package/xernerx'>
										<NPM className='icon' />
									</Link>
								</p>
							</div>

							<div className='flex justify-between mt-2 mb-2'>
								Xernerx Stats
								<p className='flex gap-3'>
									<Link href='https://www.npmjs.com/package/xernerx-stats'>
										<NPM className='icon' />
									</Link>
									<Link href='https://github.com/xernerx/xernerx-stats'>
										<Github className='icon' />
									</Link>
								</p>{' '}
							</div>
						</div>
					</div>
					<div className='card card-content'>
						<h2>Discord</h2>
						<p className='card-content'></p>
					</div>
				</div>
			</div>
		</>
	);
}
