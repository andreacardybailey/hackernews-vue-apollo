import Vue from 'vue';
import Router from 'vue-router';

// Import the CreateLink and LinkList components 
// which will be rendered for different routes
import CreateLink from './components/CreateLink';
import LinkList from './components/LinkList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // Map each route to the component that should be rendered
  routes: [
    {
      path: '/',
      component: LinkList
    },
    {
      path: '/create',
      component: CreateLink
    }
  ],
  // Set mode to ‘history’ to remove the hash from the URLs
  mode: 'history'
});
