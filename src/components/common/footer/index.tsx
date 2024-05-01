import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react';

export function Footer(): React.ReactElement {
	return (
		<footer className="py-12 bg-slate-950 mt-36">
			<div className="container flex flex-col gap-4 justify-center items-center">
				<p className="text-center text-white">
					Todos os direitos reservados &copy; Jedais Tec
				</p>

				<ul className="flex gap-4">
					<li className="cursor-pointer">
						<a
							href="https://www.instagram.com/jedaistec"
							target="_blank"
							rel="noreferrer"
						>
							<InstagramLogo size={34} />
						</a>
					</li>
					<li className="cursor-pointer">
						<a
							href="https://www.facebook.com/jedaistec"
							target="_blank"
							rel="noreferrer"
						>
							<FacebookLogo size={34} />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
