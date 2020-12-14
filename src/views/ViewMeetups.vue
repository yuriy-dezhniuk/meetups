<template>
  <v-container>
    <v-card
      v-for="(meetup, index) in meetups" :key="index"
      class="mx-auto my-5 pa-5 d-flex"
      max-width="800px"
    >
      <div>
        <v-img
          :src='meetup.imgSrc'
          width='230px'
          height='230px'
          class="rounded-0 mr-10"
        ></v-img>
      </div>
      <div>
        <v-card-title
          class="mb-3"
          style="font-size: 2rem"
        >{{ meetup.title }}</v-card-title>
        <v-card-subtitle
          style="font-size: 1.2rem"
        >{{ meetup.date }}</v-card-subtitle>
        <v-btn
          color="dark lighten-1"
          class="text-none mb-5 mt-10"
        >
        <v-icon left>east</v-icon>
          VIEW MEETUP
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ViewMeetups',
  data: () => ({
    meetups: [
      {
        imgSrc: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
        title: '1111',
        date: '1111-1111-1111',
      },
      {
        imgSrc: 'https://www.meissl.com/media/images/8f24db1f/schweiz.jpg',
        title: '2222',
        date: '2222-2222-2222',
      },
      {
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpo94TTo-efWG-w6uCZkO9cJiA_5r4KGT_aw&usqp=CAU',
        title: '3333',
        date: '3333-3333-3333',
      },
    ],
  }),
};
</script>
