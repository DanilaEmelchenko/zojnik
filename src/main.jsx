import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';

import BasketProvider from './providers/BasketProvider.jsx';
import BurgerProvider from './providers/BurgerProvider.jsx';
import PlateProvider from './providers/PlateProvider.jsx';
import Router from './routes/Router.jsx';
import './styles/global.scss';

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/service-worker.js')
			.then(registration => {
				console.log('SW registered: ', registration);
			})
			.catch(registrationError => {
				console.log('SW registration failed: ', registrationError);
			});
	});
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BurgerProvider>
				<BasketProvider>
					<PlateProvider>
						<Router />
					</PlateProvider>
				</BasketProvider>
			</BurgerProvider>
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	</React.StrictMode>,
);
