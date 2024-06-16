import Router from './Router';
import Home from './controllers/Home';
import Login from './controllers/LogIn';
import Register from './controllers/Register';
import Cv from './controllers/Cv';
import ListCv from './controllers/ListCv';

import './index.scss';

const routes = [{
  url: '/',
  controller: Home
}, {
  url: '/logIn',
  controller: Login
}, {
  url: '/register',
  controller: Register
}, {
  url: '/cv',
  controller: Cv
}, {
  url: '/listCv',
  controller: ListCv
}];

new Router(routes);
