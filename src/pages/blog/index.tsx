import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Editor } from '@/components/common/editor';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { UsePostShowQuery } from '@/query/post';

export function Blog(): React.ReactElement {
	const params = useParams() as { identifier: string };
	// const navigate = useNavigate();

	const { data: post, status: postStatus } = UsePostShowQuery(
		params?.identifier,
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
					<Breadcrumb>
						<BreadcrumbList className="text-[#007bff] text-md sm:text-lg">
							<BreadcrumbItem>
								<BreadcrumbLink>
									<Link to="/">Inicio</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink>
									<span>blog</span>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage className="text-[#007bff] font-bold">
									<Link to={`/blog/${post.id}`}>{post.slug}</Link>
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>

					<div className="space-y-4">
						<h2 className="text-xl sm:text-2xl text-slate-800">
							Bem-vindo ao blog da Jedais Tec!
						</h2>

						<p className="text-slate-600 text-base sm:text-lg">
							Estamos entusiasmados por tê-lo conosco no blog da Jedais Tec,
							onde compartilhamos artigos, atualizações e histórias de sucesso
							que inspiram e informam. Aqui é o lugar ideal para entusiastas da
							tecnologia, estudantes e profissionais aprenderem e crescerem.
							Convidamos você a explorar nossos conteúdos, participar de
							discussões e conhecer mais sobre nossos projetos e inovações
							pedagógicas. Continue acompanhando para descobrir como a
							tecnologia está transformando a educação. Seja bem-vindo e
							aproveite a leitura!
						</p>
					</div>

					<div className="flex flex-col gap-2 text-slate-400">
						<h1 className="text-[#007bff] font-bold text-2xl sm:text-4xl">
							{post.title}
						</h1>
						<div className="flex gap-1 flex-col sm:flex-row text-xs sm:text-sm">
							<span className="block rounded-full ">
								Publicado por <strong>{post.author?.name}</strong>,
							</span>
							<span className="block rounded-full text-slate-400">
								{new Intl.DateTimeFormat('pt-BR', {
									day: 'numeric',
									month: 'long',
									year: 'numeric',
									hour: 'numeric',
									minute: 'numeric',
									hourCycle: 'h12',
								}).format(new Date(post.created_at))}
							</span>
						</div>
					</div>

					<Editor
						value={post.content}
						editable={false}
						className="border-0 text-gray-600 p-0"
					/>

					{/* <div className="flex text-[#007bff] gap-2 flex-col">
						<h2 className="text-xl">Leia também</h2>

						<div>
							<Link
								to={`/blog/${post.id}`}
								className="text-[#007bff] font-bold text-lg"
							>
								Clique aqui
							</Link>
						</div>
					</div> */}
				</section>
			)}
		</React.Fragment>
	);
}
