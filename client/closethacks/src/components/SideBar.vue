<template>
  <nav name="SideBar" id="nav-bar">
    <img id="icon" src="./../assets/closethacks.png" />
    <ul v-bind:class="{
      'flex-column': !this.smallScreen,
      'nav': true,
      'top-bar': this.smallScreen,
      }">
      <li class="nav-item">
        <router-link to="/" append class="nav-link active">OUTFITS</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/closet" append class="nav-link">CLOSET</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      smallScreen: window.innerWidth < 785
    }
  },
  created: function() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.smallScreen = window.innerWidth < 785
      console.log(this.smallScreen);
    },
  },
}

</script>

<style scoped>
#nav-bar {
  width: 20vw;
  height: 100vh;
  background-color: #ddd;
}

#nav-bar a {
  color: #555;
}

img#icon {
  width: 100px;
  height: auto;
}

@media screen and (max-width: 785px) {
  #nav-bar {
    width: 100vw;
    height: 100px;
  }

  #nav-bar img#icon {
    float: left;
    margin-left: 20px;
  }

  #nav-bar ul.top-bar {
    float: left;
    height: 100px;
    display: flex;
    align-items: center;
  }

  #nav-bar ul.top-bar li {
    display: inline-block;
    margin-left: 5vw;
  }
}
</style>
