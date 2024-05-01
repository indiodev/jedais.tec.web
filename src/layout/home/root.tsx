import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';

export function Root(): React.ReactElement {
	return (
		<Fragment>
			<Header />
			<Outlet />
			<Footer />
		</Fragment>
	);
}
