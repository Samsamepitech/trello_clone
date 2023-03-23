<template>
  <div>
    <input type='text' v-model='formComment.content' placeholder='Commentez...'/>
    <button id="btn" @click="createComment()" class="btn btn-secondary">Commentez</button>
  </div>
</template>
<script>
import WPAPI from '@/api/WPAPI.js'
export default {
  props: [
    'po'
  ],
  data () {
    return {
      formComment: {
        post: this.po,
        content: '',
        karma: 0,
        approuved: '1'
      }
    }
  },
  methods: {
    createComment () {
      WPAPI.createComment(this.formComment)
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
