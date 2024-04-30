import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { Paginate } from '@/dtos/paginate';
import type { Course } from '@/entities/course';
import { Service } from '@/services';

type UseCoursePaginateQuery = UseQueryResult<
	Paginate<Course[]>,
	Error | AxiosError
>;
type UseCourseShowQuery = UseQueryResult<Course, Error | AxiosError>;

async function CoursePaginate(): Promise<Paginate<Course[]>> {
	return await Service.Course.Paginate();
}

async function CourseShow(id: number): Promise<Course> {
	return await Service.Course.Show(id);
}

export function UseCoursePaginateQuery(): UseCoursePaginateQuery {
	return useQuery({
		queryKey: ['COURSE_PAGINATE_QUERY'],
		queryFn: CoursePaginate,
	});
}

export function UseCourseShowQuery(id: number): UseCourseShowQuery {
	return useQuery({
		queryKey: ['COURSE_SHOW_QUERY', id],
		queryFn: () => CourseShow(id),
		enabled: !!id,
	});
}
