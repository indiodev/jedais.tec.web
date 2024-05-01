import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';

export function Blog(): React.ReactElement {
	return (
		<div className="flex flex-col relative">
			<Header />
			<main className="flex-1 flex flex-col w-full mt-32">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
