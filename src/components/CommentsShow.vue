<template>
  <div id='comments'>
    <div v-for='comment in comments' :key='comment.id'>
      <p v-html="comment.content.rendered"></p>
      <div class='buttons'>
        <button id="btn" v-on:click="EditComment(comment.id, $event)" class="btn btn-danger">Edit</button>
        <ComDelete :comid ="comment.id"/>
      </div>
    </div>
    <ComEdit v-if="PopComment" :comid ="comid"/>
  </div>
</template>
<script>
import WPAPI from '@/api/WPAPI.js'
import ComDelete from '@/components/ComDelete.vue'
import ComEdit from '@/components/ComEdit.vue'
export default {
  components: {
    ComDelete,
    ComEdit
  },
  name: 'CommentsShow',
  props: [
    'po'
  ],
  data () {
    return {
      comments: [],
      comid: '',
      PopComment: false,
      commentIdEdit: ''
    }
  },
  mounted () {
    WPAPI.getcomment(this.po)
      .then(response => {
        this.comments = response.data
      })
      .catch(error => {
        console.log('Error :', error.response)
      })
  },
  methods: {
    EditComment (id, event) {
      event.preventDefault()
      if (this.PopComment === true) {
        this.PopComment = false
      } else {
        this.PopComment = true
        this.comid = id
      }
    }
  }
}
</script>
<style scoped>
.buttons {
  display: flex;
  justify-content: center;
}
</style>
