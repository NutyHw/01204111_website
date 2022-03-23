<template>
  <v-file-input
    placeholder="upload file"
    show-size
    v-model="userFile"
    @change="verifyFile($event)"
  ></v-file-input>
</template>

<script>
import { bus } from '@/main'
const axios = require('axios');
const dotenv = require('dotenv').config();

export default {
  name : 'FileInput',
  props : {
    problem : Object,
  },
  data : () => ({
    isSubmit : false,
    userFile : null
  }),
  methods : {
    verifyFile(event) {
      if ( event ) {
        if ( event.size > 1e6 ){
          alert("Input file can't be larger than 1mb");
          this.userFile = null;
        }
      }
    }
  },
  created() {
    bus.$on('submit-answer' ,() => {
      let payload = new FormData();
      payload.append('userFile',this.userFile);
      axios.post(this.$APIURL + 'answer/submit/file/' + String(this.problem._id), payload, { withCredentials : true })
        .then( (res) => {
        })
        .catch( (err) => {
        })
      this.$emit('submit-file-success')
    })
  }
}
</script>

<style scoped>
</style>
