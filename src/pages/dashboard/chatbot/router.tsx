import { Route, Routes } from 'react-router-dom';

import { Create } from './create';
import { Edit } from './edit';

import { Chatbot } from '.';

export function Router(): React.ReactElement {
	return (
		<Routes>
			<Route
				index
				element={<Chatbot />}
			/>
			<Route
				path="/create"
				element={<Create />}
			/>
			<Route
				path="/:id/edit"
				element={<Edit />}
			/>
		</Routes>
	);
}
