<template>
  <div>
    <div id="back">
        <textarea class="textarea" v-model='formCom.content'></textarea>
        <button id="btn" v-on:click="editComment()" class="btn btn-danger">Edit</button>
    </div>
  </div>
</template>
<script>
import WPAPI from '@/api/WPAPI.js'
export default {
  props: [
    'comid'
  ],
  data () {
    return {
      comment: [],
      formCom: {
        content: ''
      }
    }
  },
  methods: {
    editComment () {
      WPAPI.editComment(this.comid, this.formCom)
        .then(function (response) {
          console.log(response)
          location.reload()
        })
    }
  }
}
</script>
<style scoped>
#back {
  position :fixed;
  z-index: 999;
  text-align: center;
  width: 50%;
  height: 50%;
  display: table;
  transition: opacity 0.3s ease;
  background-color:white;
  background-color: #172b4d;
  border-radius: 2%;
}
.textarea {
  width: 50%;
  height: 20%;
}
</style>
