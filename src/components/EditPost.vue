<template>
  <div>
    <div id="edit">
      <div id="com-space"></div>

      <form  @submit.prevent="savePost()">
        <div>
        <label>Title</label>
        <input class="form-control" type="text" v-model="formEd.title"/>
      </div>
      <div>
        <label>Description</label>
        <input class="form-control" type="text" v-model="formEd.content"/>
      </div>
      <div>
        <label>Categories</label>
        <select class="form-control" v-model="formEd.categories">
        <option v-bind:value="categorie.id" v-for="categorie in categories" v-bind:key="categorie.id">{{categorie.name}}</option>
       </select>
      </div>
      <button class="btn btn-secondary" v-on:click="editPost()">Save</button>
     </form>
      </div>
  </div>

</template>

<script>
import WPAPI from '@/api/WPAPI.js'
export default {
  props: [
    'idedit'
  ],
  data () {
    return {
      categories: [],
      formEd: {
        title: '',
        content: '',
        categories: ''
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
  },
  methods: {
    editPost () {
      WPAPI.editPost(this.idedit, this.formEd)
        .then(function (response) {
          console.log(response)
          location.reload()
        })
    },
    savePost () {
      const postUpdated = {
        title: this.title,
        content: this.content,
        categories: this.categories
      }
      console.log(postUpdated)
    }
  }
}
</script>

<style scoped>
#edit {
    font-weight: bold;
    margin-bottom: 2px;
}
#edit label {
    width: 90px;
}
#com-space {
    height: 5px;
    width: 100%;
    margin: auto;
    margin-bottom: 0.5em;
    background-color: white;
    border-radius: 5px;
}
.form-control {
 background:white;
}
</style>
