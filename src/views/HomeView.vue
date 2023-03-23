<template>
  <div class="board" @dragover.prevent @drop.prevent="drop">
    <div class="cat-bord" v-for='categorie in categories' :key="categorie.id">
    <div class="list">
      <div class="header">
        <input id="cat-name" v-model="categorie.name">
        <button id="btndel" @click="deleteCat(categorie.id)">X</button>
      </div>
       <EditCat :cated="categorie.id"></EditCat>
      <BackgroundSet v-bind:image='backgroundImage'></BackgroundSet>
        <div class="posts">
      <PostsCat :cat ="categorie.id" />
        </div>
    </div>
    </div>
    <div class="add_cat" >
    <form>
    <p><input type="text" id="name_cat" v-model="formCat.name" placeholder="Categorie..."></p> <br>
    </form>
    <button v-on:click="createCat()" class="addBtn">Ajouter une autre catégorie &plus;</button>
    </div>
  </div>
</template>

<script>
import WPAPI from '@/api/WPAPI.js'
import PostsCat from '@/components/PostsCat.vue'
import BackgroundSet from '@/components/BackgroundSet.vue'
import EditCat from '@/components/EditCat.vue'

export default {

  components: {
    PostsCat,
    BackgroundSet,
    EditCat
  },

  props: [

  ],
  data () {
    return {
      image: ['backgroundImage'],
      Editform: false,
      categories: [],
      cated: '',
      cat: '',
      test: '',
      isHidden: false,
      formCat: {
        id: '',
        name: ''
      }
    }
  },
  mounted () {
    WPAPI.getcats()
      .then(response => {
        this.categories = response.data
      })
      .catch(error => {
        console.log('Error :', error.response)
      })
    WPAPI.getcat(this.cat)
      .then(response => {
        this.categories = response.data
      })
  },
  methods: {
    createCat () {
      WPAPI.createCat(this.formCat)
        .then(function (reponse) {
          console.log(reponse)
          location.reload()
        })
    },
    deleteCat (id) {
      alert("Vous étes sur le point d'effacer définitivement cette liste de votre tableau! Cliquez oui pour continuer")
      WPAPI.deleteComment(id)
        .then(function (response) {
          console.log(response)
        })
      WPAPI.deletepostcat(id)
        .then(function (response) {
          console.log(response)
        })
      WPAPI.deleteCat(id)
        .then(function (response) {
          console.log(response)
          location.reload()
        })
    },
    createPost () {
      WPAPI.createPost(this.formPost)
        .then(function (response) {
          console.log(response)
        })
    },
    openEdit (id) {
      if (this.Editform === true) {
        this.Editform = false
      } else {
        this.Editform = true
        this.cat = id
      }
    },
    drop: e => {
      const postId = e.dataTransfer.getData('PostId')
      const post = document.getElementById(postId)
      post.style.display = 'block'
      e.target.appendChild(post)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;1,400&display=swap');

.click{
font-size:30px;
cursor:pointer;
}

.board{
    bottom: 0;
    left: 0;
    margin-top: 6em;
    margin-bottom: 8px;
    overflow-x: auto;
    overflow-y: auto;
    padding-bottom: 8px;
    position: absolute;
    right: 0;
    top: 1em;
    -webkit-user-select: none;
    user-select: none;
    white-space: nowrap;
    height:100%;
}
.cat-bord{
 display: inline-block;
  height: 100%;
  margin: 0 4px;
  vertical-align: top;
  white-space: nowrap;
  width: 272px;
  border-radius: 8px;
  padding:1em;
}
#cat-name{
  font-family: 'Righteous', Verdana, Tahoma, cursive;
  font-size:20px;
  font-weight:700;
  margin: 1em;
  background-color: transparent;
  border: transparent;
  text-align: left;
  width: 160px;
}
.list{
  background-color: #ebecf0;
  border: 1px solid rgb(85, 82, 82);
  box-shadow: 2px 3px 8px white;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 15em;
  max-height: 100%;
  position: relative;
  white-space: normal;
  width: 100%!important;
  box-sizing: border-box;
}
.header{
  background-color: rgb(154, 158, 158);
  color: black;
  flex: 0 0 auto;
  min-height: 3em;
  position: relative;
  margin: .2em;
  border-radius: 8px;
  display: inline-flex;
}
.category{
    flex: 1 1 auto;
    margin: 0 4px;
    min-height: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 4px;
    z-index: 1;
}
.open-add-cat{
  text-decoration-line: none;
  cursor: pointer;
}
.add_cat{
  background-color: #ebecf0;
  border: 1px solid rgb(85, 82, 82);
  box-shadow: 2px 3px 8px white;
  border-radius: 8px;
  padding:1em;
  box-sizing: border-box;
  display: inline-block;
  height: 20%;
  margin-top:1em;
  vertical-align: top;
  white-space: nowrap;
  width: 272px;
}
button{
  background-color: aliceblue;
  color: rgb(85, 82, 82);
}
#btndel{
  font-weight: 600;
  height: 2.5em;
  width:2.5em;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 4px 2px 3px rgb(111, 110, 110);
  margin:1em;
}
</style>
