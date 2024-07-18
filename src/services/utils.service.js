import axios from 'axios';

export const utilService = {
	getCity: async (position, setLocation) => {
		try {
			const response = await axios.get(
				`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=ru`,
			);

			setLocation(response.data.city);
		} catch (error) {
			console.log(error);
		}
	},
};
