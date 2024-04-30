import { Link } from 'react-router-dom';

import { Editor } from '@/components/editor';
import { UsePostPaginateQuery } from '@/query/post';

export function Blog(): React.ReactElement {
	// const navigate = useNavigate();

	const { data: posts, status: paginatePostStatus } = UsePostPaginateQuery();

	return (
		<section
			id="blog"
			className="text-black py-20"
		>
			<div className="container">
				{' '}
				<h2 className="text-center font-bold text-3xl text-[#007bff]">
					Nosso Blog
				</h2>
				<p className="text-center text-lg text-gray-700">
					Fique por dentro de todas as nossas novidades
				</p>
				{paginatePostStatus === 'success' && (
					<div className="flex w-full flex-wrap gap-4 py-28 justify-center xl:justify-start">
						{posts.data?.map((post) => (
							<aside
								className="md:max-w-[320px] w-full shadow-lg flex gap-4 h-auto"
								key={post.id}
							>
								<div className="py-4 px-8 gap-4 flex flex-col">
									<div>
										<span className="text-gray-700 text-xs">
											{new Intl.DateTimeFormat('pt-BR', {}).format(
												new Date(post.created_at),
											)}{' '}
											<strong>{post.author?.name}</strong>
										</span>
										<h2 className="font-semibold text-xl line-clamp-3">
											{post.title}
										</h2>
									</div>
									<div className="flex flex-col gap-4 line-clamp-3">
										<Editor
											mode="view"
											content={post.content}
											className="border-0 p-0 text-lg line-clamp-3 text-gray-500"
										/>

										<Link
											to={`/blog/${post.id}`}
											target="_blank"
											// onClick={() => navigate(`/blog/${post.id}`)}
											className="cursor-pointer font-extrabold bg-[#007bff] text-white px-4 py-1 rounded-full text-center w-32"
										>
											Leia mais
										</Link>
									</div>
								</div>
							</aside>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
