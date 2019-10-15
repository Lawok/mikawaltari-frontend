import Login from '../components/Login';
import MainPage from '../components/MainPage';

const routes = [
  {
    path: '/',
    redirect: {
      name: 'login',
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/mainpage',
    name: 'mainpage',
    component: MainPage,
  }
];

export default routes;
