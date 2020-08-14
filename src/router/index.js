import Vue from 'vue'
import Router from 'vue-router'
import register from '../components/authComponent/register'
import createPost from '../components/postComponent/createPost'
import showPost from '../components/postComponent/showPost'
import updatePost from '../components/postComponent/updatePost'
import singlePost from '../components/postComponent/singlePost'
import updateInfor from '../components/authComponent/updateInfor'
import Cookies from 'js-cookie';
import store from '../store'
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'register',
      component: register,
    },
    {
      path: '/home',
      name: 'singlePost',
      component: singlePost,
      meta: {requiresAuth: true}
    },
    {
      path: '/createPost',
      name: 'createPost',
      component: createPost,
      meta: {requiresAuth: true}
    },
    {
      path: '/showPost',
      name: 'showPost',
      component: showPost,
      meta: {requiresAuth: true}
    },
    {
      path: '/updatePost/:id',
      name: 'updatePost',
      component: updatePost,
      meta: {requiresAuth: true}
    },
    {
      path: '/updateInfor/',
      name: 'updateInfor',
      component: updateInfor,
      meta: {requiresAuth: true}
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth))
  {
    if(Cookies.get('token'))
    {
      store.dispatch('user/getUserInfor');
      next();
    }
    else 
    {
      next('/');
    }
  }
  else 
  {
    if(Cookies.get('token'))
    {
      next('/home');
    }
    else 
    {
      next();
    }
  }
})
  



export default router;
