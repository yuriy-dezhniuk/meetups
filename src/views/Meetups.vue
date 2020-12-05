<template>
  <v-row class="d-flex justify-center">
    <div class="text-center">
      <v-btn
        elevation="3"
        x-large
        class="ma-5"
        to="/meetups"
      >EXPLORE MEETUPS</v-btn>
      <v-btn
        elevation="3"
        x-large
        class="ma-5"
        to="/createmeetup"
      >ORGANIZE MEETUP</v-btn>
    </div>
    <Carousel/>
  </v-row>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue';

export default {
  name: 'Meetups',
  data: () => ({
  }),
  components: {
    Carousel,
  },
};
</script>
