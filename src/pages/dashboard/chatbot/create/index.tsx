import { zodResolver } from '@hookform/resolvers/zod';
import { CircleNotch } from '@phosphor-icons/react';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Editor } from '@/components/common/editor';
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
import { Textarea } from '@/components/ui/textarea';
import { UseCreatePostMutation } from '@/mutation/post';

import type { CreatePostForm } from './form';
import { Schema } from './form';

export function Create(): React.ReactElement {
	const navigate = useNavigate();
	const form = useForm<CreatePostForm>({
		resolver: zodResolver(Schema),
		mode: 'onSubmit',
	});

	const { mutateAsync: create, status: createStatus } = UseCreatePostMutation({
		onError(error) {
			if (error instanceof AxiosError) {
				// toast.error(error.response?.data.message);
				toast.error('Houve um erro ao tentar publicar.');
			}
			console.log(error);
		},
		onSuccess() {
			toast.success('Seu novo post foi publicado.');
			navigate('/dashboard/post');
		},
	});

	const handleCreate = form.handleSubmit((data) => create(data));

	return (
		<section className="flex flex-1 w-full h-full justify-center items-center flex-col gap-5 text-[#007bff]">
			<div className="flex w-full">
				<h1 className="text-2xl  font-bold">Nova Postagem</h1>
			</div>
			<div className="flex flex-1 w-full h-full">
				<Form {...form}>
					<form
						onSubmit={handleCreate}
						className="flex flex-col gap-8  w-full flex-1 h-max-full"
					>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel className=" text-md">Título</FormLabel>
									<FormControl>
										<Input
											placeholder="Seu título aqui..."
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
							name="resume"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-md">Resumo</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Um resumo do seu post aqui..."
											className="text-base py-4 resize-none"
											rows={3}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="content"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-md">Texto</FormLabel>
									<FormControl>
										<Editor
											className="max-h-96"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex justify-end py-4">
							<Button
								type="submit"
								className="bg-[#007bff] uppercase"
								disabled={createStatus === 'pending'}
							>
								{createStatus === 'pending' && (
									<CircleNotch className="animate-spin" />
								)}

								{!(createStatus === 'pending') && <span>Postar</span>}
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</section>
	);
}
