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
      let commonBtns = [
        {
          icon: 'supervisor_account',
          title: 'VIEW MEETUPS',
          route: '/meetups',
        },
      ];
      const authBtns = [
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
      ];
      const gestBtns = [
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
      ];
      if (this.user) {
        commonBtns = commonBtns.concat(authBtns);
      } else {
        commonBtns = commonBtns.concat(gestBtns);
      }
      return commonBtns;
    },
    user() {
      return this.$store.state.user;
    },
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
