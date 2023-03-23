 <template>
  <div class="header1">
    <input class="cated" type="text" v-model="formCat.name">
    <button id="btnsave" @click="editcat"> &checkmark; </button>
  </div>
</template>

<script>
import WPAPI from '@/api/WPAPI.js'

export default {
  name: 'EditCat',
  props: [
    'cated'
  ],
  data () {
    return {
      categories: [],
      formCat: {
        name: ''
      },
      width: false
    }
  },
  mounted () {
    WPAPI.getcats()
      .then(response => {
        this.name = response.data
      })
      .catch(error => {
        console.log('Error :', error.response)
      })
  },
  methods: {
    editcat () {
      alert('vous êtes en train de changer le titre')
      WPAPI.editcat(this.cated, this.formCat)
        .then(function (response) {
          console.log(response)
          location.reload()
        })
    }
  }
}
</script>

<style>
.click{
font-size:30px;
cursor:pointer;
}
.header1{
  background-color: rgb(193, 202, 214);
  color: black;
  flex: 0 0 auto;
  min-height: 3em;
  position: relative;
  margin: .2em;
  border-radius: 8px;
  display: inline-flex;
}
#btnsave{
  font-weight: 800;
  height: 2.5em;
  width:2.5em;
  margin:.5em;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 4px 2px 3px rgb(111, 110, 110);
}
.cated{
width:12em;
height:2em;
background-color: transparent;
overflow: hidden;
font-size: 16px;
font-weight:800;
border-radius:8px;
margin:.3em;
}
</style>
