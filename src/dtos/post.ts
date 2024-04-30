import type { Post } from '@/entities/post';

export type CreatePost = Omit<
	Partial<Post>,
	'author' | 'id' | 'user_id' | 'created_at' | 'updated_at'
>;

export type ResponseCreatePost = Omit<Partial<Post>, 'author'>;

export type UpdatePost = Omit<
	Partial<Post>,
	'author' | 'user_id' | 'created_at' | 'updated_at'
>;

export type ResponseUpdatePost = Omit<Partial<Post>, 'author'>;

export type DeletePost = Pick<Post, 'id'>;
