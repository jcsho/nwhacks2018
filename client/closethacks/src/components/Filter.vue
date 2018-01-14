<template>
  <ul>
    <div class="types">
        <h2 class="subheading">Type</h2>
        <li><VButton class="btn">top</VButton></li>
        <li><VButton class="btn">buttom</VButton></li>
        <li><VButton class="btn">shoes</VButton></li>
    </div>
  <div class="seasons">
    <h2 class="subheading">Season</h2>
    <li><VButton class="btn">spring</VButton></li>
    <li><VButton class="btn">summer</VButton></li>
    <li><VButton class="btn">autumn</VButton></li>
    <li><VButton class="btn">winter</VButton></li>
  </div>
      <div class="styles">
    <h2 class="subheading">Style</h2>
    <li><VButton class="btn">dressy</VButton></li>
    <li><VButton class="btn">casual</VButton></li>
    <li><VButton class="btn">sports</VButton></li>
      </div>
  </ul>
</template>

<script>
  import VButton from "./button.vue"
  export default {
    name: "filter",
    components: {
      VButton
    }
  }
</script>

<style>
  ul {
    list-style-type: none;
    text-align: left;
  }
  li{
    display: block;
    margin: 12px;
  }
  .btn {
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    font-size: 16px;
    color: lightgrey;
  }
  .subheading {
    font-size: 24px;
  }

</style>
