import { Link, useNavigate } from 'react-router-dom';

import styles from './TitleAndBack.module.scss';

const TitleAndBack = ({ title }) => {
	const navigate = useNavigate();

	return (
		<div className={styles.block__titleAndBack}>
			{title === 'Салаты' ||
			title === 'Белки и углеводы' ||
			title === 'Корзина' ? (
				<button onClick={() => navigate(-1)}>{'<'}</button>
			) : (
				<Link to='/home'>{'<'}</Link>
			)}
			<h1 className={styles.title}>{title}</h1>
			<div></div>
		</div>
	);
};

export default TitleAndBack;
