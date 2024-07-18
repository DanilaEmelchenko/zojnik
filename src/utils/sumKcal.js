export const sumKcalFunc = (title, data) => {
	if (title === 'Ккал') {
		let sum = 0;

		if ((data && data.right) || data.left) {
			for (let food of Object.values(data)) {
				sum += food.calories;
			}
		}
		return sum.toFixed(2);
	} else if (title === 'Белки') {
		let sum = 0;

		if ((data && data.right) || data.left) {
			for (let food of Object.values(data)) {
				sum += food.protein;
			}
		}
		return sum.toFixed(2);
	} else if (title === 'Жиры') {
		let sum = 0;

		if ((data && data.right) || data.left) {
			for (let food of Object.values(data)) {
				sum += food.fat;
			}
		}
		return sum.toFixed(2);
	} else if (title === 'Углеводы') {
		let sum = 0;

		if ((data && data.right) || data.left) {
			for (let food of Object.values(data)) {
				sum += food.carbohydrates;
			}
		}
		return sum.toFixed(2);
	} else if (title === 'Цена') {
		let sum = 0;

		if ((data && data.right) || data.left) {
			for (let food of Object.values(data)) {
				sum += food.price === null ? 0 : food.price;
			}
		}
		return sum.toFixed(2);
	}
};
