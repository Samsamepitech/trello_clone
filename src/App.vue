<template>
  <nav>
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Hurricane&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;1,400&family=Righteous&display=swap');

body{
  margin:0;
  background: url('./assets/norvegiia-avrora-severnoe-siianie.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow: auto;
}
#tralallo{
  font-family: 'Hurricane', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f9f0f9;
  font-size:5em;
  background-color: rgb(19, 2, 69);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #9ba4ad;
  margin:0;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
