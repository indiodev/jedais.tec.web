import { AxiosError } from 'axios';
import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import { Layout } from '@/layout';
import { API } from '@/lib/api';
import { Blog } from '@/pages/blog';
import { Auth } from '@/pages/dashboard/auth';
import { Root } from '@/pages/root';
import { useAuth } from '@/store/auth';

const ChatbotRoute = React.lazy(() =>
	import('@/pages/dashboard/chatbot/router').then((module) => ({
		default: module.Router,
	})),
);

const PostRoute = React.lazy(() =>
	import('@/pages/dashboard/post/router').then((module) => ({
		default: module.Router,
	})),
);

const CourseRoute = React.lazy(() =>
	import('@/pages/dashboard/course/router').then((module) => ({
		default: module.Router,
	})),
);

export function Router(): React.ReactElement {
	const navigate = useNavigate();
	const { clear, load } = useAuth();

	React.useEffect(() => {
		load();
	}, [load]);

	React.useEffect(() => {
		const interceptorId = API.interceptors.response.use(
			(response) => {
				return response;
			},
			(error: AxiosError | Error) => {
				console.log(error);
				if (error instanceof AxiosError) {
					if (error.response?.status === 401) {
						clear();
						navigate('/dashboard/auth', { replace: true });
					}
				}
			},
		);

		return () => {
			API.interceptors.response.eject(interceptorId);
		};
	}, [clear, navigate]);

	return (
		<React.Suspense
			fallback={
				<div>
					<h1>Carregando</h1>
				</div>
			}
		>
			<Routes>
				<Route path="/">
					<Route element={<Layout.Home.Root />}>
						<Route
							index
							element={<Root />}
						/>
					</Route>

					<Route element={<Layout.Home.Blog />}>
						<Route
							path="/blog/:slug"
							element={<Blog />}
						/>
					</Route>
				</Route>

				<Route path="dashboard">
					<Route element={<Layout.Dashboard.Public />}>
						<Route
							index
							element={<Navigate to="/dashboard/auth" />}
						/>
						<Route
							path="auth"
							element={<Auth />}
						/>
					</Route>
					<Route element={<Layout.Dashboard.Private />}>
						<Route
							index
							element={<Navigate to="/dashboard/post" />}
						/>
						<Route
							path="post/*"
							element={<PostRoute />}
						/>
						<Route
							path="course/*"
							element={<CourseRoute />}
						/>
						<Route
							path="chatbot/*"
							element={<ChatbotRoute />}
						/>
					</Route>
				</Route>
			</Routes>
		</React.Suspense>
	);
}
