import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Private(): React.ReactElement {
	const navigate = useNavigate();
	return (
		<section className="flex flex-row h-screen overflow-hidden">
			<aside className="max-w-xs w-full h-screen bg-[#007bff] flex flex-col gap-8">
				<div className="flex w-full justify-center pt-6 pb-2">
					<img
						src="/logo.png"
						className="w-28 h-28"
					/>
				</div>

				<Separator />

				<div className="flex flex-col text-white flex-1 items-center px-6 gap-2">
					<NavLink
						to="/dashboard/post"
						className="border-2 border-transparent w-full flex items-center justify-center py-2 aria-[current=page]:border-[#20c997] aria-[current=page]:border-2 aria-[current=page]:bg-transparent hover:bg-[#20c997]/90 text-white rounded-xl group"
					>
						<h2 className="text-white text-lg">Postagens</h2>
					</NavLink>
					<NavLink
						to="/dashboard/course"
						className="border-2 border-transparent w-full flex items-center justify-center py-2 aria-[current=page]:border-[#20c997] aria-[current=page]:border-2 aria-[current=page]:bg-transparent hover:bg-[#20c997]/90 text-white rounded-xl group"
					>
						<h2 className="text-white text-lg ">Cursos</h2>
					</NavLink>
				</div>

				<div className="flex flex-col text-white py-4 px-6 rounded-xl">
					<Button
						onClick={() => navigate('/dashboard', { replace: true })}
						className="py-2 border-2 border-[#20c997] bg-transparent hover:bg-[#20c997]/90 text-sm uppercase font-bold"
					>
						Sair
					</Button>
				</div>
			</aside>

			<div className="overflow-x-auto h-full py-14 w-full flex flex-1 flex-col px-8">
				<div className="container flex">
					<Outlet />
				</div>
			</div>
		</section>
	);
}
