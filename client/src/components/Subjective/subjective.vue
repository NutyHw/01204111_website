<template>
  <v-card flat>
    <v-card-title class="display-1">
      <p class="ma-2 pa-0">
      {{ section.title }}
      </p>
    </v-card-title>
    <problem
      v-for="(problem, index) in section.sectionProblems"
      :key="index"
      :problem="problem"
      :index="index"
      @onchange-selection="changeAnswer($event)"
    >
    </problem>
  </v-card>
</template>

<script>
import { bus } from '@/main';
import problem from './problem';
const axios = require('axios');

export default {
  name : "SubjectiveProblem",
  data : () => ({
    userAnswer : {},
  }),
  props : {
    section : Object,
  },
  methods : {
    changeAnswer : function(answer){
      this.userAnswer[answer.id] = answer.select;
    }
  },
  created(){
    bus.$on('submit-answer', () => {
      const payload = {
        sectionNumber : this.section._id,
        userAnswer : this.userAnswer
      }
      axios.post(this.$APIURL + 'answer/submit/subjective/' + String(this.section._id)
        ,payload,
        { withCredentials : true })
        .then( (res) =>{
        })
        .catch( (err) => {
        })
    })
    for ( let problem of this.section.sectionProblems ){
      this.userAnswer[problem._id] = null;
    }
  },
  components : {
    problem
  },
}
</script>

<style scoped>
</style>
