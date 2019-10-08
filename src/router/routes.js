import Login from '../components/Login';

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
];

export default routes;
