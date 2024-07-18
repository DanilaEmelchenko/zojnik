import InterfaceApp from '../../ui/interface-app/InterfaceApp';

import { useBurger } from '../../../hooks/useBurger';

import Content from '../../content/Content';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';

const Constructor = () => {
	const { isBurger } = useBurger();
	console.log(isBurger);
	return (
		<Layout>
			<Header />
			<Content />
			{!isBurger && <InterfaceApp />}
			{/* <InterfaceApp /> */}
		</Layout>
	);
};

export default Constructor;
