import styles from './AdditionalDish.module.scss';

const AdditionalDish = () => {
	return (
		<div className={styles.block__additionalDish}>
			<img src='../test_product.png' alt='product' className={styles.image} />
			<div className={styles.block__content}>
				<div className={styles.block__description}>
					<p className={styles.weight}>100 г</p>
					<h4 className={styles.title}>Манго и маракуйя</h4>
					<p className={styles.price}>315₽</p>
				</div>
				<button className={styles.button__plus}>
					<img src='../icons/plus.svg' alt='plus' />
				</button>
			</div>
		</div>
	);
};

export default AdditionalDish;
