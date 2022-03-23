<template>
  <div id='form'>
    <v-card flat>
      <v-card-title class="display-1">
        <p class="ma-0 pa-0">
          {{ section.title }}
        </p>
      </v-card-title>
    </v-card>
    <v-card-text class="text--primary">
      <v-form>
        <FormProblem
          v-for="problem in section.sectionProblems"
          :key="problem._id"
          :problem="problem"
          @form-submit-success="addCount()"
        >
        </FormProblem>
      </v-form>
    </v-card-text>
  </div>
</template>

<script>
import FormProblem from "./FormProblem"

export default {
  name : "Form",
  props: {
    section : Object,
  },
  data : () => ({
    count : 0
  }),
  methods : {
    addCount : function(){
      this.count += 1;
    }
  },
  components : {
    FormProblem
  },
  created(){
    this.$emit('section-created');
  },
  watch : {
    count : function(){
      if ( this.count === this.section.sectionProblems.length ){
        this.$emit('section-submit-success');
      }
    }
  }
}
</script>
