import {
	ArrowSquareOut,
	CircleNotch,
	PencilSimpleLine,
	Trash,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import {
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	Table as TableRoot,
	TableRow,
} from '@/components/ui/table';
import type { Post } from '@/entities/post';
import { Tanstack } from '@/lib/tanstack';
import { UseDeletePostMutation } from '@/mutation/post';

type Props = {
	labels: string[];
	data: Partial<Post>[];
};

export function Table({ data, labels }: Props): React.ReactElement {
	const { mutateAsync: deletePost, status: deletePostStatus } =
		UseDeletePostMutation({
			onSuccess() {
				Tanstack.refetchQueries({
					queryKey: ['POST_PAGINATE_QUERY'],
				});
				toast.success('Postagem excluída com sucesso');
			},
			onError(error) {
				// if (error instanceof AxiosError) {
				// toast.error(error?.response?.data.message);
				// }
				toast.error('Houve um erro ao tentar excluir. Tente mais tarde.');
				console.log(error);
			},
		});
	return (
		<TableRoot>
			<TableHeader>
				<TableRow className="font-bold uppercase">
					{labels?.map((label) => <TableHead key={label}>{label}</TableHead>)}
					<TableHead></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data?.map((item) => (
					<TableRow key={item.id}>
						<TableCell className="flex-1">
							<h2 className="text-sm line-clamp-1">{item.title}</h2>
						</TableCell>

						<TableCell className="flex-1">{item.author?.name}</TableCell>
						<TableCell className="w-[100px]">
							<div className="flex gap-2">
								<Link to={{ pathname: `/dashboard/post/${item.id}/edit` }}>
									<Button className="px-2 py-1 bg-transparent border-[#4763E4] border text-[#4763E4] hover:bg-[#4763E4]/90 hover:text-white">
										<PencilSimpleLine size={18} />
									</Button>
								</Link>

								<Link
									to={{ pathname: `/blog/${item.slug}` }}
									target="_blank"
								>
									<Button className="px-2 py-1 bg-transparent border-[#4763E4] border text-[#4763E4] hover:bg-[#4763E4]/90 hover:text-white">
										<ArrowSquareOut size={18} />
									</Button>
								</Link>

								<Button
									className="px-2 py-1 bg-transparent border-[#4763E4] border text-[#4763E4] hover:bg-[#4763E4]/90 hover:text-white"
									onClick={() => deletePost(item.id!)}
								>
									{deletePostStatus === 'pending' && (
										<CircleNotch className="animate-spin" />
									)}

									{!(deletePostStatus === 'pending') && <Trash size={18} />}
								</Button>
							</div>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</TableRoot>
	);
}
