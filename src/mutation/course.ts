import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type {
	CreateCourse,
	ResponseCreateCourse,
	ResponseUpdateCourse,
	UpdateCourse,
} from '@/dtos/course';
import { Service } from '@/services';

type CreateCourseMutateResponse = UseMutationResult<
	ResponseCreateCourse,
	Error | AxiosError | undefined,
	CreateCourse
>;

type UpdateCourseMutateResponse = UseMutationResult<
	ResponseUpdateCourse,
	Error | AxiosError | undefined,
	UpdateCourse
>;

type DeleteCourseMutateResponse = UseMutationResult<
	void,
	Error | AxiosError | undefined,
	number
>;
type CreateCourseMutate = {
	onSuccess?: (data?: ResponseCreateCourse) => void;
	onError?: (error?: AxiosError | Error) => void;
};

type UpdateCourseMutate = {
	onSuccess?: (data?: ResponseUpdateCourse) => void;
	onError?: (error?: AxiosError | Error) => void;
};

type DeleteCourseMutate = {
	onSuccess?: () => void;
	onError?: (error?: AxiosError | Error) => void;
};

async function CreateMutate(data: CreateCourse): Promise<ResponseCreateCourse> {
	return await Service.Course.Create(data);
}

async function UpdateMutate(data: UpdateCourse): Promise<ResponseUpdateCourse> {
	return await Service.Course.Update(data);
}

async function DeleteMutate(id: number): Promise<void> {
	return await Service.Course.Delete(id);
}

export function UseCreateCourseMutation({
	onError,
	onSuccess,
}: Partial<CreateCourseMutate>): CreateCourseMutateResponse {
	return useMutation({
		mutationKey: ['CREATE_POST_MUTATION'],
		mutationFn: CreateMutate,
		onSuccess,
		onError,
	});
}

export function UseUpdateCourseMutation({
	onError,
	onSuccess,
}: Partial<UpdateCourseMutate>): UpdateCourseMutateResponse {
	return useMutation({
		mutationKey: ['UPDATE_COURSE_MUTATION'],
		mutationFn: UpdateMutate,
		onSuccess,
		onError,
	});
}

export function UseDeleteCourseMutation({
	onError,
	onSuccess,
}: DeleteCourseMutate): DeleteCourseMutateResponse {
	return useMutation({
		mutationKey: ['DELETE_COURSE_MUTATION'],
		mutationFn: DeleteMutate,
		onError,
		onSuccess,
	});
}
