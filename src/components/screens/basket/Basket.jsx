import InterfaceApp from '../../ui/interface-app/InterfaceApp';

import { useBurger } from '../../../hooks/useBurger';

import Content from '../../content/Content';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';

const Basket = () => {
	const { isBurger } = useBurger();
	return (
		<Layout>
			<Header />
			<Content />
			{!isBurger && <InterfaceApp />}
		</Layout>
	);
};

export default Basket;
