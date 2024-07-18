import { Link } from 'react-router-dom';

import Input from '../../ui/input/Input';

import { useFoods } from '../../../hooks/useFoods';

import Slider from '../../slider/Slider';

import styles from './HomePage.module.scss';

const HomePage = () => {
	const { data, isSuccess, isError } = useFoods();

	console.log(data, isSuccess, isError);

	return (
		<div className={styles.wrapper_homePage}>
			<Input />

			<div className={styles.block__methodPlate}>
				<div className={styles.block__text}>
					<h2>Метод тарелки</h2>
					<p>
						Выбирайте понравившиеся половинки тарелок, фильтруйте по тегам и
						анти-тегам
					</p>
				</div>
				<Link to='/constructor' className={styles.link}>
					Собрать тарелку
				</Link>
			</div>

			<Slider />
			{/* <button onClick={getData}>TEST</button> */}
		</div>
	);
};

export default HomePage;
