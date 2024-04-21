import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import type {
  CreatePost,
  ResponseCreatePost,
  ResponseUpdatePost,
  UpdatePost,
} from "@/dtos/post";
import { Service } from "@/services";

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

type CreatePostMutate = {
  onSuccess?: (data?: ResponseCreatePost) => void;
  onError?: (error?: AxiosError | Error) => void;
};

type UpdatePostMutate = {
  onSuccess?: (data?: ResponseUpdatePost) => void;
  onError?: (error?: AxiosError | Error) => void;
};

async function CreateMutate(data: CreatePost): Promise<ResponseCreatePost> {
  return await Service.Post.Create(data);
}

async function UpdateMutate(data: UpdatePost): Promise<ResponseUpdatePost> {
  return await Service.Post.Update(data);
}

export function UseCreatePostMutation({
  onError,
  onSuccess,
}: Partial<CreatePostMutate>): CreatePostMutateResponse {
  return useMutation({
    mutationKey: ["CREATE_POST_MUTATION"],
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
    mutationKey: ["UPDATE_POST_MUTATION"],
    mutationFn: UpdateMutate,
    onSuccess,
    onError,
  });
}
