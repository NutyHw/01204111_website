<template>
  <div id="Login">
    <v-row class="justify-center">
      <v-col class="text-center" xs="7" sm="9" md="7" lg="7" xl="5">
        <div class="mb-12">
          <v-card class="mx-auto mt-5 mb-8" max-height="20%" outlined>
            <!-- login title -->
            <v-card-title class="justify-center display-1 font-weight-bold">
              <p class="ma-0 pa-0">
                Login !
              </p>
            </v-card-title>

            <v-form>
              <v-col>
                <!-- firstname -->
                <v-text-field
                  v-model="login.std"
                  required
                  label="stdnumber"
                  placeholder="std01"
                  outlined
                  :color="$vuetify.theme.dark ? 'white' : 'accent'"
                ></v-text-field>

                <!-- lastname -->
                <v-text-field
                  v-model="login.password"
                  :type="'password'"
                  required
                  label="password"
                  placeholder="password"
                  outlined
                  @keyup.enter="LoginHandler"
                  :color="$vuetify.theme.dark ? 'white' : 'accent'"
                ></v-text-field>

                <!-- error alert -->
                <v-alert
                  prominent
                  type="error"
                  :value="hasError"
                  outlined
                  transition="scale-transition"
                >
                  {{ message.en }}
                  <br />
                  {{ message.th }}
                </v-alert>

                <!-- button -->
                  <v-btn
                    depressed
                    x-large
                    color="primary"
                    @click="LoginHandler"
                  >
                    <p class="ma-0 pa-0">
                      Login
                    </p>
                  </v-btn>
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
const axios = require("axios");
import Footer from "../components/Footer/Footer";
export default {
  name: "Login",
  components: {
    Footer,
  },
  data() {
    return {
      login: {
        std: "",
        password: "",
      },
      hasError: false,
      message: { en: "", th: "" },
    };
  },
  methods: {
    LoginHandler() {
      this.login.std = this.login.std.trim();
      this.login.password = this.login.password.trim();
      axios
        .post(this.$APIURL + "auth/login", this.login, {
          withCredentials: true,
        })
        .then((response) => {
          this.$router.push("/pretest");
        })
        .catch( (err) => {
          this.hasError = true;
          this.message.en = err.response.data.err;
        })
    },
    focusLastname(event) {
      this.$refs.lastname.focus();
    },
  },
};
</script>

<style></style>
