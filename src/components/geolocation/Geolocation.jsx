import { useEffect, useState } from 'react';

import { utilService } from '../../services/utils.service';

import styles from './Geolocation.module.scss';

const Geolocation = () => {
	const [location, setLocation] = useState(null);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				utilService.getCity(position, setLocation);
			});
		} else {
			console.log('Geolocation is not supported by this browser.');
		}
	}, []);

	return (
		<div className={styles.block__location}>
			<img src='./icons/location.svg' alt='location' />
			{location ? <p>{location}</p> : <p>Не определен</p>}
		</div>
	);
};

export default Geolocation;
