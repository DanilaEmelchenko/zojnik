import styles from './AddToOrder.module.scss';
import AdditionalDish from './additional-dish/AdditionalDish';

const AddToOrder = () => {
	return (
		<div className={styles.block__addToOrder}>
			<h3 className={styles.title}>Добавить к заказу</h3>
			<div className={styles.block__slide}>
				<AdditionalDish />
				<AdditionalDish />
				<AdditionalDish />
				<AdditionalDish />
			</div>
		</div>
	);
};

export default AddToOrder;
