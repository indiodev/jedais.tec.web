import { z } from 'zod';

export const SchemaSignIn = z.object({
	email: z
		.string({
			required_error: 'Informe seu e-mail.',
		})
		.email({ message: 'Informe um e-mail válido.' }),
	password: z
		.string({
			required_error: 'Informe sua senha.',
		})
		.min(6, { message: 'Senha deve ter ao menos 6 caracteres' }),
});

export type SignIn = z.infer<typeof SchemaSignIn>;
