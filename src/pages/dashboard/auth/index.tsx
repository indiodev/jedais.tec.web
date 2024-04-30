import { zodResolver } from '@hookform/resolvers/zod';
import { CircleNotch } from '@phosphor-icons/react';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UseLoginMutation } from '@/mutation/auth';
import { useAuth } from '@/store/auth';

import type { SignIn } from './form';
import { SchemaSignIn } from './form';

export function Auth(): React.ReactElement {
	const navigate = useNavigate();
	const { login: storeLogin } = useAuth();

	const form = useForm<SignIn>({
		resolver: zodResolver(SchemaSignIn),
		mode: 'onSubmit',
	});

	const { mutateAsync: login, status: loginStatus } = UseLoginMutation({
		onError(error) {
			if (error instanceof AxiosError) {
				toast.error(error.response?.data.message);
			}

			toast.error('Houve algo errado');

			console.log(error);
		},
		onSuccess(data) {
			console.log({ data });
			storeLogin({ role: data!.role, token: data!.token });
			navigate('/dashboard/post');
		},
	});

	const handleSignIn = form.handleSubmit((data) => login(data));

	return (
		<section className="flex flex-1 w-screen h-screen text-[#007bff]">
			<div className="container flex w-full h-full justify-center items-center flex-col gap-5">
				<Form {...form}>
					<form
						onSubmit={handleSignIn}
						className="flex flex-col gap-8 max-w-xl w-full"
					>
						<div className="flex flex-col flex-1 gap-1 justify-center items-center">
							<img
								src="/logo.png"
								className="w-28 h-28"
							/>
							<h3 className="text-lg">
								Por favor, realize seu login para continuar.
							</h3>
						</div>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-md">E-mail</FormLabel>
									<FormControl>
										<Input
											placeholder="exemplo@jedaistec.com.br"
											type="email"
											className="text-base py-4"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-md">Senha</FormLabel>
									<FormControl>
										<Input
											placeholder="********************"
											type="password"
											className="text-base"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							className="bg-[#007bff] uppercase"
							disabled={loginStatus === 'pending'}
						>
							{loginStatus === 'pending' && (
								<CircleNotch className="animate-spin" />
							)}

							{!(loginStatus === 'pending') && <span>Entrar</span>}
						</Button>
					</form>
				</Form>
			</div>
		</section>
	);
}
