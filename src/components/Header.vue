<template>
  <v-app-bar app>
    <router-link to="/" tag="span" style="cursor:pointer">
    <v-toolbar-title v-text="'Meetups'"></v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        link
        text
        v-for="(item, i) in menyBtns"
        v-bind:key="i"
        v-bind:to="item.route"
      >
        <v-icon left v-html="item.icon"></v-icon>
        {{item.title}}
      </v-btn>
      <v-btn link text v-if="user" @click="logUserOut">
        <v-icon>
          login
        </v-icon>
        LOGOUT
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    menyBtns() {
      return [
        {
          icon: 'supervisor_account',
          title: 'VIEW MEETUPS',
          route: '/meetups',
        },
        {
          icon: 'location_on',
          title: 'ORGANIZE MEETUP',
          route: '/createmeetup',
        },
        {
          icon: 'person',
          title: 'PROFILE',
          route: '/profile',
        },
        {
          icon: 'face',
          title: 'SIGN UP',
          route: '/signup',
        },
        {
          icon: 'lock_open',
          title: 'SIGN IN',
          route: '/signin',
        },
        // {
        //   icon: 'login',
        //   title: 'LOGOUT',
        //   route: this.logOutPath,
        //   // click: () => this.$store.dispatch('logout'),
        // },
      ];
    },
    user() {
      return this.$store.state.user;
    },
    // logUserOut() {
    //   let path;
    //   if (
    //     this.$route.path === '/createmeetup'
    //     || this.$route.path === '/profile'
    //   ) {
    //     path = '/';
    //   } else {
    //     path = this.$route.path;
    //   }
    //   return path;
    // },
  },
  methods: {
    logUserOut() {
      if (
        this.$route.path === '/createmeetup'
        || this.$route.path === '/profile'
      ) {
        this.$store.dispatch('logout');
        this.$router.push('/');
      } else {
        this.$store.dispatch('logout');
        this.$router.push(this.$route.path);
      }
    },
  },
};
</script>
