<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  clothes: [],
  created: function () {

    console.log('created ran');
    this.$http.get('http://chantellechan1.stdlib.com/sort@dev/read/').then(response => {

      //success callback
      console.log(response);
      this.clothes = response.body;
      console.log(this.clothes);

    }, response => {

      //error callback
      console.log(response);

    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
