<template>
  <v-form
    class="mx-auto"
    style="max-width: 600px"
  >
    <h2 class="pt-5 grey--text text--lighten-1 font-weight-regular">
      Create a new Meetup
    </h2>

    <v-text-field
      label="Title*"
      required
      color="dark lighten-1"
      v-model="title"
    ></v-text-field>

    <v-text-field
      label="Location*"
      required
      color="dark lighten-1"
      v-model="location"
    ></v-text-field>

    <v-btn
      color="dark lighten-1"
      class="text-none mb-5"
      :loading="selectedImg.isSelecting"
      @click="onUploadImgBtnClick()"
    >
      UPLOAD IMAGE
    </v-btn>
    <input
      ref="uploader"
      class="d-none"
      type="file"
      accept="image/*"
      @change="onFileChanged"
    >
    <v-img
      :src="imgUrl"
      max-width="300"
      max-height="300"
      class="rounded"
    ></v-img>

    <v-textarea
      color="dark lighten-1"
      class="mt-5"
      label="Description*"
      no-resize
      v-model="description"
    ></v-textarea>

    <h2 class="pt-5 grey--text text--lighten-1 font-weight-regular">
      Choose a Data & Time
    </h2>

    <v-date-picker
      v-model="meetupData"
      :allowed-dates="allowedDates"
      class="ma-1"
      width="285"
      elevation="3"
      color="grey lighten-1"
      style="height: 400px"
    ></v-date-picker>

    <v-time-picker
      elevation="3"
      v-model="meetupTime"
      format="24hr"
      class="ma-1"
      width="285"
      color="grey lighten-1"
      style="height: 400px"
    ></v-time-picker>

    <br>
    <v-btn
      color="dark"
      class="mt-10 mb-10"
      @click="createMeetup()"
    >CREATE MEETUP</v-btn>
  </v-form>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'CreateMeetup',
  data: () => ({
    title: '',
    location: '',
    selectedImg: {
      img: null,
      isSelecting: false,
    },
    description: '',
    meetupData: '',
    meetupTime: '09:00',
  }),
  computed: {
    imgUrl() {
      return this.selectedImg.img
        ? URL.createObjectURL(this.selectedImg.img) : '#';
    },
  },
  methods: {
    onUploadImgBtnClick() {
      this.selectedImg.isSelecting = true;
      window.addEventListener('focus', () => {
        this.selectedImg.isSelecting = false;
      }, { once: true });
      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      [this.selectedImg.img] = e.target.files;
      // do something
    },
    getDefaultMeetupDay() {
      const today = new Date();
      const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000))
        .toISOString().substr(0, 10);
      this.meetupData = tomorrow;
    },
    createMeetup() {
      if (
        (this.title === '')
        || (this.location === '')
        || !this.selectedImg.img
        || (this.description === '')
      ) {
        alert('All fields should be filled');
      } else {
        alert('Meetup is created');
      }
    },
    allowedDates(day) {
      return (Date.parse(day) + 1) >= new Date();
    },
  },
  created() {
    this.getDefaultMeetupDay();
  },
};
</script>

<style scoped lang="scss">
  h2 {
    font-size: 2rem;
  }
</style>
