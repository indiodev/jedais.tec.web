import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { Paginate } from '@/dtos/paginate';
import type { Post } from '@/entities/post';
import { Service } from '@/services';

type UsePostPaginateQuery = UseQueryResult<
	Paginate<Post[]>,
	Error | AxiosError
>;
type UsePostShowQuery = UseQueryResult<Post, Error | AxiosError>;

async function PostPaginate(): Promise<Paginate<Post[]>> {
	return await Service.Post.Paginate();
}

async function PostShow(identifier: number | string): Promise<Post> {
	return await Service.Post.Show(identifier);
}

export function UsePostPaginateQuery(): UsePostPaginateQuery {
	return useQuery({
		queryKey: ['POST_PAGINATE_QUERY'],
		queryFn: PostPaginate,
	});
}

export function UsePostShowQuery(
	identifier: number | string,
): UsePostShowQuery {
	return useQuery({
		queryKey: ['POST_SHOW_QUERY', identifier],
		queryFn: () => PostShow(identifier),
		enabled: !!identifier,
	});
}
