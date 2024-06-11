import { useNavigate, useParams } from 'react-router-dom';

const Professionals = [
	{
		id: 1,
		name: 'João Aguila',
		position: 'CEO e Professor',
		image: '/professional-1.jpeg',

		social: {
			instagram: 'https://www.instagram.com/joaoaguila16/',
			linkedin: 'https://www.linkedin.com/in/joaoaguila2023/',
			// github: 'https://github.com/indiodev/',
		},
	},

	{
		id: 2,
		name: 'Thiago Branco',
		position: 'Marketing e Professor',
		image: '/professional-2.jpeg',

		social: {
			instagram: 'https://www.instagram.com/thcastelo_/',
			// linkedin: 'https://www.linkedin.com/in/thiagobranco16/',
			// github: 'https://github.com/indiodev/',
		},
	},
	{
		id: 3,
		name: 'Roberto Wagner',
		position: 'Relações públicas',
		image: '/professional-3.jpeg',
		social: {
			instagram: 'https://www.instagram.com/beto_645/',
			// linkedin: 'https://www.linkedin.com/in/robertowagnerdev/',
			// github: 'https://github.com/indiodev/',
		},
	},

	{
		id: 4,
		name: 'Marcos Jhollyfer',
		position: 'Eng. Software e Professor',
		image: '/professional-4.jpeg',
		social: {
			instagram: 'https://www.instagram.com/indio.dev/',
			linkedin: 'https://www.linkedin.com/in/jhollyferr/',
			github: 'https://github.com/indiodev/',
		},
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

export function NetworkingProfile(): React.ReactElement {
	const navigate = useNavigate();
	const params = useParams() as { slug: string };
	const profile = Professionals.find((professional) =>
		professional.name.toLowerCase().replace(' ', '-').includes(params.slug),
	);
	return (
		<div className="py-20 bg-gradient-to-r from-teal-200 to-teal-500 h-screen flex items-center justify-center">
			<main className="container flex-col max-w-xl w-full gap-8 flex">
				{/* <button
					onClick={() => navigate(-1)}
					className="flex gap-2 items-center cursor-pointer"
				>
					<CaretLeft
						size={24}
						weight="bold"
					/>
					<span className="text-lg font-bold">Voltar</span>
				</button> */}
				<div className="flex flex-col justify-center items-center">
					<img
						src={profile?.image}
						alt={`${profile?.name} Image`}
						className="rounded-full w-[180px] h-[180px] object-cover border-4 border-slate-800"
					/>
					<h2 className="font-bold text-2xl">{profile?.name}</h2>
					<span>{profile?.position}</span>
				</div>

				<div className="flex flex-col gap-2 w-full">
					{profile?.social?.github && (
						<a
							href={profile?.social?.github}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 font-bold text-lg text-green-400 hover:text-green-500 hover:bg-slate-800  bg-slate-800/40 p-3 rounded-lg transition-all duration-200"
						>
							Github
						</a>
					)}
					{profile?.social?.instagram && (
						<a
							href={profile?.social?.instagram}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 font-bold text-lg text-green-400 hover:text-green-500 hover:bg-slate-800  bg-slate-800/40 p-3 rounded-lg transition-all duration-200"
						>
							Instagram
						</a>
					)}
					{profile?.social?.linkedin && (
						<a
							href={profile?.social?.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-2 font-bold text-lg text-green-400 hover:text-green-500 hover:bg-slate-800  bg-slate-800/40 p-3 rounded-lg transition-all duration-200"
						>
							Linkedin
						</a>
					)}

					<button
						onClick={() => navigate('/', { replace: true })}
						className="flex items-center justify-center gap-2 font-bold text-lg text-green-400 hover:text-green-500 hover:bg-slate-800  bg-slate-800/40 p-3 rounded-lg transition-all duration-200"
					>
						Ir para home
					</button>
				</div>
			</main>
		</div>
	);
}
