<template>
  <v-form
    class="mx-auto"
    style="max-width: 600px"
    @submit.prevent="createMeetup"
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
      v-if="selectedImg.img"
      :src="selectedImg.url"
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
      v-model="meetupDate"
      :min="minDate"
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
      type="submit"
    >CREATE MEETUP</v-btn>
  </v-form>
</template>

<script>
// @ is an alias to /src
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrowStr = tomorrow.toISOString().substr(0, 10);

export default {
  name: 'CreateMeetup',
  data: () => ({
    title: '',
    location: '',
    selectedImg: {
      img: null,
      url: '',
    },
    description: '',
    meetupDate: tomorrowStr,
    minDate: tomorrowStr,
    meetupTime: '09:00',
  }),
  methods: {
    onUploadImgBtnClick() {
      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      [this.selectedImg.img] = e.target.files;
      // do something
      if (this.selectedImg.img) {
        this.selectedImg.url = URL.createObjectURL(this.selectedImg.img);
      }
    },
    // getTomorrowDay() {
    //   // const tomorrow = new Date();
    //   // tomorrow.setDate(tomorrow.getDate() + 1);
    //   // return tomorrow.toISOString().substr(0, 10);
    // },
    // getDefaultMeetupDay() {
    //   // this.meetupDate = this.getTomorrowDay();
    // },
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
  },
};
</script>

<style scoped lang="scss">
  h2 {
    font-size: 2rem;
  }
</style>
