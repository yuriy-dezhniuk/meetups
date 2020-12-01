import firebase from 'firebase';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

new Vue({
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBEeIyx2TSXv76ROYhWi_VYy79T00UwQOA',
      authDomain: 'meetups-f29d3.firebaseapp.com',
      databaseURL: 'https://meetups-f29d3.firebaseio.com',
      projectId: 'meetups-f29d3',
      storageBucket: 'meetups-f29d3.appspot.com',
      messagingSenderId: '869079010997',
      appId: '1:869079010997:web:29812feb11911d47f6b8fc',
    });
  },
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
