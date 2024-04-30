import { z } from 'zod';

export const Schema = z.object({
	title: z.string().optional(),
	content: z.string().optional(),
	cover_image: z.string().optional(),
	resume: z.string().optional(),
});

export type UpdatePostForm = z.infer<typeof Schema>;
