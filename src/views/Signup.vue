<template>
  <v-app>
    <toolbar/>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <h1 class="font-weight-light text-center pt-4">Sign Up</h1>
              <p class="text-center">Already have an account, please
                <router-link to="/signin">Sign In</router-link>
              </p>
              <v-card-text>
                <v-form>
                  <!-- prepend-icon="mdi-email" -->
                  <v-text-field
                    name="email"
                    label="E-mail*"
                    prepend-icon="mdi-email"
                    color="dark lighten-1"
                    class="ma-2"
                    type="text"
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
                  <v-text-field
                    id="confirm-password"
                    name="confirm-password"
                    label="Confirm Password*"
                    required
                    prepend-icon="lock"
                    type="password"
                    class="ma-2"
                    color="dark lighten-1"
                    v-model="userPasswordConfirm"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="d-flex pb-6">
                <v-spacer></v-spacer>
                <v-btn
                  type="submit"
                  color="dark lighten-1"
                  @click="signUp"
                >Sign Up</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import emailRegExp from '../helpers/emailRegExp.vue';
import toolbar from '../components/toolbar.vue';

export default {
  name: 'Signup',
  data: () => ({
    userEmail: '',
    userPassword: '',
    userPasswordConfirm: '',
  }),
  components: {
    toolbar,
  },
  methods: {
    signUp() {
      if (!emailRegExp.test(this.userEmail)) {
        alert('Email address is invalid');
      } else if (!this.userPassword.trim()) {
        alert('Fields cannot be empty');
      } else if (this.userPassword !== this.userPasswordConfirm) {
        alert('Passwords do not match');
      } else {
        alert('Sign Up is successful');
      }
    },
  },
};
</script>
