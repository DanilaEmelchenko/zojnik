import Authorization from '../components/screens/authorization/Authorization';
import Basket from '../components/screens/basket/Basket';
import Constructor from '../components/screens/constructor/Constructor';
import Home from '../components/screens/home/Home';
import Profile from '../components/screens/profile/Profile';
import Protein from '../components/screens/protein/Protein';
import Salads from '../components/screens/salads/Salads';
import Welcome from '../components/screens/welcome/Welcome';

export const routes = [
	{
		path: '/home',
		component: Home,
		isAuth: false,
	},
	{
		path: '/',
		component: Welcome,
		isAuth: false,
	},
	{
		path: '/constructor',
		component: Constructor,
		isAuth: false,
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: false,
	},
	{
		path: '/authorization',
		component: Authorization,
		isAuth: false,
	},
	{
		path: '/salads',
		component: Salads,
		isAuth: false,
	},
	{
		path: '/protein',
		component: Protein,
		isAuth: false,
	},
	{
		path: '/basket',
		component: Basket,
		isAuth: false,
	},
];
