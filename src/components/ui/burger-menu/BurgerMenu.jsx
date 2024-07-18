import { useBurger } from '../../../hooks/useBurger';

import styles from './BurgerMenu.module.scss';

const BurgerMenu = () => {
	const { isBurger, setIsBurger } = useBurger();

	return (
		<button
			className={styles.button__burger}
			onClick={() => setIsBurger(!isBurger)}
		>
			<div className={styles.burger}></div>
		</button>
	);
};

export default BurgerMenu;
