export const countObjectsById = (arr, targetId) => {
	return arr.reduce((count, obj) => {
		if (obj.id === targetId) {
			return count + 1;
		}
		return count;
	}, 0);
};
