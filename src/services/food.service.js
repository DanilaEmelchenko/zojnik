import axios from 'axios';

export const foodService = {
	getData: async () => {
		try {
			// const response = await $axios.get('/food/'); TODO: РАЗОБРАТЬСЯ ПОЧЕМУ ПРИ ИМПОРТЕ СВОЕГО АПИ ЗАПРОС НЕ ПРОХОДИТ

			const response = await axios.get(
				'https://api.dev.zojnikfood.ru/api/food/',
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			// const response = await fetch('https://api.dev.zojnikfood.ru/api/food/');
			console.log(response.data);
			return await response.data;
		} catch (error) {
			console.log(error);
			return null;
		}
	},
};
