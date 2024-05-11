import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';

const ITEMS = [
	{
		id: 1,
		image: '/image-1.png',
		'bg-color': '#007bff',
		title: 'Educação tecnológica especializada, divertida e de qualidade.',
		subtitle: 'Cursos incríveis e dinâmicos para seus filhos',
	},
	{
		id: 2,
		image: '/dias-maes.png',
		'bg-color': '#FF0080',
		title: 'Feliz dias das mães!',
		subtitle: 'A equipe Jedais e alunos desejam um feliz dia das mães!',
	},
];

export function Hero(): React.ReactElement {
	return (
		<Carousel
			className="w-full max-w-full px-0 py-0 overflow-x-hidden"
			id="home"
			opts={{
				loop: true,
			}}
		>
			<CarouselContent
				// className="h-auto md:h-screen relative overflow-x-hidden px-0 py-0 border-4"
				className="h-auto md:h-screen"
			>
				{ITEMS?.map((item) => (
					<CarouselItem
						key={item.id}
						className={`bg-[${item['bg-color']}] w-full`}
					>
						<div
							className={`container w-full flex h-full pt-32 md:pt-0 gap-2 md:gap-8 md:flex-row flex-col`}
						>
							<div className="flex-1 flex flex-col justify-center gap-2 md:pt-20 pt-12">
								<h2 className="text-5xl font-bold">{item.title}</h2>
								<p className="text-xl">{item.subtitle}</p>
								{/* <a
									href="#courses"
									className="mt-4 bg-[#ED078B] px-6 py-3 rounded-full w-max font-bold cursor-pointer"
								>
									Veja nossos cursos
								</a> */}
							</div>
							<div className="flex h-full justify-center md:justify-end items-end">
								<img
									src={item.image}
									className="object-cover md:h-3/4 h-1/2"
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
