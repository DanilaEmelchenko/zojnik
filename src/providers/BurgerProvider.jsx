import { createContext, useState } from 'react';

export const BurgerContext = createContext();

const BurgerProvider = ({ children }) => {
	const [isBurger, setIsBurger] = useState(false);

	return (
		<BurgerContext.Provider value={{ isBurger, setIsBurger }}>
			{children}
		</BurgerContext.Provider>
	);
};

export default BurgerProvider;
