import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../ui/button/Button';
import TitleAndBack from '../../ui/title-and-back/TitleAndBack';

import { useFoods } from '../../../hooks/useFoods';
import { usePlateData } from '../../../hooks/usePlateData';

import { colors } from '../../../app.constants';
import { sumKcalFunc } from '../../../utils/sumKcal';

import styles from './PlateConstructor.module.scss';
import AboutFood from './about-food/AboutFood';
import AddToOrder from './add-to-order/AddToOrder';
import AllData from './all-data/AllData';

const PlateConstructor = () => {
	const [isSpinning, setIsSpinning] = useState(false);
	const { dataInPlate, setDataInPlate } = usePlateData();
	const isPlate = dataInPlate.left !== null || dataInPlate.right !== null;
	const isLocalStorage =
		localStorage.getItem('left') || localStorage.getItem('right');
	const { data, isSuccess } = useFoods();

	const getRandomData = data => {
		const proteinProducts = data.filter(
			elem => elem.category === 'PROTEIN_PRODUCTS',
		);
		const vegetables = data.filter(elem => elem.category === 'VEGETABLES');

		const randomProteinProduct =
			proteinProducts[Math.floor(Math.random() * proteinProducts.length)];
		const randomVegetable =
			vegetables[Math.floor(Math.random() * vegetables.length)];

		return [randomProteinProduct, randomVegetable];
	};

	const handleSpin = () => {
		setIsSpinning(true);
		setTimeout(() => {
			setDataInPlate(prev => ({
				left: getRandomData(data)[0],
				right: getRandomData(data)[1],
			}));
			setIsSpinning(false);
		}, 600); // Длительность анимации в миллисекундах
	};

	// console.log(data);

	console.log(dataInPlate);
	return (
		<div className={styles.wrapper_constructor}>
			<TitleAndBack title='Тарелка по Методу' />
			<div className={styles.block__reload}>
				<img src='../icons/spin_the_plate.svg' alt='spin_the_plate' />
				<button className={styles.button__reload} onClick={handleSpin}>
					Покрутите тарелку
				</button>
			</div>
			<div
				className={`${styles.block__plate} ${isSpinning ? styles.spin : ''}`}
				style={{ position: 'relative' }}
			>
				<div className={styles.block__left}>
					{dataInPlate.left && (
						<img
							className={styles.food}
							src={
								dataInPlate.left.avatar
									? dataInPlate.left.avatar
									: '/test_img/protein_test.png'
							}
							alt='plate'
							style={{
								position: 'absolute',
								left: '0',
								top: '0',
							}}
						/>
					)}

					<Link to='/protein' className={styles.block__image}>
						<img
							src={dataInPlate.left ? '/icons/reload.svg' : '/icons/plus.svg'}
							alt='add'
						/>
					</Link>
				</div>
				<div
					className={styles.block__right}
					style={{
						position: 'absolute',
						left: '0',
						top: '0',
					}}
				>
					{dataInPlate?.right && (
						<img
							className={styles.food}
							src={
								dataInPlate?.right?.avatar
									? dataInPlate?.right?.avatar
									: '/test_img/salads_test.png'
							}
							alt='plate'
							style={{
								position: 'absolute',
								right: '0',
								top: '0',
							}}
						/>
					)}
					<Link
						to='/salads'
						className={`${styles.block__image} ${styles.right}`}
					>
						<img
							src={dataInPlate.right ? '/icons/reload.svg' : '/icons/plus.svg'}
							alt='add'
						/>
					</Link>
				</div>

				{isLocalStorage ? null : (
					<p className={styles.help}>
						Соберите в конструкторе свою <br></br> идеальную тарелку
					</p>
				)}
			</div>
			<div className={styles.block__aboutFood}>
				<div className={styles.block__plates}>
					{dataInPlate.left && <AboutFood side='left' />}
					{dataInPlate.right && <AboutFood side='right' />}
				</div>
				{isLocalStorage && <AllData />}
			</div>

			<Button
				style={{
					back: isLocalStorage ? colors.color_black : colors.color_grey_disable,
					color: colors.color_white,
				}}
				buttonFor='go-basket'
				isDisable={!isLocalStorage}
			>
				В корзину{' '}
				{isLocalStorage ? `за ${sumKcalFunc('Цена', dataInPlate)} ₽` : ''}
			</Button>
			<AddToOrder />
		</div>
	);
};

export default PlateConstructor;
