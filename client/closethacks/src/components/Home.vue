<template>
  <div class="home">
    <section class="sidebar-sec">
    </section>
    <section class="main-sec">
      <section class="filter-sec">
      <div id="season-check" class="filter-list">
        <p>Season</p>
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
        <p>Style</p>
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
        <div class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="item active">
              <img class="d-block w-100" src="./../assets/logo.png" alt="First slide">
            </div>
            <div class="item">
              <img class="d-block w-100" src="./../assets/logo.png" alt="Second slide">
            </div>
            <div class="item">
              <img class="d-block w-100" src="./../assets/logo.png" alt="Third slide">
            </div>
          </div>
        </div>
        <div>
          <div class="carousel-inner">
            <div class="item active">
              <img class="d-block w-100" src="./../assets/logo.png" alt="First slide">
            </div>
            <div class="item">
              <img class="d-block w-100" src="./../assets/logo.png" alt="Second slide">
            </div>
            <div class="item">
              <img class="d-block w-100" src="./../assets/logo.png" alt="Third slide">
            </div>
          </div>
        </div>
        <div>
          <div class="carousel-inner">
            <div class="item active">
              <img class="d-block w-100" src="./../assets/logo.png" alt="First slide">
            </div>
            <div class="item">
              <img class="d-block w-100" src="./../assets/logo.png" alt="Second slide">
            </div>
            <div class="item">
              <img class="d-block w-100" src="./../assets/logo.png" alt="Third slide">
            </div>
          </div>
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
  width: 40vw;
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

.slider-sec {
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
