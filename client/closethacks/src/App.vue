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
  .main-section {
    width: 100vw;
  }
}
</style>
