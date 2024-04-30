import type { User } from './user';

export type Post = {
	id: number;
	created_at: string;
	createdAt?: string;
	updated_at: string;
	title: string;
	content: string;
	cover_image: string;
	resume: string;
	userId?: number;
	user_id?: number;
	author?: User;
};
