import { useNavigate } from 'react-router-dom';

import { usePlateData } from '../../hooks/usePlateData';

import { truncateDescription } from '../../utils/descriptionLength';

import styles from './Dish.module.scss';
import { arrColor } from './dish.data';

const Dish = ({ data, title }) => {
	const navigate = useNavigate();
	const { setDataInPlate } = usePlateData();

	const isSalads = title === 'Салаты';

	const onClick = () => {
		localStorage.setItem(title, JSON.stringify({ [title]: data }));
		setDataInPlate(prev => {
			if (isSalads) {
				return { ...prev, right: data };
			} else {
				return { ...prev, left: data };
			}
		});
		navigate(-1);
	};

	return (
		<div className={styles.block__Dish}>
			<div className={styles.block__image}>
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
				>
					{arrColor.map(elem => (
						<div
							key={elem.id}
							className={
								!isSalads
									? styles.block__calories
									: `${styles.block__calories} ${styles.leftKcal}`
							}
						>
							{!isSalads && (
								<div
									className={styles.block__color}
									style={{ backgroundColor: elem.color }}
								></div>
							)}
							<div
								className={
									!isSalads
										? styles.block__data
										: `${styles.block__data} ${styles.leftData}`
								}
							>
								<h4 className={styles.title}>{elem.title}</h4>
								<p className={styles.paragraph}>
									{data
										? elem.title === 'Белки'
											? data?.protein
											: elem.title === 'Углеводы'
												? data?.carbohydrates
												: data?.fat
										: 0}{' '}
									г
								</p>
							</div>
							{isSalads && (
								<div
									className={styles.block__color}
									style={{ backgroundColor: elem.color }}
								></div>
							)}
						</div>
					))}
				</div>
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
			<div className={styles.block__content}>
				<div className={styles.block__description}>
					<p className={styles.calories}>{data ? data?.calories : 0} ккал</p>
					<h4 className={styles.title}>
						{data
							? truncateDescription(data?.name, 55)
							: title === 'Белки и углеводы'
								? 'Без белков и углеводов'
								: 'Без салата и клетчатки'}
					</h4>
					<p className={styles.price}>
						{data?.price ? `${data.price}₽` : '0₽'}
					</p>
				</div>
				<button className={styles.button__plus} onClick={onClick}>
					<img src='../icons/plus.svg' alt='plus' />
				</button>
			</div>
		</div>
	);
};

export default Dish;
