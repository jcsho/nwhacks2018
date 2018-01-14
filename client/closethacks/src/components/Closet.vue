<template>
<div class="container">
  <div class="row">
      <div class="col-md-4">
          <div class="row">
            <h1 class="heading">Closet</h1>
          </div>

        <closet-filter></closet-filter>
      </div>

      <!-- CATALOGUE -->
      <div class="catalogue col-md-8">
          <ul class="row">
              <li class="col-md-4">
                  <!-- <img :src="`../assets/`+{{clothe.name}}+`.png`" /> -->
                <img src="../assets/pants_1.png" />
              </li>
            <li class="col-md-4"><img src="../assets/shirt_2.png" /></li>
            <li class="col-md-4"><img src="../assets/pants_2.png" /></li>
            <li class="col-md-4"><img src="../assets/pants_3.png" /></li>
            <li class="col-md-4"><img src="../assets/pants_4.png" /></li>
            <li class="col-md-4"><img src="../assets/shoes_1.png" /></li>
          </ul>
      </div>
  </div>
</div>

</template>

<script>
  import filter from "./Filter.vue"
export default {
    name: 'closet',
    data() {
        return {
            clothes: [],
            loading: true
        }
    },
  components: {
    "ClosetFilter": filter
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
ul {
  list-style-type: none;
  margin: 0 auto;
}
img {
  height: 200px;
  width: 200px;
}
li {
  display: inline-block;
  vertical-align: top;
  margin-top: 40px;
}
</style>
