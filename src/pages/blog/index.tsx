import React from 'react';
import { useParams } from 'react-router-dom';

import { Editor } from '@/components/common/editor';
import { UsePostShowQuery } from '@/query/post';

export function Blog(): React.ReactElement {
	const params = useParams() as { id: string };
	// const navigate = useNavigate();

	const { data: post, status: postStatus } = UsePostShowQuery(
		Number(params?.id),
	);

	return (
		<React.Fragment>
			{postStatus === 'error' && (
				<section className="h-screen w-screen flex justify-center items-center flex-col gap-4">
					<h1 className="text-slate-800 font-bold text-2xl">
						Ops. Post não encontrado
					</h1>
				</section>
			)}

			{postStatus === 'success' && (
				<section className="container py-8 flex flex-col gap-8">
					<h2 className="text-2xl text-slate-800">
						Bem-vindos ao blog da Jedais Tec!
					</h2>
					<div className="flex flex-col gap-2 text-slate-400">
						<h1 className="text-[#007bff] font-bold text-4xl">{post.title}</h1>
						<div className="flex gap-1">
							<span className="block rounded-full ">
								Publicado por <strong>{post.author?.name}</strong>,
							</span>
							<span className="block rounded-full text-slate-400">
								{new Intl.DateTimeFormat('pt-BR', {
									day: 'numeric',
									month: 'long',
									year: 'numeric',
								}).format(new Date(post.created_at))}
							</span>
						</div>
					</div>

					<Editor
						value={post.content}
						editable={false}
						className="border-0 text-gray-600 text-2xl p-0"
					/>
				</section>
			)}
		</React.Fragment>
	);
}
