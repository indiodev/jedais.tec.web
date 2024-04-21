import { z } from "zod";

export const Schema = z.object({
  title: z.string(),
  content: z.string(),
  image: z.string().optional(),
});

export type CreatePostForm = z.infer<typeof Schema>;
