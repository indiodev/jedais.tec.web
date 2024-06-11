import { WhatsappLogo, X } from '@phosphor-icons/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
export function Header(): React.ReactElement {
	const [openMobileMenu, setOpenMobileMenu] = React.useState(false);

	const { pathname } = useLocation();

	const isBlogView = pathname.includes('blog');

	return (
		<header className="flex w-full bg-[#007bff] py-4 fixed z-50 shadow-md">
			<nav className="container flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<img
						src="/logo.png"
						alt="Jedais Tec"
						className="w-20 h-20"
					/>
					{!isBlogView && <h1 className="text-2xl font-bold">JEDAIS TEC</h1>}
					{isBlogView && (
						<h1 className="text-2xl font-bold">JEDAIS TEC BLOG</h1>
					)}
				</div>

				{!isBlogView && (
					<ul className="hidden lg:flex gap-4 text-xl font-bold items-center">
						<li className="cursor-pointer">
							<ScrollLink
								to="home"
								spy={true}
								smooth={true}
								offset={0}
								duration={100}
							>
								Inicio
							</ScrollLink>
						</li>
						<li className="cursor-pointer">
							<ScrollLink
								to="courses"
								spy={true}
								smooth={true}
								offset={-150}
								duration={100}
							>
								Cursos
							</ScrollLink>
						</li>
						<li className="cursor-pointer">
							<ScrollLink
								to="about"
								spy={true}
								smooth={true}
								offset={-100}
								duration={100}
							>
								Sobre
							</ScrollLink>
						</li>
						<li className="cursor-pointer">
							<ScrollLink
								to="blog"
								spy={true}
								smooth={true}
								offset={-110}
								duration={100}
							>
								Blog
							</ScrollLink>
						</li>
						<li className="cursor-pointer">
							<ScrollLink
								to="contact"
								spy={true}
								smooth={true}
								offset={-110}
								duration={100}
							>
								Contato
							</ScrollLink>
						</li>

						<li className="cursor-pointer">
							<Link to="/networking">Networking</Link>
						</li>

						<li className="cursor-pointer">
							<a
								href="https://wa.link/109jxe"
								target="_blank"
								className="cursor-pointer bg-[#20c997] px-4 py-2 rounded-full flex gap-2 items-center"
								rel="noreferrer"
							>
								Fale conosco
								<WhatsappLogo size={32} />
							</a>
						</li>
					</ul>
				)}

				{!isBlogView && (
					<button
						data-collapse-toggle="navbar-default"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-[#6610f2] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-default"
						aria-expanded="false"
						onClick={() => setOpenMobileMenu((state) => !state)}
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				)}

				{openMobileMenu && (
					<div className="flex px-8 flex-1 flex-col absolute top-0 left-0 w-screen h-screen bg-[#131C55] z-50">
						<div className="flex py-10 justify-end">
							<button
								onClick={() => setOpenMobileMenu((state) => !state)}
								className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-[#6610f2] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							>
								<X
									size={32}
									weight="bold"
								/>
							</button>
						</div>
						<ul className="w-full flex flex-1 flex-col gap-8 py-8 text-3xl font-bold items-center">
							<li className="w-full flex justify-center items-center py-2 hover:bg-[#20c997]">
								<ScrollLink
									to="home"
									spy={true}
									smooth={true}
									offset={0}
									duration={100}
									className="w-full text-center cursor-pointer flex gap-2 items-center justify-center"
									onClick={() => setOpenMobileMenu((state) => !state)}
								>
									Inicio
								</ScrollLink>
							</li>
							<li className="w-full flex justify-center items-center py-2 hover:bg-[#20c997]">
								<ScrollLink
									to="courses"
									spy={true}
									smooth={true}
									offset={-150}
									duration={100}
									className="w-full text-center cursor-pointer flex gap-2 items-center justify-center"
									onClick={() => setOpenMobileMenu((state) => !state)}
								>
									Cursos
								</ScrollLink>
							</li>
							<li className="w-full flex justify-center items-center py-2 hover:bg-[#20c997]">
								<ScrollLink
									to="about"
									spy={true}
									smooth={true}
									offset={-100}
									duration={100}
									className="w-full text-center cursor-pointer flex gap-2 items-center justify-center"
									onClick={() => setOpenMobileMenu((state) => !state)}
								>
									Sobre
								</ScrollLink>
							</li>
							<li className="w-full flex justify-center items-center py-2 hover:bg-[#20c997]">
								<ScrollLink
									to="blog"
									spy={true}
									smooth={true}
									offset={-100}
									duration={100}
									className="w-full text-center cursor-pointer flex gap-2 items-center justify-center"
									onClick={() => setOpenMobileMenu((state) => !state)}
								>
									Blog
								</ScrollLink>
							</li>
							<li className="w-full flex justify-center items-center py-2 hover:bg-[#20c997]">
								<ScrollLink
									to="contact"
									spy={true}
									smooth={true}
									offset={-100}
									duration={100}
									className="w-full text-center cursor-pointer flex gap-2 items-center justify-center"
									onClick={() => setOpenMobileMenu((state) => !state)}
								>
									Contato
								</ScrollLink>
							</li>
							<li className="w-full flex justify-center items-center py-2 hover:bg-[#20c997]">
								<Link
									to="/networking"
									className="w-full text-center cursor-pointer flex gap-2 items-center justify-center"
									onClick={() => setOpenMobileMenu((state) => !state)}
								>
									Networking
								</Link>
							</li>
							<li className="w-full flex justify-center items-center text-[#63fdcf] py-6">
								<a
									href="https://wa.link/109jxe"
									target="_blank"
									className="w-full text-center cursor-pointer flex gap-2 items-center justify-center"
									rel="noreferrer"
								>
									Fale conosco
									<WhatsappLogo size={32} />
								</a>
							</li>
						</ul>
					</div>
				)}
			</nav>
		</header>
	);
}
