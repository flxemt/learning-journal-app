import Navigo from 'navigo';

import Homepage from './pages/homepage';
import About from './pages/about';
import Post from './pages/post';

export function createRoutes() {
  const router = new Navigo('/');

  const routes = [
    {
      path: '/',
      view: Homepage
    },
    {
      path: '/about',
      view: About
    },
    {
      path: '/post',
      view: Post
    },
    {
      path: '*',
      view: () => {
        router.navigate('/');
      }
    }
  ];

  routes.forEach(route => {
    router.on(route.path, function () {
      route.view();
    });
  });

  router.resolve();
}
