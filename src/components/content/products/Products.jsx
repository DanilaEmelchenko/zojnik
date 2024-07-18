import Input from '../../ui/input/Input';
import TitleAndBack from '../../ui/title-and-back/TitleAndBack';

import { useFoods } from '../../../hooks/useFoods';

import Dish from '../../dish/Dish';

import styles from './Products.module.scss';

const Products = ({ title }) => {
	const { data, isSuccess } = useFoods();

	// console.log(data);

	return (
		<div className={styles.wrapper_product}>
			<Input />
			<TitleAndBack title={title} />
			<div className={styles.block__products}>
				<Dish title={title} />
				{data &&
					data?.map(elem => {
						if (
							title === 'Белки и углеводы' &&
							elem.category === 'PROTEIN_PRODUCTS'
						) {
							return <Dish key={elem.id} data={elem} title={title} />;
						} else if (title === 'Салаты' && elem.category === 'VEGETABLES') {
							return <Dish key={elem.id} data={elem} title={title} />;
						}
					})}
			</div>
		</div>
	);
};

export default Products;
