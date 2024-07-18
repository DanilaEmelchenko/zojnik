import { usePlateData } from '../../../../hooks/usePlateData';

import { sumKcalFunc } from '../../../../utils/sumKcal';

import styles from './AllData.module.scss';
import { kcal } from './allData.data';

const AllData = () => {
	const { dataInPlate } = usePlateData();

	return (
		<div className={styles.wrapper_allData}>
			<h3 className={styles.title}>Тарелка: 560 г</h3>
			<div className={styles.block__data}>
				{kcal.map(elem => (
					<div key={elem.id} className={styles.block__kcal}>
						<img src={elem.src} alt={elem.title} />
						<h4>{elem.title}</h4>
						<p>{sumKcalFunc(elem.title, dataInPlate)}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllData;
