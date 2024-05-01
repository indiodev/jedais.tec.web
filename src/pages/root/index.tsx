import { GameController, Graph, LightningA } from '@phosphor-icons/react';
import React from 'react';

import { About } from './about';
import { Blog } from './blog';
import { Contact } from './contact';
import { Course } from './course';
import { Hero } from './hero';
import { Professional } from './professional';

export function Root(): React.ReactElement {
	return (
		<>
			<Hero />

			<section className="w-f grid grid-cols-2 lg:flex lg:flex-row">
				<img
					src="/school-1.jpeg"
					className="flex-1 lg:max-w-[calc(100%/4)] w-full h-48 object-cover"
					alt=""
				/>

				<img
					src="/school-5.jpeg"
					className="flex-1 lg:max-w-[calc(100%/4)] w-full h-48 object-cover"
					alt=""
				/>
				<img
					src="/school-2.jpeg"
					className="flex-1 lg:max-w-[calc(100%/4)] w-full h-48 object-cover"
					alt=""
				/>

				<img
					src="/school-3.jpeg"
					className="flex-1 lg:max-w-[calc(100%/4)] w-full h-48 object-cover"
					alt=""
				/>
			</section>

			<section className="py-36">
				<div className="container flex flex-wrap justify-between gap-20">
					<aside className="min-w-[320px] shadow-xl flex-1 bg-[#fd4d40] h-auto max-h-80 w-full relative flex flex-col p-8 pt-12 gap-4">
						<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-inherit w-24 h-24 flex items-center justify-center">
							<GameController
								size={32}
								weight="fill"
							/>
						</div>
						<h2 className="text-center font-semibold text-xl">
							Programação e Jogos
						</h2>
						<p className="text-center text-lg">
							Descubra o mundo fascinante do desenvolvimento de jogos com nossos
							cursos especializados! Transforme sua paixão por jogos em uma
							carreira promissora.
						</p>
					</aside>
					<aside className="min-w-[320px] shadow-xl flex-1 bg-[#fdb62f] h-auto max-h-80 w-full relative flex flex-col p-8 pt-12 gap-4">
						<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-inherit w-24 h-24 flex items-center justify-center">
							<Graph
								size={32}
								weight="fill"
							/>
						</div>
						<h2 className="text-center font-semibold text-xl">
							Raciocínio Lógico
						</h2>
						<p className="text-center text-lg">
							Domine a lógica de programação e abra portas para uma carreira em
							tecnologia. Aprenda a pensar e resolva problemas com desafios
							reais.
						</p>
					</aside>
					<aside className="min-w-[320px] shadow-xl flex-1 bg-[#16c3b0] h-auto max-h-80 w-full relative flex flex-col p-8 pt-12 gap-4">
						<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-inherit w-24 h-24 flex items-center justify-center">
							<LightningA
								size={32}
								weight="fill"
							/>
						</div>
						<h2 className="text-center font-semibold text-xl">
							Tecnologia e IA
						</h2>
						<p className="text-center text-lg">
							Explore o futuro da tecnologia, aprenda a construir sistemas
							inteligentes, domine algoritmos de IA e aplique seu conhecimento
							em projetos reais.
						</p>
					</aside>
				</div>
			</section>

			<Course />
			<Professional />
			<Blog />
			<About />
			<Contact />
		</>
	);
}
