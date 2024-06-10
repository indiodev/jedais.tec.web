const COURSES = [
	{
		id: 1,
		name: 'Informática Básica',
		level: 'Básico',
		public: '6 a 10 anos',
		schedule: 'Segunda a sexta',
		period: '4 meses',
		price: 'R$ 150,00',
	},
	{
		id: 2,
		name: 'Informática Intermediária',
		level: 'Intermediário',
		public: '13 a 16 anos',
		schedule: 'Segunda a sexta',
		period: '4 meses',
		price: 'R$ 150,00',
	},
	{
		id: 3,
		name: 'Lógica de programação',
		level: 'Intermediário',
		public: '11 a 16 anos',
		schedule: 'Segunda a sexta',
		period: '4 meses',
		price: 'R$ 160,00',
	},
	{
		id: 4,
		name: 'Informática Básica',
		level: 'Básica',
		public: 'Adultos',
		schedule: 'Segunda a sexta',
		period: '4 meses',
		price: 'R$ 180,00',
	},
	{
		id: 5,
		name: 'Informática Avançada',
		level: 'Avançada',
		public: 'Adultos',
		schedule: 'Segunda a sexta',
		period: '4 meses',
		price: 'R$ 180,00',
	},
];
export function Course(): React.ReactElement {
	return (
		<section id="courses">
			<div className="container">
				<h2 className="text-center font-bold text-3xl text-[#007bff]">
					Nossos Cursos
				</h2>
				<p className="text-center text-lg text-gray-700">
					Alavanque o seu aprendizado com os melhores conteúdos
				</p>

				<div className="md:grid md:grid-cols-2 flex flex-wrap w-full gap-12 py-28">
					{COURSES?.map((course) => (
						<aside
							className="w-full shadow-2xl flex gap-4 bg-[#007bff]"
							key={course.id}
						>
							<div className="py-4 px-8 gap-4 flex flex-col">
								<h2 className="font-semibold text-xl">{course.name}</h2>
								<div className="flex flex-col gap-4">
									<div className="flex flex-wrap gap-4 relative">
										<span className="font-medium px-4 rounded-full border-2">
											{course.public}
										</span>
										<span className="font-medium px-4 rounded-full border-2">
											{course.level}
										</span>
										<span className="font-medium px-4 rounded-full border-2">
											{course.period}
										</span>
										<span className="font-medium bg-white text-[#007bff] px-4 rounded-full">
											{course.price}
										</span>
									</div>
									<p className="text-zinc-50 text-lg line-clamp-3">
										Domine o essencial da informática com nosso curso: sistemas
										operacionais, softwares de escritório e navegação segura na
										internet. Abra portas para novas oportunidades de emprego e
										conecte-se ao mundo digital. Invista em si mesmo e esteja à
										frente na era digital!
									</p>

									<a className="cursor-pointer font-extrabold  uppercase rounded-full text-right">
										Saiba mais
									</a>
								</div>
							</div>
						</aside>
					))}
				</div>
			</div>
		</section>
	);
}
