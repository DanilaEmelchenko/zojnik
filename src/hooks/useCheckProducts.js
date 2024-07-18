import { useEffect } from 'react';

import { useBasket } from './useBasket';
import { usePlateData } from './usePlateData';

export const useCheckProducts = () => {
	const { dataInPlate, setDataInPlate } = usePlateData();
	const { basketProducts, setBasketProducts } = useBasket();

	useEffect(() => {
		if (dataInPlate) {
			// setBasketProducts(prev => {
			// 	if (dataInPlate.left && dataInPlate.right) {
			// 		console.log('и то и то');
			// 		return [dataInPlate.left, dataInPlate.right, ...prev];
			// 	} else if (dataInPlate.left) {
			// 		console.log('левое');
			// 		return [dataInPlate.left, ...prev];
			// 	} else if (dataInPlate.right) {
			// 		console.log('правое');
			// 		return [dataInPlate.right, ...prev];
			// 	}

			// 	return prev;
			// });
			setBasketProducts(prev => {
				const updatedProducts = [...prev];

				if (
					dataInPlate.left &&
					!updatedProducts.some(product => product.id === dataInPlate.left.id)
				) {
					updatedProducts.push(dataInPlate.left);
				}

				if (
					dataInPlate.right &&
					!updatedProducts.some(product => product.id === dataInPlate.right.id)
				) {
					updatedProducts.push(dataInPlate.right);
				}

				return updatedProducts;
			});
		}
	}, [dataInPlate]);

	useEffect(() => {
		localStorage.setItem('basket', JSON.stringify(basketProducts));
	}, [basketProducts]);
};
