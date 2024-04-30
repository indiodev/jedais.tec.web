import {
	ArrowSquareOut,
	CircleNotch,
	PencilSimpleLine,
	Trash,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import {
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	Table as TableRoot,
	TableRow,
} from '@/components/ui/table';
import type { Course } from '@/entities/course';
import { Tanstack } from '@/lib/tanstack';
import { UseDeleteCourseMutation } from '@/mutation/course';

const LevelMap = {
	advanced: 'Avançado',
	basic: 'Básico',
	intermediary: 'Intermediário',
};

const PeriodMap = {
	4: '4 meses',
	6: '6 meses',
};

type Props = {
	labels: string[];
	data: Partial<Course>[];
};

export function Table({ data, labels }: Props): React.ReactElement {
	const { mutateAsync: deleteCourse, status: deleteCourseStatus } =
		UseDeleteCourseMutation({
			onSuccess() {
				Tanstack.refetchQueries({
					queryKey: ['COURSE_PAGINATE_QUERY'],
				});
				toast.success('Curso excluído com sucesso');
			},
			onError(error) {
				// if (error instanceof AxiosError) {
				// toast.error(error?.response?.data.message);
				// }
				toast.error('Houve um erro ao tentar excluir. Tente mais tarde.');
				console.log(error);
			},
		});
	return (
		<TableRoot>
			<TableHeader>
				<TableRow className="font-bold uppercase">
					{labels?.map((label) => <TableHead key={label}>{label}</TableHead>)}
					<TableHead></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data?.map((item) => (
					<TableRow key={item.id}>
						<TableCell className="flex-1">
							<h2 className="text-sm line-clamp-1">{item.name}</h2>
						</TableCell>
						<TableCell className="flex-1">
							{LevelMap[item.level as keyof typeof LevelMap]}
						</TableCell>
						<TableCell className="flex-1">
							{PeriodMap[item.period as keyof typeof PeriodMap]}
						</TableCell>
						<TableCell className="w-[100px]">
							<div className="flex gap-2">
								<Link to={{ pathname: `/dashboard/course/${item.id}/edit` }}>
									<Button className="px-2 py-1 bg-transparent border-[#4763E4] border text-[#4763E4] hover:bg-[#4763E4]/90 hover:text-white">
										<PencilSimpleLine size={18} />
									</Button>
								</Link>

								<Link
									to={{ pathname: `/course/${item.id}` }}
									target="_blank"
								>
									<Button className="px-2 py-1 bg-transparent border-[#4763E4] border text-[#4763E4] hover:bg-[#4763E4]/90 hover:text-white">
										<ArrowSquareOut size={18} />
									</Button>
								</Link>

								<Button
									className="px-2 py-1 bg-transparent border-[#4763E4] border text-[#4763E4] hover:bg-[#4763E4]/90 hover:text-white"
									onClick={() => deleteCourse(item.id!)}
								>
									{deleteCourseStatus === 'pending' && (
										<CircleNotch className="animate-spin" />
									)}

									{!(deleteCourseStatus === 'pending') && <Trash size={18} />}
								</Button>
							</div>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</TableRoot>
	);
}
