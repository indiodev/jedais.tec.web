import Autoplay from 'embla-carousel-autoplay';

import { Card, CardFooter, CardHeader } from '../../components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../../components/ui/carousel';

const Professionals = [
	{
		id: 1,
		name: 'João Aguila',
		position: 'CEO e Professor',
		image: '/professional-1.jpeg',
	},

	{
		id: 2,
		name: 'Marcos Jhollyfer',
		position: 'Eng. Software e Professor',
		image: '/professional-4.jpeg',
	},
];

export function Professional(): React.ReactElement {
	return (
		<section className="bg-[#19a3ff] py-20">
			<div className="container">
				<h2 className="text-center font-bold text-3xl">
					Profissionais especializados
				</h2>
				<p className="text-center text-lg text-gray-100">
					Aprenda sobre tecnologia com os nossos profissionais especializados
				</p>

				<div className="flex items-center justify-center pt-16">
					<Carousel
						className="w-full max-w-xs"
						plugins={[
							Autoplay({
								delay: 5000,
							}),
						]}
					>
						<CarouselContent>
							{Professionals?.map((professional) => (
								<CarouselItem key={professional.id}>
									<Card className="bg-[#19a3ff] border-0">
										<CardHeader className="w-full flex items-center p-0">
											<img
												src={professional.image}
												alt=""
												className="w-full h-[300px] object-cover"
											/>
										</CardHeader>
										<CardFooter className="flex flex-col w-full bg-[#16c3b0] px-0 pt-4">
											<h2 className="text-slate-100 text-center font-semibold text-xl">
												{professional.name}
											</h2>
											<span className="text-gray-100 font-medium text-center">
												{professional.position}
											</span>
										</CardFooter>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="" />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		</section>
	);
}
