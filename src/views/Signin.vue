<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
            <h1 class="font-weight-light text-center pt-4">Sign In</h1>
            <p class="text-center">Don’t have an account, please
              <router-link to="/signup">Sign Up</router-link>
            </p>
          <v-card-text>
            <v-form>
              <v-text-field
                label="E-mail*"
                prepend-icon="mdi-email"
                required
                class="ma-2"
                color="dark lighten-1"
                v-model="userEmail"
              ></v-text-field>
              <v-text-field
                id="password"
                name="password"
                label="Password*"
                required
                prepend-icon="lock"
                type="password"
                class="ma-2"
                color="dark lighten-1"
                v-model="userPassword"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="d-flex pb-6">
            <v-spacer></v-spacer>
            <v-btn
              type="submit"
              color="dark lighten-1"
              @click="signIn"
            >Sign In</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import emailRegExp from '../helpers/emailRegExp.vue';

export default {
  name: 'Signup',
  data: () => ({
    userEmail: '',
    userPassword: '',
  }),
  methods: {
    signIn() {
      const userEmail = this.userEmail.trim();
      if (!emailRegExp.test(userEmail)) {
        alert('Email address is invalid');
      } else if (!this.userPassword) {
        alert('Fields cannot be empty');
      } else {
        alert('Sign In is successful');
      }
    },
  },
};
</script>
