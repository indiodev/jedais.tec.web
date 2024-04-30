import { z } from 'zod';

export const Schema = z.object({
	name: z.string({ required_error: 'Informe o nome do curso.' }),
	description: z.string({ required_error: 'Informe a descrição do curso.' }),
	level: z.string({ required_error: 'Selecione o nível do curso.' }),
	period: z.string({
		required_error: 'Selecione o tempo de duração do curso.',
	}),
	price: z.coerce.number({
		required_error: 'Informe valor do curso.',
		invalid_type_error: 'Informe valor do curso.',
	}),
	public: z.string({
		required_error: 'Selecione o tempo de duração do curso.',
	}),
});

export type UpdateCourseForm = z.infer<typeof Schema>;
