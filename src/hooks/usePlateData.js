import { useContext } from 'react';

import { PlateContext } from '../providers/PlateProvider';

export const usePlateData = () => useContext(PlateContext);
