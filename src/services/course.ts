import type {
	CreateCourse,
	ResponseCreateCourse,
	ResponseUpdateCourse,
	UpdateCourse,
} from '@/dtos/course';
import type { Paginate } from '@/dtos/paginate';
import type { Course as Entity } from '@/entities/course';
import { API } from '@/lib/api';

export class Course {
	async Show(id: number): Promise<Entity> {
		const response = await API.get<Entity>(`/course/${id}`);
		return response.data;
	}

	async Paginate(): Promise<Paginate<Entity[]>> {
		const response = await API.get<Paginate<Entity[]>>('/course/paginate');
		return response.data;
	}

	async Create(data: CreateCourse): Promise<ResponseCreateCourse> {
		const response = await API.post<ResponseCreateCourse>('/course', data);
		return response.data;
	}

	async Update({ id, ...data }: UpdateCourse): Promise<ResponseUpdateCourse> {
		const response = await API.patch<ResponseUpdateCourse>(
			`/course/${id}`,
			data,
		);
		return response.data;
	}

	async Delete(id: number): Promise<void> {
		await API.delete(`/course/${id}`);
	}
}
