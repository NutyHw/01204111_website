<template>
  <v-card flat>
    <v-card-title class="display-1">
      <p class="ma-0 pa-0">
        {{ section.title }}
      </p>
    </v-card-title>
    <v-list rounded>
      <v-list-item-group :color="$vuetify.theme.dark ? 'white' : 'accent'">
        <v-row>
          <v-list-item v-for="problem in section.sectionProblems" :key="problem.id">
            <v-col xs="4" sm="4" md="5" lg="6" xl="10">
              <v-list-item-content @click="viewProblemContent(problem)">
                {{ problem.problemContent }}
              </v-list-item-content>
            </v-col>
            <v-col>
              <FileInput 
              :problem="problem" 
              @submit-file-success="count += 1"
              ></FileInput>
            </v-col>
          </v-list-item>
        </v-row>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import FileInput from "./Fileinput";
const axios = require("axios");

export default {
  name: "programming",
  props: {
    section: Object,
  },
  components: {
    FileInput,
  },
  data : () => ({
    count : 0
  }),
  created(){
    this.$emit('section-created');
  },
  methods : {
    viewProblemContent(problem){
      axios.get( this.$APIURL + 'problems/content/' + String(problem._id), { withCredentials : true } )
        .then( (res) =>{
          let popup = window.open(res.data.pdfUrl)
          if ( !popup ){
            alert('please enable popup window!');
          }
        })
        .catch((err) => {});
    },
  },
  watch : {
    count : function(){
      if ( this.count === this.section.sectionProblems.length ){
        this.$emit('section-submit-success');
      }
    }
  }
};
</script>

<style scoped>
</style>
