<template>
<div class="container">
  <div class="row">
      <div class="col-md-4">
          <div class="row">
            <h1 class="heading">Closet</h1>
          </div>

        <div class="filters">
            <!-- TYPE -->
            <div class="type row">
                <h2 class="subheading">type</h2>
                <button class="btn">top</button>
                <button class="btn">bottom</button>
                <button class="btn">shoes</button>
            </div>

            <!-- SEASON -->
            <div class="season row">
                <h2 class="subheading">season</h2>
                <button class="btn">spring</button>
                <button class="btn">summer</button>
                <button class="btn">fall</button>
                <button class="btn">winter</button>
            </div>

            <!-- STYLE -->
            <div class="style row">
                <h2 class="subheading">style</h2>
                <button class="btn">dressy</button>
                <button class="btn">casual</button>
                <button class="btn">sport</button>
            </div>
        </div>
      </div>

      <!-- CATALOGUE -->
      <div class="catalogue col-md-8">
          <ul class="row">
              <li 
                v-for="clothe in clothes" 
                :key="clothe.id"
                class="col-md-4">
                  <!-- <img :src="`../assets/`+{{clothe.name}}+`.png`" /> -->
                  {{ clothe. name }}
              </li>
          </ul>
      </div>
  </div>
</div>

</template>

<script>
export default {
    name: 'closet',
    data() {
        return {
            clothes: [],
            loading: true
        }
    },
    created() {
        this.$http.get('http://chantellechan1.stdlib.com/sort@dev/read/').then(
            (res) => {
                this.clothes = res.body
            }
        ).catch(
            (err) => {
                console.log(err)
            }
        )
    }
}
</script>

<style>

</style>
