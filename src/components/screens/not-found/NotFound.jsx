import { Link } from 'react-router-dom';

import InterfaceApp from '../../ui/interface-app/InterfaceApp';

import Header from '../../header/Header';
import Layout from '../../layout/Layout';

import styles from './NotFound.module.scss';

const NotFound = () => {
	return (
		<Layout
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Header />
			<div className={styles.block__notFound}>
				<img src='./404.png' alt='404' className={styles.image} />
				<h2 className={styles.title}>Что-то пошло не так</h2>
				<p className={styles.error}>Произошла непредвиденная ошибка</p>
				<Link to='/home' className={styles.link}>
					На главную
				</Link>
			</div>
			<InterfaceApp />
		</Layout>
	);
};

export default NotFound;
