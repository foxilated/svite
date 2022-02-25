import Home from 'pages/Home';
import NotFound from 'pages/404';

export default {
  '/': Home,
  '*': NotFound,
};
