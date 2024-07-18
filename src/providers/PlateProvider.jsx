import { createContext, useEffect, useState } from 'react';

export const PlateContext = createContext();

const PlateProvider = ({ children }) => {
	const [dataInPlate, setDataInPlate] = useState({});

	useEffect(() => {
		if (localStorage.getItem('left'))
			setDataInPlate(prev => ({
				left: JSON.parse(localStorage.getItem('left')),
				...prev,
			}));
		if (localStorage.getItem('right'))
			setDataInPlate(prev => ({
				right: JSON.parse(localStorage.getItem('right')),
				...prev,
			}));
	}, []);

	useEffect(() => {
		// Проверяем, что данные не равны undefined перед сохранением
		if (dataInPlate.left) {
			localStorage.setItem('left', JSON.stringify(dataInPlate.left));
		}
		if (dataInPlate.right) {
			localStorage.setItem('right', JSON.stringify(dataInPlate.right));
		}
	}, [dataInPlate]);

	return (
		<PlateContext.Provider value={{ dataInPlate, setDataInPlate }}>
			{children}
		</PlateContext.Provider>
	);
};

export default PlateProvider;
