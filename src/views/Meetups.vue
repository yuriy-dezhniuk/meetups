<template>
  <v-app>
    <toolbar/>
    <h1>Meetups</h1>
  </v-app>
</template>

<script>
// @ is an alias to /src
import toolbar from '../components/toolbar.vue';

export default {
  name: 'Meetups',
  components: {
    toolbar,
  },
};
</script>
