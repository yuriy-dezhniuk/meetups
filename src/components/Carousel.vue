<template>
<!-- hide-delimiter-background -->
  <v-carousel
    cycle
    height="500"
    style="max-width: 1200px;"
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.bgImg"
      @click="navigateToPage(slide.path)"
    >
      <v-sheet
        height="100%"
        color="transparent"
      >
        <v-row
          class="fill-height pb-15"
          align="end"
          justify="center"
        >
          <div
            class="display-2 pa-2"
            style="background: rgba(0, 0, 0, 0.4)">
            {{ slide.title }} Slide
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  data: () => ({
    slides: [
      {
        title: 'First',
        bgImg: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        path: 'signin',
      },
      {
        title: 'Second',
        bgImg: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        path: 'signin',
      },
      {
        title: 'Third',
        bgImg: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        path: 'signin',
      },
      {
        title: 'Fourth',
        bgImg: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        path: 'signin',
      },
      {
        title: 'Fifth',
        bgImg: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        path: 'signin',
      },
    ],
  }),
  methods: {
    navigateToPage(path) {
      if (this.$route.path !== path) this.$router.push(path);
    },
  },
};
</script>
