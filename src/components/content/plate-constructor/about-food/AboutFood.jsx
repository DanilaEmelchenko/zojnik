import { usePlateData } from '../../../../hooks/usePlateData';

import styles from './AboutFood.module.scss';

const AboutFood = ({ side }) => {
	const { dataInPlate } = usePlateData();
	const isSalads = side === 'right';

	const data = isSalads ? dataInPlate.right : dataInPlate.left;

	return (
		<div
			className={styles.wrapper_aboutFood}
			style={
				isSalads
					? {
							marginLeft: 'auto',
						}
					: {}
			}
		>
			<div className={styles.block__rating}>
				<p className={styles.rating}>
					{data.rating === null ? 0 : data.rating}
				</p>
				<p className={styles.count}>(200+)</p>
			</div>
			<h2 className={styles.title}>{data.name}</h2>
			<div className={styles.block__calories}>
				<p className={styles.weight}>100 г</p>
				<p className={styles.kcal}>
					{data.protein}
					<span>Б</span>
				</p>
				<p className={styles.kcal}>
					{data.fat}
					<span>Ж</span>
				</p>
				<p className={styles.kcal}>
					{data.carbohydrates}
					<span>У</span>
				</p>
				<p className={styles.fullKcal}>{data.calories}kk</p>
			</div>
			<div className={styles.block__description}>
				<h3 className={styles.title__description}>Состав:</h3>
				<p className={styles.description}>Здесь должно быть описание.</p>
			</div>
			<p className={styles.price}>{data.price === null ? 0 : data.price} ₽</p>
		</div>
	);
};

export default AboutFood;
