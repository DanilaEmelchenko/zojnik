import BurgerMenu from '../ui/burger-menu/BurgerMenu';

import Geolocation from '../geolocation/Geolocation';

import styles from './Header.module.scss';

const Header = ({ title }) => {
	return (
		<header className={styles.header}>
			<>
				{title === 'Вход или регистрация' ? (
					<>
						<div></div>
						<h1 className={styles.header__title}>{title}</h1>
						<img src='./icons/close menu burger.svg' alt='close' />
					</>
				) : title ? (
					<>
						<Link to='/home'>{'<'}</Link>
						<h1 className={styles.header__title}>{title}</h1>
						<BurgerMenu />
					</>
				) : (
					// ) (
					//   <>
					//     <img src='./logo.svg' alt='image' className={styles.logo} />
					//     <Geolocation />
					//     <img src='./icons/close menu burger.svg' alt='close' />
					//   </>
					<>
						<img src='./logo.svg' alt='image' className={styles.logo} />
						<Geolocation />
						<BurgerMenu />
					</>
				)}
			</>
		</header>
	);
};

export default Header;
