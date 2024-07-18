import { useBasket } from '../../../../hooks/useBasket';

import { countObjectsById } from '../../../../utils/countProduct';

import styles from './ProductInBasket.module.scss';

const ProductInBasket = ({ data, deleteArr, setDeleteArr }) => {
	const isSalads = data.category === 'VEGETABLES';
	const { basketProducts, setBasketProducts } = useBasket();
	const isChecked = deleteArr.some(elem => elem.id === data.id);

	const onClickCount = (button, elem) => () => {
		if (button === 'plus') {
			setBasketProducts(prev => [...prev, elem]);
		} else {
			setBasketProducts(prev => {
				const indexToRemove = prev.findIndex(product => product.id === elem.id);
				if (indexToRemove !== -1) {
					const updatedProducts = [...prev];
					updatedProducts.splice(indexToRemove, 1);
					return updatedProducts;
				}
				return prev; // Возвращаем прежний массив, если элемент не найден
			});
		}
	};

	const onChange = data => () => {
		if (isChecked) {
			console.log('ok', isChecked);
			setDeleteArr(prev => prev.filter(elem => elem.id !== data.id));
		} else {
			setDeleteArr(prev => [...prev, data]);
		}
	};

	return (
		<div className={styles.wrapper_product}>
			<div className={styles.block__checkbox}>
				<input
					type='checkbox'
					className={styles.input}
					// checked={isChecked}
					onChange={onChange(data)}
				/>
				<div
					className={
						isChecked ? `${styles.isCheck} ${styles.true}` : styles.isCheck
					}
				></div>
			</div>
			<div className={styles.block__product}>
				<div className={styles.block__plate}>
					{!isSalads && (
						<img
							src={
								data
									? data.avatar
										? data.avatar
										: isSalads
											? '../test_img/salads_test.png'
											: '../test_img/protein_test.png'
									: isSalads
										? '/image/plate_one.png'
										: '/image/plate_two.png'
							}
							alt='product'
							className={styles.image}
						/>
					)}
					<div
						className={
							!isSalads
								? styles.block__info
								: `${styles.block__info} ${styles.leftSalads}`
						}
						style={data ? {} : { backgroundColor: '#fff' }}
					></div>
					{isSalads && (
						<img
							src={
								data
									? data.avatar
										? data.avatar
										: isSalads
											? '../test_img/salads_test.png'
											: '../test_img/protein_test.png'
									: isSalads
										? '/image/plate_one.png'
										: '/image/plate_two.png'
							}
							alt='product'
							className={styles.image}
						/>
					)}
				</div>
				<div className={styles.block__description}>
					<p className={styles.kcal}>{data.calories} ккал</p>
					<h2 className={styles.title}>{data.name}</h2>
					<div className={styles.block__price}>
						<p className={styles.price}>{data.price ? data.price : 0} ₽</p>
						<div className={styles.block__count}>
							<button onClick={onClickCount('minus', data)}>
								<img src='/icons/only_minus.svg' alt='minus' />
							</button>
							<p>{countObjectsById(basketProducts, data.id)}</p>
							<button onClick={onClickCount('plus', data)}>
								<img src='/icons/only_plus.svg' alt='plus' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductInBasket;
