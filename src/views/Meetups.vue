<template>
  <v-app>
    <toolbar/>
    <div class="text-center">
      <!-- class="mt-10 mr-5 mb-5 ml-5" -->
      <v-btn
        elevation="3"
        x-large
        class="ma-5"
        @click="navigateToPage('/meetups')"
      >EXPLORE MEETUPS</v-btn>
      <v-btn
        elevation="3"
        x-large
        class="ma-5"
        @click="navigateToPage('/createmeetup')"
      >ORGANIZE MEETUP</v-btn>
    </div>

    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">
              {{ slide }} Slide
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

  </v-app>
</template>

<script>
// @ is an alias to /src
import toolbar from '../components/toolbar.vue';

export default {
  name: 'Meetups',
  data: () => ({
    colors: [
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4',
    ],
    slides: [
      'First',
      'Second',
      'Third',
      'Fourth',
      'Fifth',
    ],
  }),
  components: {
    toolbar,
  },
  methods: {
    navigateToPage(path) {
      if (this.$route.path !== path) this.$router.push(path);
    },
  },
};
</script>
