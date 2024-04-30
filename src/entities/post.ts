import type { User } from './user';

export type Post = {
	id: number;
	created_at: string;
	updated_at: string;
	title: string;
	content: string;
	cover_image: string;
	resume: string;
	user_id?: number;
	author?: User;
};
