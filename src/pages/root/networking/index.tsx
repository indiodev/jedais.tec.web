import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Card, CardFooter, CardHeader } from '@/components/ui/card';

const Professionals = [
	{
		id: 1,
		name: 'João Aguila',
		position: 'CEO e Professor',
		image: '/professional-1.jpeg',
	},

	{
		id: 2,
		name: 'Thiago Branco',
		position: 'Marketing e Professor',
		image: '/professional-2.jpeg',
	},
	{
		id: 3,
		name: 'Roberto Wagner',
		position: 'Relações públicas',
		image: '/professional-3.jpeg',
	},

	{
		id: 4,
		name: 'Marcos Jhollyfer',
		position: 'Eng. Software e Professor',
		image: '/professional-4.jpeg',
	},

	// {
	// 	id: 5,
	// 	name: 'Vitória Martins',
	// 	position: 'Secretária/Estagiária',
	// 	image: '/professional-5.jpeg',
	// },
	// {
	// 	id: 6,
	// 	name: 'Leny',
	// 	position: 'Tec. Geoprocessamento/secretária',
	// 	image: '/professional-6.jpeg',
	// },
];

export function Networking(): React.ReactElement {
	const navigate = useNavigate();
	return (
		<section className="bg-[#19a3ff] py-20 h-screen">
			<div className="container h-full">
				<h2 className="text-center font-bold text-3xl">
					Conheça mais sobre a nossa equipe
				</h2>
				<p className="text-center text-lg text-gray-100">
					Acompanhe-nos e descubra mais sobre a nossa equipe
				</p>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-16 gap-4">
					{Professionals?.map((professional) => (
						<Card
							className="bg-[#19a3ff] border-0 hover:scale-105 transition-all cursor-pointer"
							key={professional.id}
							onClick={() =>
								navigate(
									`/networking/${professional.name.toLowerCase().replace(' ', '-')}`,
								)
							}
						>
							<CardHeader className="flex items-center p-0">
								<img
									src={professional.image}
									alt=""
									className="w-full h-full object-cover"
								/>
							</CardHeader>
							<CardFooter className="flex flex-col w-full bg-[#16c3b0] px-0 pt-4">
								<Link
									to={`/networking/${professional.name.toLowerCase().replace(' ', '-')}`}
									className="text-slate-100 text-center font-semibold text-xl"
								>
									{professional.name}
								</Link>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
