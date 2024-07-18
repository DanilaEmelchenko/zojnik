import { useContext } from 'react';

import { BurgerContext } from '../providers/BurgerProvider';

export const useBurger = () => useContext(BurgerContext);
