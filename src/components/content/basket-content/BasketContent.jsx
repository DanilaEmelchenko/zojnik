import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../ui/button/Button';
import TitleAndBack from '../../ui/title-and-back/TitleAndBack';

import { useBasket } from '../../../hooks/useBasket';
import { usePlateData } from '../../../hooks/usePlateData';

import { colors } from '../../../app.constants';
import AddToOrder from '../plate-constructor/add-to-order/AddToOrder';

import styles from './BasketContent.module.scss';
import ProductInBasket from './product-in-basket/ProductInBasket';

const BasketContent = () => {
	const { basketProducts, setBasketProducts } = useBasket();
	const { dataInPlate, setDataInPlate } = usePlateData();
	const [deleteArr, setDeleteArr] = useState([]);

	useEffect(() => {
		console.log('deleteArr', deleteArr);
	}, [deleteArr]);

	useEffect(() => {
		console.log('basketProducts', basketProducts);
		console.log('JSON', JSON.parse(localStorage.getItem('basket')));
	}, [basketProducts]);

	const uniqueBasketProducts = basketProducts.filter((elem, index, self) => {
		return self.findIndex(t => t.id === elem.id) === index;
	});

	const onClickDelete = () => {
		console.log('del');
		deleteArr.forEach(elemBasket => {
			setBasketProducts(prev => prev.filter(elem => elem.id !== elemBasket.id));
			if (dataInPlate.left && dataInPlate.right) {
				setDataInPlate({
					left: null,
					right: null,
				});
				localStorage.removeItem('left');
				localStorage.removeItem('right');
			} else if (dataInPlate.right) {
				setDataInPlate(prev => ({
					...prev,
					right: null,
				}));
				localStorage.removeItem('right');
			} else if (dataInPlate.left) {
				setDataInPlate(prev => ({
					...prev,
					left: null,
				}));
				localStorage.removeItem('left');
			}
		});
	};

	const sumPrice = basketProducts => {
		let sum = 0;
		if (basketProducts)
			basketProducts.forEach(elem =>
				elem.price ? (sum += elem.price) : (sum += 0),
			);
		return sum;
	};

	return (
		<>
			{!basketProducts || basketProducts.length === 0 ? (
				<div className={styles.wrapper_basket}>
					<>
						<TitleAndBack title='Корзина' />
						<img
							src='/image/basket.png'
							alt='basket'
							className={styles.image}
						/>
						<h2 className={styles.title}>Корзина пока пуста</h2>
						<p className={styles.error}>
							Здесь будут блюда, которые вы добавите в корзину
						</p>
						<Link to='/catalog' className={styles.link}>
							Перейти в каталог
						</Link>
					</>
				</div>
			) : (
				<div className={styles.wrapper_basketProducts}>
					<TitleAndBack title='Корзина' />
					<button className={styles.button__delete} onClick={onClickDelete}>
						<img src='/icons/delete.svg' alt='delete' />
					</button>
					<div className={styles.block__basket}>
						{uniqueBasketProducts.map(elem => (
							<ProductInBasket
								key={Math.random() + elem.id}
								data={elem}
								deleteArr={deleteArr}
								setDeleteArr={setDeleteArr}
							/>
						))}
					</div>
					<AddToOrder />
					<div className={styles.block__totalPrice}>
						<h3 className={styles.title}>Детали заказа</h3>
						<div className={styles.totalPrice__description}>
							<div className={styles.row__count}>
								<h5 className={styles.title__count}>
									Общая сумма за {basketProducts.length} товара
								</h5>
								<p className={styles.count__price}>
									{sumPrice(basketProducts)} ₽
								</p>
							</div>
							<div className={styles.row__total}>
								<h5 className={styles.title__total}>Итого</h5>
								<p className={styles.total__price}>
									{sumPrice(basketProducts)} ₽
								</p>
							</div>
						</div>
					</div>
					<Button
						style={{
							back:
								basketProducts.length !== 0
									? colors.color_black
									: colors.color_grey_disable,
							color: colors.color_white,
						}}
						buttonFor='finish-order'
						isDisable={basketProducts.length === 0}
					>
						Оформить заказ
					</Button>
				</div>
			)}
		</>
	);
};

export default BasketContent;
