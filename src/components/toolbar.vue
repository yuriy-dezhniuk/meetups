<template>
    <!-- <v-toolbar>
      <v-toolbar-title>Meetups</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        depressed
        color="transparent"
        @click="$router.push('/meetups')"
      >
        <v-icon class="mr-2">people</v-icon>
        VIEW MEETUPS
      </v-btn>
      <v-btn
        depressed
        color="transparent"
        @click="$router.push('/createmeetup')"
      >
        <v-icon class="mr-2">room</v-icon>
        ORGANIZE MEETUP
      </v-btn>
      <v-btn
        depressed
        color="transparent"
        @click="$router.push('/profile')"
      >
        <v-icon class="mr-2">person</v-icon>
        PROFILE
      </v-btn>
      <v-btn
        depressed
        color="transparent"
        @click="$router.push('/signup')"
      >
        <v-icon class="mr-2">face</v-icon>
        SIGN UP
      </v-btn>
      <v-btn
        depressed
        color="transparent"
        @click="$router.push('/signin')"
      >
        <v-icon class="mr-2">lock_open</v-icon>
        SIGN IN
      </v-btn>
    </v-toolbar> -->
    <!-- start -->
    <nav>
      <v-toolbar id="toolbar">
        <v-toolbar-title>
          <span class="px-6">Meetups</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          depressed
          color="transparent"
          class="hidden-md-and-up"
          @click="toggleMenu = !toggleMenu">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-menu
          v-model="showMenu"
          :absolute="toggleMenu"
          :attach="'#toolbar'"
          :content-class="'px-2 elevation-0'"
          :nudge-top="$vuetify.breakpoint.smAndDown?-52:-12"
          min-width="100%">
          <div z-index='8' class="d-flex flex-column flex-md-row justify-end">
            <v-btn
              color="transparent"
              class="ma-1"
              depressed
              @click="$router.push('/meetups')"
            >
              <v-icon class="mr-2">people</v-icon>
              VIEW MEETUPS
            </v-btn>
            <v-btn
              color="transparent"
              class="ma-1"
              depressed
              @click="$router.push('/createmeetup')"
            >
              <v-icon class="mr-2">room</v-icon>
              ORGANIZE MEETUP
            </v-btn>
            <v-btn
              color="transparent"
              class="ma-1"
              depressed
              @click="$router.push('/profile')"
            >
              <v-icon class="mr-2">person</v-icon>
              PROFILE
            </v-btn>
            <v-btn
              color="transparent"
              class="ma-1"
              depressed
              @click="$router.push('/signup')"
            >
              <v-icon class="mr-2">face</v-icon>
              SIGN UP
            </v-btn>
            <v-btn
              color="transparent"
              class="ma-1"
              depressed
              @click="$router.push('/signin')"
            >
              <v-icon class="mr-2">lock_open</v-icon>
              SIGN IN
            </v-btn>
          </div>
        </v-menu>
      </v-toolbar>
    </nav>
    <!-- end -->
</template>

<script>
export default {
  name: 'toolbar',
  data: () => ({
    toggleMenu: false,
  }),
  computed: {
    showMenu() {
      return this.toggleMenu || this.$vuetify.breakpoint.mdAndUp;
    },
  },
};
</script>
