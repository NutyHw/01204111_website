import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blue.lighten2,
        secondary: colors.green.lighten2,
        accent: colors.deepPurple.lighten1,
        confirm: "#10cb5d",
        error: "#e61010",
      },
      dark: {
        primary: colors.blueGrey.darken2,
        secondary: colors.teal.darken4,
        accent: colors.blueGrey.darken4,
        confirm: "#10cb5d",
        error: "#e61010",
      },
    },
  },
});
