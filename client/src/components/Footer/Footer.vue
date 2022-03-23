<template>
  <v-row>
    <v-footer absolute color="primary">
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        color="white"
        :label="$vuetify.theme.dark ? 'Switch to Light' : 'Switch to Dark'"
      ></v-switch>
      <v-spacer></v-spacer>
    </v-footer>
  </v-row>
</template>

<script>
export default {
  name : "Footer",
}
</script>
