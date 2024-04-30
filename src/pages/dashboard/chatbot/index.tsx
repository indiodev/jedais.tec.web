export function Chatbot(): React.ReactElement {
	// const navigate = useNavigate();

	// const { data: posts, status } = UsePostPaginateQuery();

	return (
		<section className="flex flex-1 w-full h-full justify-center items-center flex-col gap-5 text-[#007bff]">
			<div className="flex w-full">
				<h1 className="text-2xl  font-bold">Chatbot</h1>
			</div>
			{/* <div className="flex w-full gap-2">
				<Input placeholder="Pesquise por título ou autor" />
				<Button className="px-4 max-w-[150px] w-full bg-[#007bff]">
					<MagnifyingGlass
						size={20}
						weight="bold"
					/>
				</Button>

				<Button
					className="px-4 max-w-[150px] w-full bg-[#007bff]"
					onClick={() => navigate('/dashboard/post/create')}
				>
					<Plus
						size={20}
						weight="bold"
					/>
				</Button>
			</div> */}
			<div className="flex-1 w-full">
				<h2 className="text-2xl">Página ainda em construção</h2>
				{/* {status === 'success' && (
					<Table
						labels={[
							'Título',
							// "Conteúdo",
							// "Banner",
							'Autor',
						]}
						data={posts.data}
					/>
				)} */}
			</div>
		</section>
	);
}
