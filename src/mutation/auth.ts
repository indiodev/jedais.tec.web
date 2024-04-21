import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import type { Login, ResponseLogin } from "@/dtos/auth";
import { Service } from "@/services";

async function LoginMutate(data: Login): Promise<ResponseLogin> {
  return await Service.Auth.Login(data);
}

type LoginMutateResponse = UseMutationResult<
  ResponseLogin,
  Error | AxiosError | undefined,
  Login,
  unknown
>;

type LoginMutate = {
  onSuccess?: (data?: ResponseLogin) => void;
  onError?: (error?: AxiosError | Error) => void;
};

export function UseLoginMutation({
  onError,
  onSuccess,
}: Partial<LoginMutate>): LoginMutateResponse {
  return useMutation({
    mutationKey: ["LOGIN_MUTATION"],
    mutationFn: LoginMutate,
    onSuccess,
    onError,
  });
}
