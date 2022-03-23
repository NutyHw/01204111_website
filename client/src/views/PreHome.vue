<template>
  <div id="PreHome">
    <v-container>
      <!-- logo -->
      <v-row class="text-center justify-center">
        <!-- video logo -->
        <v-col class="hidden-sm-and-down hidden-xl-only" cols="12">
          <!-- light logo -->
          <LightThemeLogo
            class="logo"
            id="md_and_up"
            v-if="!$vuetify.theme.dark"
          >
          </LightThemeLogo>

          <!-- dark logo -->
          <DarkThemeLogo
            class="logo"
            id="md_and_up"
            v-if="$vuetify.theme.dark"
          >
          </DarkThemeLogo>

        </v-col>

        <v-col class="hidden-md-and-up" cols="12">
          <!-- light logo -->
          <LightThemeLogo
            class="logo"
            id="sm_and_down"
            v-if="!$vuetify.theme.dark"
          >
          </LightThemeLogo>

          <!-- dark logo -->
          <DarkThemeLogo
            class="logo"
            id="sm_and_down"
            v-if="$vuetify.theme.dark"
          >
          </DarkThemeLogo>
        </v-col>

        <v-col class="hidden-lg-and-down" cols="12">
          <!-- light logo -->
          <LightThemeLogo
            class="logo"
            id="xl"
            v-if="!$vuetify.theme.dark"
          >
          </LightThemeLogo>

          <!-- dark logo -->
          <DarkThemeLogo
            class="logo"
            id="xl"
            v-if="$vuetify.theme.dark"
          >
          </DarkThemeLogo>
        </v-col>
      </v-row>
      
      <!-- login button -->
      <v-row class="justify-center mt-4">
        <v-col cols="12" class="text-center">
          <router-link to="/login">
            <v-btn depressed x-large color="primary">
              <p class="ma-0 pa-0">
                Login
              </p>
              <v-icon size="30" right>perm_identity</v-icon>
            </v-btn>
          </router-link>
        </v-col>
      </v-row>

      <!-- CardClock -->
      <v-row class="justify-center mt-10 mb-12">
        <v-col class="mb-8" xs="6" sm="6" md="5" lg="4" xl="3">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 5 : 2" shaped>
              <v-card-title class="text-center">
                <Clock :time="time" :date="date" :timOnly="false" />
              </v-card-title>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>

      <!-- footer -->
      <Footer></Footer>
    </v-container>
  </div>
</template>

<script>
const Clock = () => import('@/components/Clock.vue');
const Footer = () => import('@/components/Footer/Footer.vue')
const DarkThemeLogo = () => import('@/components/PreHome/VideoLogo/dark.vue');
const LightThemeLogo = () => import('@/components/PreHome/VideoLogo/light.vue');
import moment from 'moment';


export default {
  name: "PreHome",
  components: {
    Clock,
    Footer,
    LightThemeLogo,
    DarkThemeLogo,
  },
  methods: {},
  data() {
    return {
      date: "",
      time: "",
    };
  },
  mounted() {
    setInterval(() => {
      this.time = moment(Date()).format("HH:mm:ss ICT");
      this.date = moment(Date()).format("ddd, DD MMM YYYY");
    }, 100);
  },
};
</script>

<style scoped>
video.logo#md_and_up {
  height: 24vw;
  width: auto;
}
video.logo#sm_and_down {
  height: 48vw;
  width: auto;
}
video.logo#xl {
  height: 48vh;
  width: auto;
}
</style>
