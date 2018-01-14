<template>
  <div>
      <h1 class="heading">Closet</h1>

      <div class="filters">
          <!-- TYPE -->
          <div class="type">
              <h2 class="subheading">type</h2>
              <button class="btn">top</button>
              <button class="btn">bottom</button>
              <button class="btn">shoes</button>
          </div>

          <!-- SEASON -->
          <div class="season">
              <h2 class="subheading">season</h2>
              <button class="btn">spring</button>
              <button class="btn">summer</button>
              <button class="btn">fall</button>
              <button class="btn">winter</button>
          </div>

          <!-- STYLE -->
          <div class="style">
              <h2 class="subheading">style</h2>
              <button class="btn">dressy</button>
              <button class="btn">casual</button>
              <button class="btn">sport</button>
          </div>
      </div>

      <!-- CATALOGUE -->
      <div class="catalogue">
          <ul class="row">
              <li v-for="clothe in clothes" :key="clothe.id">
                  <!-- <img :src="`../assets/`+{{clothe.name}}+`.png`" /> -->
                  {{ clothe. name }}
              </li>
          </ul>
      </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>
