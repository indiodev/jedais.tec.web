import type { Post } from "@/entities/post";

export type CreatePost = Omit<
  Partial<Post>,
  | "author"
  | "id"
  | "user_id"
  | "userId"
  | "created_at"
  | "updated_at"
  | "createdAt"
>;

export type ResponseCreatePost = Omit<Partial<Post>, "author">;

export type UpdatePost = Omit<
  Partial<Post>,
  "author" | "user_id" | "userId" | "created_at" | "updated_at" | "createdAt"
>;

export type ResponseUpdatePost = Omit<Partial<Post>, "author">;
