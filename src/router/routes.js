import Login from '../components/routes/Login';
import MainPage from '../components/routes/MainPage';
import NewsPage from '../components/routes/NewsPage';
import BooksPage from '../components/routes/BooksPage';
import ReviewsPage from '../components/routes/ReviewsPage';
import UsersPage from '../components/routes/UsersPage';

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
    redirect: {
      name: 'news',
    }
  },
  {
    path: '/news',
    name: 'news',
    component: MainPage,
    props: {
      childComponent: NewsPage,
    }
  },
  {
    path: '/books',
    name: 'books',
    component: MainPage,
    props: {
      childComponent: BooksPage,
    }
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: MainPage,
    props: {
      childComponent: ReviewsPage,
    }
  },
  {
    path: '/users',
    name: 'users',
    component: MainPage,
    props: {
      childComponent: UsersPage,
    }
  },
];

export default routes;
