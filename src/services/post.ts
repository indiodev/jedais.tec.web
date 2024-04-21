import type { Paginate } from "@/dtos/paginate";
import type {
  CreatePost,
  ResponseCreatePost,
  ResponseUpdatePost,
  UpdatePost,
} from "@/dtos/post";
import type { Post as Entity } from "@/entities/post";
import { API } from "@/lib/api";

export class Post {
  async Show(id: number): Promise<Entity> {
    const response = await API.get<Entity>(`/post/${id}`);
    return response.data;
  }

  async Paginate(): Promise<Paginate<Entity[]>> {
    const response = await API.get<Paginate<Entity[]>>("/post/paginate");
    return response.data;
  }

  async Create(data: CreatePost): Promise<ResponseCreatePost> {
    const response = await API.post<ResponseCreatePost>("/post", data);
    return response.data;
  }

  async Update({ id, ...data }: UpdatePost): Promise<ResponseUpdatePost> {
    const response = await API.patch<ResponseUpdatePost>(`/post/${id}`, data);
    return response.data;
  }
}
