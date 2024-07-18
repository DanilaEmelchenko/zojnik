export const truncateDescription = (description, maxLength) => {
	if (description.length <= maxLength) {
		return description;
	}
	return description.slice(0, maxLength) + '...';
};
