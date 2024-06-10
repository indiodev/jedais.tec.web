import Autoplay from 'embla-carousel-autoplay';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';

const ITEMS = [
	{
		id: 1,
		image: '/image-1.png',
		background: 'bg-[#007bff]',
		title: 'Educação tecnológica especializada, divertida e de qualidade.',
		subtitle: 'Cursos incríveis e dinâmicos para seus filhos',
		link: (): React.ReactElement => {
			return (
				<a
					href="#courses"
					className="mt-4 bg-[#ED078B] px-6 py-3 rounded-full w-max font-bold cursor-pointer"
				>
					Veja nossos cursos
				</a>
			);
		},
	},
	// {
	// 	id: 2,
	// 	image: '/dias-maes.png',
	// 	background: 'bg-[#FF70AB]',
	// 	title: 'Celebrando o Amor Incondicional',
	// 	subtitle:
	// 		'Mãe, você é o coração pulsante de nossas vidas, a luz que nos ilumina mesmo nos dias mais sombrios. Obrigado por ser a personificação do amor, da sabedoria e da coragem. A equipe Jedais e alunos lhe deseja um Feliz Dia das Mães!',
	// },
];

export function Hero(): React.ReactElement {
	return (
		<Carousel
			className="w-full max-w-full px-0 py-0 overflow-x-hidden"
			id="home"
			opts={{
				loop: true,
			}}
			plugins={[
				Autoplay({
					delay: 8000,
				}),
			]}
		>
			<CarouselContent className="h-auto md:h-screen">
				{ITEMS?.map((item) => (
					<CarouselItem
						key={item.id}
						className={item.background}
					>
						<div
							className={`container w-full flex h-full pt-32 md:pt-0 gap-2 md:gap-8 md:flex-row flex-col`}
						>
							<div className="flex-1 flex flex-col justify-center gap-2 md:pt-20 pt-12">
								<h2 className="text-5xl font-bold">{item.title}</h2>
								<p className="text-xl">{item.subtitle}</p>
								{item.link && <item.link />}
							</div>
							<div className="flex h-full justify-center md:justify-end items-end">
								<img
									src={item.image}
									className="object-cover md:h-3/4 h-full"
								/>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			{/* <CarouselPrevious className="" /> */}
			{/* <CarouselNext /> */}
		</Carousel>
	);
}

{
	/* <section
			id="home"
			className="h-auto md:h-screen bg-[#007bff] relative overflow-x-hidden"
		>
			<div className="container flex h-full pt-32 md:pt-0 gap-2 md:gap-8 md:flex-row flex-col">
				<div className="flex-1 flex flex-col justify-center gap-2 md:pt-20 pt-12">
					<h2 className="text-5xl font-bold">
						Educação tecnológica especializada, divertida e de qualidade.
					</h2>
					<p className="text-xl">
						Cursos incríveis e dinâmicos para seus filhos
					</p>
					<a
						href="#courses"
						className="mt-4 bg-[#ED078B] px-6 py-3 rounded-full w-max font-bold cursor-pointer"
					>
						Veja nossos cursos
					</a>
				</div>
				<div className="flex h-full justify-center md:justify-end items-end">
					<img
						src="/image-1.png"
						className="object-cover md:h-3/4 h-1/2"
					/>
				</div>
			</div>
		</section> */
}
