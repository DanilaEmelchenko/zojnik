import { useLocation } from 'react-router-dom';

import { useBurger } from '../../hooks/useBurger';

import OpenBurger from '../open-burger/OpenBurger';

import styles from './Content.module.scss';
import BasketContent from './basket-content/BasketContent';
import HomePage from './home-page/HomePage';
import PlateConstructor from './plate-constructor/PlateConstructor';
import Products from './products/Products';

const Content = () => {
	const { pathname } = useLocation();
	const { isBurger } = useBurger();

	return (
		<div className={styles.block__content}>
			{pathname === '/home' ? (
				<HomePage />
			) : pathname === '/salads' ? (
				<Products title='Салаты' />
			) : pathname === '/protein' ? (
				<Products title='Белки и углеводы' />
			) : pathname === '/basket' ? (
				<BasketContent />
			) : (
				<PlateConstructor />
			)}
			{isBurger && <OpenBurger />}
		</div>
	);
};

export default Content;
