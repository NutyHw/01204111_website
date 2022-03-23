<template>
  <div id="Register">
    <v-row class="justify-center">
      <v-col class="text-center" xs="7" sm="9" md="7" lg="7" xl="5">
        <div class="mb-12">
          <v-card class="mx-auto mt-5 mb-8" max-height="20%" outlined>
            <!-- login title -->
            <v-card-title class="justify-center display-1 font-weight-bold">
              <p class="ma-0 pa-0">
                Register
              </p>
            </v-card-title>
            <v-form>
              <v-col>
              <v-text-field
                v-model="register.std"
                required
                label="stdnumber"
                outlined
                :color="$vuetify.theme.dark ? 'white' : 'accent'"
              ></v-text-field>

              <v-text-field
                v-model="register.password"
                :type="'password'"
                required
                label="password"
                outlined
                :color="$vuetify.theme.dark ? 'white' : 'accent'"
              ></v-text-field>
              </v-col>
            </v-form>
          </v-card>
        </div>
        <Footer></Footer>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Footer from "../components/Footer/Footer";

export default {
  name : "Register",
  components : {
    Footer,
  },
  data(){
    return {
      register : {
        std : "",
        password : ""
      },
    }
  }
}
</script>

<style scoped>
</style>
