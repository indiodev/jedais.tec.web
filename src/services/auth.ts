import type { Login, ResponseLogin } from "@/dtos/auth";
import { API } from "@/lib/api";

export class Auth {
  async Login(data: Login): Promise<ResponseLogin> {
    const response = await API.post<ResponseLogin>("/auth/login", data);
    return response.data;
  }
}
