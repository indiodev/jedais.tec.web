import { z } from 'zod';

export const Schema = z.object({
	title: z.string(),
	content: z.string(),
	cover_image: z.string().optional(),
	resume: z.string(),
});

export type CreatePostForm = z.infer<typeof Schema>;
