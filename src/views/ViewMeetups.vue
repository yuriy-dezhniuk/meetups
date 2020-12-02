<template>
  <v-app>
    <toolbar/>
    <h1>View Meetups</h1>
  </v-app>
</template>

<script>
// @ is an alias to /src
import toolbar from '../components/toolbar.vue';

export default {
  name: 'ViewMeetups',
  components: {
    toolbar,
  },
};
</script>
