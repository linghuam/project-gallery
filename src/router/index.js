import Vue from 'vue';
import Router from 'vue-router';
import myContent from '@/components/content';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myContent',
      component: myContent,
    },
  ],
});
