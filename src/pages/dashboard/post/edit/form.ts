import { z } from "zod";

export const Schema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  image: z.string().optional(),
});

export type UpdatePostForm = z.infer<typeof Schema>;
