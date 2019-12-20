import Login from '../components/routes/Login';
import Register from '../components/routes/Register';
import MainPage from '../components/routes/MainPage';
import NewsPage from '../components/routes/NewsPage';
import BooksPage from '../components/routes/BooksPage';
import NewBookPage from '../components/routes/NewBookPage';
import ReviewsPage from '../components/routes/ReviewsPage';
import UsersPage from '../components/routes/UsersPage';
import ProfilePage from '../components/routes/ProfilePage';

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
    path: '/register',
    name: 'register',
    component: Register,
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
    path: '/new-book',
    name: 'new-book',
    component: MainPage,
    props: {
      childComponent: NewBookPage,
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
  {
    path: '/profile',
    name: 'profile',
    component: MainPage,
    props: {
      childComponent: ProfilePage,
    }
  },
];

export default routes;
