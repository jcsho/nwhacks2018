<template>
  <div class="home">
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
      <div id="style-check" class="filter-list">
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
              <img class="top" src="https://c1.staticflickr.com/1/571/21474845562_9d8e6b63cd_b.jpg" />
            </slide>
            <slide>
              <img class="top" src="https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg" />
            </slide>
            <slide>
              <img class="top" src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Grey_Tshirt.jpg" />
            </slide>
          </carousel>
          <carousel class="bottoms" :perPage="1" :navigationEnabled="true" :paginationEnabled="false">
            <slide>
              <img class="bottom" src="https://upload.wikimedia.org/wikipedia/commons/7/75/Jeans_BW_2_%283213391837%29.jpg" />
            </slide>
            <slide>
              <img class="bottom" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Swiss_gray_denim_uniform_pants_%2815530260916%29.jpg/770px-Swiss_gray_denim_uniform_pants_%2815530260916%29.jpg" />
            </slide>
            <slide>
              <img class="bottom" src="https://c1.staticflickr.com/6/5168/5350674888_ed65d77a54.jpg" />
            </slide>
          </carousel>
          <carousel class="shoes" :perPage="1" :navigationEnabled="true" :paginationEnabled="false">
            <slide>
              <img class="shoe" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Mens%27_ballroom_shoes%2C_Eurodance_CZ.jpg" />
            </slide>
            <slide>
              <img class="shoe" src="https://c1.staticflickr.com/6/5187/5612137877_488e4831b6_z.jpggit" />
            </slide>
            <slide>
              <img class="shoe" src="https://upload.wikimedia.org/wikipedia/commons/5/55/Combat_boots_IMGP8975.jpg" />
            </slide>
          </carousel>
        </div>
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filter-sec {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.filter-list {
  width: 100px;
}

#season-check {
  padding-bottom: 10vh;
  align-items: center;
}

p.check-title {
  margin: auto;
  width: 10vw;
  font-size: 30px;
  padding-bottom: 5px;
  border-bottom: 3px #ccc solid;
  margin-bottom: 15px;
}

.slider-sec {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

@media screen and (max-width: 785px) {
  .home {
    flex-direction: column;
    align-items: center;
  }

  .filter-sec {
    margin-top: 50px;
    width: 100vw;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }

  .slider-sec {
    width: 100vw;
  }

  #season-check {
    margin-right: 50px;
  }

  .home .sliders {
    width: 100%;
  }
}

</style>
