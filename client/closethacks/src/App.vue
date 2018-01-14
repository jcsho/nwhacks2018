<template>
  <div id="app">
    <SideBar></SideBar>
    <router-view class="main-section" />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'

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
  },
  components: {
    SideBar
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

.main-section {
  display: flex;
  width: 80vw;
  height: 100vh;
}

@media screen and (max-width: 785px) {
  #app {
    flex-direction: column;
  }
}

@media screen and (max-width: 785px) {
  .main-section {
    width: 100vw;
  }
}
</style>
