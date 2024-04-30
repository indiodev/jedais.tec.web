import type { UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type {
	CreatePost,
	ResponseCreatePost,
	ResponseUpdatePost,
	UpdatePost,
} from '@/dtos/post';
import { Service } from '@/services';

type CreatePostMutateResponse = UseMutationResult<
	ResponseCreatePost,
	Error | AxiosError | undefined,
	CreatePost
>;

type UpdatePostMutateResponse = UseMutationResult<
	ResponseUpdatePost,
	Error | AxiosError | undefined,
	UpdatePost
>;

type DeletePostMutateResponse = UseMutationResult<
	void,
	Error | AxiosError | undefined,
	number
>;
type CreatePostMutate = {
	onSuccess?: (data?: ResponseCreatePost) => void;
	onError?: (error?: AxiosError | Error) => void;
};

type UpdatePostMutate = {
	onSuccess?: (data?: ResponseUpdatePost) => void;
	onError?: (error?: AxiosError | Error) => void;
};

type DeletePostMutate = {
	onSuccess?: () => void;
	onError?: (error?: AxiosError | Error) => void;
};

async function CreateMutate(data: CreatePost): Promise<ResponseCreatePost> {
	return await Service.Post.Create(data);
}

async function UpdateMutate(data: UpdatePost): Promise<ResponseUpdatePost> {
	return await Service.Post.Update(data);
}

async function DeleteMutate(id: number): Promise<void> {
	return await Service.Post.Delete(id);
}

export function UseCreatePostMutation({
	onError,
	onSuccess,
}: Partial<CreatePostMutate>): CreatePostMutateResponse {
	return useMutation({
		mutationKey: ['CREATE_POST_MUTATION'],
		mutationFn: CreateMutate,
		onSuccess,
		onError,
	});
}

export function UseUpdatePostMutation({
	onError,
	onSuccess,
}: Partial<UpdatePostMutate>): UpdatePostMutateResponse {
	return useMutation({
		mutationKey: ['UPDATE_POST_MUTATION'],
		mutationFn: UpdateMutate,
		onSuccess,
		onError,
	});
}

export function UseDeletePostMutation({
	onError,
	onSuccess,
}: DeletePostMutate): DeletePostMutateResponse {
	return useMutation({
		mutationKey: ['DELETE_POST_MUTATION'],
		mutationFn: DeleteMutate,
		onError,
		onSuccess,
	});
}
