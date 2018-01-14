<template>
  <nav name="SideBar" id="nav-bar">
    <img id="icon" src="./../assets/closethacks.png" />
    <ul class="nav flex-column">
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
      msg: "this is sidebar"
    };
  }
};
</script>

<style scoped>
@media screen and (min-width: 785px) {
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
}

@media screen and (max-width: 785px) {
  #nav-bar {
    display: none;
  }
}
</style>
