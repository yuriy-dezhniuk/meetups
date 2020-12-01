import Vue from 'vue';
import VueRouter from 'vue-router';
import Meetups from '../views/Meetups.vue';
import Signup from '../views/Signup.vue';
import Signin from '../views/Signin.vue';
import CreateMeetup from '../views/CreateMeetup.vue';
import ViewMeetups from '../views/ViewMeetups.vue';
import Profile from '../views/Profile.vue';

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
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/createmeetup',
    name: 'CreateMeetup',
    component: CreateMeetup,
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
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
