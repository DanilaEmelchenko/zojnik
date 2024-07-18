import { useContext } from 'react';

import { BasketContext } from '../providers/BasketProvider';

export const useBasket = () => useContext(BasketContext);
