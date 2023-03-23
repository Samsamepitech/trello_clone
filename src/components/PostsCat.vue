<template>
  <div id='posts' :draggable="draggable" @dragstart="dragStart" @dragover.stop>
      <div v-for= 'post in posts' :key='post.id'  draggable="true">
          <div id='post' @click='openPost(post.id)'>
              <p>{{post.title.rendered}}</p>
           </div>
       </div>
     <ShowPost v-if='showpost' @closePost='closePost' v-bind:po='idpost'/>
     <input type='text' v-model='formPost.title' placeholder="titre de la carte"/>
    <button type="submit" class="btn btn-info" v-on:click="createPost()">+ Ajouter une carte</button>
  </div>

</template>

<script>
import WPAPI from '@/api/WPAPI.js'
import ShowPost from '@/components/ShowPost.vue'
export default {
  props: [
    'cat', 'draggable'
  ],
  components: {
    ShowPost
  },
  data () {
    return {
      posts: [],
      showpost: false,
      idpost: '',
      formPost: {
        title: '',
        status: 'publish',
        categories: this.cat
      }
    }
  },
  mounted () {
    WPAPI.getposts(this.cat)
      .then(response => {
        this.posts = response.data
      })
      .catch(error => {
        console.log('Error :', error.response)
      })
  },
  methods: {
    createPost () {
      WPAPI.createPost(this.formPost)
        .then(function (response) {
          console.log(response)
          location.reload()
        })
    },
    openPost (id) {
      this.idpost = id
      this.showpost = true
    },
    closePost () {
      this.po = ''
      this.showpost = false
      location.reload()
    },
    dragStart: e => {
      const target = e.target
      e.dataTransfer.setData('PostId')
      setTimeout(() => {
        target.style.display = 'none'
      }, 0)
    }
  }
}
</script>

<style scoped>
#post{
  background: white;
  border-radius: 7px;
  color:rgb(94, 92, 96);
  font-size: 18px;
  text-align: center;
  font-weight:bold;
  padding:1em;
  margin: 1em 0;
  height:2em;
}
#post :hover{
  cursor: pointer;
}
#posts{
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
input{
  border:none !important;
  border-radius: 7px;
  font-size:16px;
  width:99%;
  height:2em;
}
.btn{
  width: 90%;
  height: 3em;
  margin: .4em;
  border-radius:8px;
  background-color: rgb(113, 122, 247);
  font-weight: bold;
}
</style>
