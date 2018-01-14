<template>
  <div class="home">
    <section class="sidebar-sec">
    </section>
    <section class="main-sec">
      <section class="filter-sec">
      <div id="season-check" class="filter-list">
        <p class="check-title">Season</p>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="spring">
          <label class="form-check-label" for="spring">
            Spring
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="summer">
          <label class="form-check-label" for="summer">
            Summer
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="autumn">
          <label class="form-check-label" for="autumn">
            Autumn
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="winter">
          <label class="form-check-label" for="winter">
            Winter
          </label>
        </div>
      </div>
      <div id="season-check" class="filter-list">
        <p class="check-title">Style</p>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="dressy">
          <label class="form-check-label" for="dressy">
            Dressy
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="casual">
          <label class="form-check-label" for="casual">
            Casual
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="sport">
          <label class="form-check-label" for="sport">
            Sport
          </label>
        </div>
      </div>
      </section>
      <section class="slider-sec">
        <div class="sliders">
          <carousel class="tops" :perPage="1" :navigationEnabled="true" :paginationEnabled="false">
            <slide>
              <img class="top" src="./../assets/logo.png" />
            </slide>
            <slide>
              <img class="top" src="./../assets/logo.png" />
            </slide>
            <slide>
              <img class="top" src="./../assets/logo.png" />
            </slide>
          </carousel>
          <carousel class="bottoms" :perPage="1" :navigationEnabled="true" :paginationEnabled="false">
            <slide>
              <img class="bottom" src="./../assets/logo.png" />
            </slide>
            <slide>
              <img class="bottom" src="./../assets/logo.png" />
            </slide>
            <slide>
              <img class="bottom" src="./../assets/logo.png" />
            </slide>
          </carousel>
          <carousel class="shoes" :perPage="1" :navigationEnabled="true" :paginationEnabled="false">
            <slide>
              <img class="shoe" src="./../assets/logo.png" />
            </slide>
            <slide>
              <img class="shoe" src="./../assets/logo.png" />
            </slide>
            <slide>
              <img class="shoe" src="./../assets/logo.png" />
            </slide>
          </carousel>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: flex;
}

.sidebar-sec {
  display: inline-block;
  width: 20vw;
  height: 100vh;
  border-right: 1px black solid;
}

.main-sec {
  display: flex;
  width: 80vw;
  height: 100vh;
}

.filter-sec {
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.filter-list {
  justify-content: flex-start;
}

#season-check {
  padding-bottom: 10vh;
}

p.check-title {
  font-size: 30px;
}

.slider-sec {
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.slider-sec .sliders {
}

.VueCarousel.tops {
  height: 25vh;
  width: 50%;
  margin: auto;
}

img.top {
  height: 25vh;
  width: auto;
}

.VueCarousel.bottoms {
  height: 30vh;
  width: 50%;
  margin: auto;
}

img.bottom {
  height: 30vh;
  width: auto;
}

.VueCarousel.shoes {
  height: 10vh;
  width: 50%;
  margin: auto;
}

img.shoe {
  height: 10vh;
  width: auto;
}

</style>
