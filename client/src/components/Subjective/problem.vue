<template>
  <div id='problem' class="ma-6">
    <h3 v-html="concatString(index,problem.problemContent)">
    </h3>
    <v-list>
      <v-list-item-group 
        v-model="select"
        :color="$vuetify.theme.dark ? 'white' : 'accent'"
        >
        <v-list-item
          v-for="(choice,index) in problem.choices"
          :key="index"
        >
          <v-list-item-content
            class="d-inline"
            v-html="choice"
          >
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { bus } from '@/main';

export default {
  name : "problem",
  props : {
    problem : Object,
    index : Number
  },
  data: () => ({
    select : null,
  }),
  methods : {
    concatString : function(index,problemContent) {
      return String(index + 1) + '. ' + problemContent;
    }
  },
  watch : {
    select : function(){
      this.$emit('onchange-selection', { id : this.problem._id, select : this.select })
    }
  }
}

</script>

<style scoped>
</style>
