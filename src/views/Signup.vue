<template>
  <v-app>
    <v-container bg fill-height grid-list-md text-xs-center>
      <v-layout row wrap align-center>
        <v-flex>
          <v-row justify="center">
            <v-col
              cols="12"
              sm="7"
              md="6"
              lg="5"
              xl="3"
            >
              <!-- <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              > -->
              <v-form
                color="red"
                ref="form"
                lazy-validation
              >
                <!-- <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Mail*"
                  required
                ></v-text-field> -->
                <v-text-field
                  label="E-mail*"
                  required
                ></v-text-field>

                <v-text-field
                  type="password"
                  required
                  name="input-10-1"
                  label="Password*"
                  hint="At least 8 characters"
                  counter
                ></v-text-field>

                <v-text-field
                  type="password"
                  required
                  name="input-10-1"
                  label="Confirm Password*"
                  hint="At least 8 characters"
                  counter
                ></v-text-field>
                <v-btn class="mt-4">SIGN UP</v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'Signup',
};
</script>
