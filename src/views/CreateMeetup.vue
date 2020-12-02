<template>
  <v-app>
    <toolbar/>
    <h1>Create meetup</h1>
  </v-app>
</template>

<script>
// @ is an alias to /src
import toolbar from '../components/toolbar.vue';

export default {
  name: 'CreateMeetup',
  components: {
    toolbar,
  },
};
</script>
