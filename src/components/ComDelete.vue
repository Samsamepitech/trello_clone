<template>
  <div>
      <button id="btn" @click="deleteComment(comid)" class="btn btn-danger">Delete</button>
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
    }
  },
  methods: {
    deleteComment (id) {
      WPAPI.deleteComment(id)
        .then(function (response) {
          console.log(response)
          location.reload()
        })
    }
  }
}
</script>
<style scoped>
</style>
