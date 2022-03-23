<template>
  <div id="Clock">
    <v-container>
      <v-row>
        <v-col v-if="!timeOnly" cols="12">
          <p id="b" class="ma-0 pa-0"> {{ time }}</p>
        </v-col>
        <v-col cols="12">
          <p id="b" class="ma-0 pa-0"> {{ date }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Clock",
  props: ["time", "date", "timeOnly"],
};
</script>

<style></style>
