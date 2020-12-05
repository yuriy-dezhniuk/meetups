<template>
  <v-form
    class="mx-auto"
    style="max-width: 500px">
    <v-text-field
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      label="E-mail"
      required
    ></v-text-field>

    <v-btn
      color="success"
      class="mr-4"
    >
      Validate
    </v-btn>

  </v-form>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'CreateMeetup',
};
</script>
