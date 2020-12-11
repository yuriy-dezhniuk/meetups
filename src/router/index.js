import Vue from 'vue';
import VueRouter from 'vue-router';
import Meetups from '@/views/Meetups.vue';
import Signup from '@/views/Signup.vue';
import Signin from '@/views/Signin.vue';
import CreateMeetup from '@/views/CreateMeetup.vue';
import ViewMeetups from '@/views/ViewMeetups.vue';
import Profile from '@/views/Profile.vue';
// import authGuard from './authGuard.js';
import store from '../store';

function authGuard(to, from, next) {
  if (store.state.user) {
    next();
  } else {
    next('/');
  }
}

function logoutGuard(to, from, next) {
  if (!store.state.user) {
    next();
  } else {
    next('/');
  }
}

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Meetups',
    component: Meetups,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    beforeEnter: logoutGuard,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
    beforeEnter: logoutGuard,
  },
  {
    path: '/createmeetup',
    name: 'CreateMeetup',
    component: CreateMeetup,
    beforeEnter: authGuard,
  },
  {
    path: '/meetups',
    name: 'ViewMeetups',
    component: ViewMeetups,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
