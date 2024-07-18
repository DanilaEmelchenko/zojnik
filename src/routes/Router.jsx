import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useCheckProducts } from '../hooks/useCheckProducts';

import NotFound from '../components/screens/not-found/NotFound';

import { routes } from './routes.data';

const Router = () => {
	useCheckProducts();

	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					return (
						<Route
							key={route.path}
							element={<route.component />}
							path={route.path}
						/>
					);
				})}
				<Route element={<NotFound />} path='*' />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
