import { createContext, useEffect, useState } from 'react';

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
	const [basketProducts, setBasketProducts] = useState([]);

	useEffect(() => {
		if (localStorage.getItem('basket'))
			setBasketProducts(JSON.parse(localStorage.getItem('basket')));
	}, []);

	return (
		<BasketContext.Provider value={{ basketProducts, setBasketProducts }}>
			{children}
		</BasketContext.Provider>
	);
};

export default BasketProvider;
