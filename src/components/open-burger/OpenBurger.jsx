import Buttons from '../ui/buttons/Buttons';

import styles from './OpenBurger.module.scss';
import { arrayButtonsBurgerMenu } from './buttonsBurger.data';

const OpenBurger = () => {
	return (
		<div className={styles.wrapper_burger}>
			<div className={styles.buttons__wrapper__openBurger}>
				{arrayButtonsBurgerMenu.map(button => (
					<Buttons
						key={button.id}
						id={button.id}
						path={button.path}
						leftIcon={button.leftIcon}
						rightIcon={button.rightIcon}
						title={button.title}
					/>
				))}
			</div>
			<div className={styles.openBurger__info}>
				<span className={styles.openBurger__text}>
					Оформить заказ по телефону
				</span>
				<a href='tel:+88002004445' className={styles.openBurger__phone}>
					8 800 200-44-45
				</a>
				<div className={styles.openBurger__socials}>
					<div className={styles.openBurger__social}>
						<img src='/icons/open-burger-menu/youtube.svg' alt='youtube' />
					</div>
					<div className={styles.openBurger__social}>
						<img src='/icons/open-burger-menu/telegram.svg' alt='telegram' />
					</div>
					<div className={styles.openBurger__social}>
						<img src='/icons/open-burger-menu/whatsapp.svg' alt='whatsapp' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default OpenBurger;
