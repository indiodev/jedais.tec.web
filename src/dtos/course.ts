import type { Course } from '@/entities/course';

export type CreateCourse = Omit<
	Partial<Course>,
	'id' | 'created_at' | 'updated_at'
>;

export type ResponseCreateCourse = Partial<Course>;

export type UpdateCourse = Omit<Partial<Course>, 'created_at' | 'updated_at'>;

export type ResponseUpdateCourse = Partial<Course>;

export type DeleteCourse = Pick<Course, 'id'>;
