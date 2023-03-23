<template>
<div v-if='!image'>
    <p> Choisi ton image </p>
    <input type='file' @change="onFileChange">
</div>
<div v-else>
    <img :src="image"/>
    <button @click='removeImage'>Efface l'image</button>
</div>
</template>
<script>

export default {
  name: 'BackgroundSet',
  data: function () {
    return {
      image: ''
    }
  },
  methods: {
    onFileChange (e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) { return }
      this.createImage(files[0])
    },
    createImage (file) {
      const image = new Image()
      const reader = new FileReader()
      const vm = this
      reader.onload = (e) => {
        vm.image = e.target.result
      }
      reader.readAsDataURL(file)
      console.log(image)
    },
    removeImage: function (e) {
      this.image = ''
    }
  }
}
</script>
<style>
img {
width:260px;
height:140px;
}
</style>
