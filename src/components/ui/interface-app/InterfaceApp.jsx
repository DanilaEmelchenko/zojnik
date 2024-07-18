import { Link, useLocation } from 'react-router-dom';

import styles from './InterfaceApp.module.scss';
import { arrayInterfaceApp } from './inteface.data';

const InterfaceApp = () => {
	const { pathname } = useLocation();

	return (
		<div className={styles.block__interface}>
			{arrayInterfaceApp.map(icon => (
				<Link to={icon.path} key={icon.id} className={styles.list}>
					<img
						src={pathname === icon.path ? icon.src_active : icon.src}
						alt='img'
						className={styles.image}
					/>
				</Link>
			))}
		</div>
	);
};

export default InterfaceApp;
