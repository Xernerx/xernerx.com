/** @format */

import Link from 'next/link';

export default function Page() {
	const servers = [
		{ name: 'one-dummi', description: 'Home server, linux', url: 'https://dummi.xernerx.com' },
		{ name: 'two-dummi', description: 'Cloud server, linux', url: 'https://hosting.xernerx.com' },
	];

	return (
		<div className="mt-[3rem] ml-[10rem] mr-[10rem]">
			<h2>Hosting</h2>
			<p>The list below are all my hosting servers, you need an account for each server. You can request this from me personally.</p>

			<div className="grid-container">
				{servers.map((server) => {
					return (
						<div key={server.name} className="card p-[2rem]">
							<div>
								<h3>{server.name}</h3>
								<p>{server.description}</p>
								<Link href={server.url} target="_blank" rel="noopener noreferrer">
									<button className="button-link">Open</button>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
