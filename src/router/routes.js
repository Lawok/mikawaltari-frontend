import Login from '../components/routes/Login';
import Register from '../components/routes/Register';
import MainPage from '../components/routes/MainPage';
import AddReviewPage from '../components/routes/AddReviewPage';
import BooksPage from '../components/routes/BooksPage';
import NewBookPage from '../components/routes/NewBookPage';
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
      name: 'add-review',
    }
  },
  {
    path: '/add-review',
    name: 'add-review',
    component: MainPage,
    props: {
      childComponent: AddReviewPage,
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
  {
    path: '*',
    redirect: {
      name: 'mainpage',
    }
  }
];

export default routes;
