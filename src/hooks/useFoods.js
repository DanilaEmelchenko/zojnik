import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import { foodService } from '../services/food.service';

export const useFoods = () => {
	const { data, isError, isSuccess, isLoading } = useQuery({
		queryKey: ['foods'],
		// queryFn: getData,
		queryFn: foodService.getData,
		staleTime: 3000,
	});

	useEffect(() => {
		if (isSuccess) console.log('ok');
	}, []);

	useEffect(() => {
		if (isError) console.log('error');
	}, []);

	return { data, isError, isSuccess, isLoading };
};
