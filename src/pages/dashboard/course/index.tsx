import { MagnifyingGlass, Plus } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UseCoursePaginateQuery } from '@/query/course';

import { Table } from './table';

export function Course(): React.ReactElement {
	const navigate = useNavigate();

	const { data: courses, status } = UseCoursePaginateQuery();

	return (
		<section className="flex flex-1 w-full h-full justify-center items-center flex-col gap-5 text-[#007bff]">
			<div className="flex w-full">
				<h1 className="text-3xl  font-bold">Cursos</h1>
			</div>
			<div className="flex w-full gap-2">
				<Input
					placeholder="Pesquise por título ou autor"
					className="text-lg py-6"
				/>
				<Button className="px-4 py-6 max-w-[150px] w-full bg-[#007bff]">
					<MagnifyingGlass
						size={24}
						weight="bold"
					/>
				</Button>

				<Button
					className="px-4 py-6 max-w-[150px] w-full bg-[#007bff]"
					onClick={() => navigate('/dashboard/course/create')}
				>
					<Plus
						size={24}
						weight="bold"
					/>
				</Button>
			</div>
			<div className="flex-1 w-full">
				{status === 'success' && (
					<Table
						labels={['Nome', 'Nível', 'Período']}
						data={courses.data}
					/>
				)}
			</div>
		</section>
	);
}
