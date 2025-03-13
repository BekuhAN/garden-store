<template>
  <section class="slider">
    <div class="container slider__wrapper">
      <div class="slider__inner">
        <div class="slider__title">Зеленое дело</div>
        <div class="slider__sub_title">Магазин садового инвенторя</div>
        <!-- <div class="slider__sub_title">Все для ухода</div> -->
        <router-link to="/catalog" class="slider__btn">Каталог</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
.slider {
  background: url("../assets/slide1.1.jpg") no-repeat;
  background-size: cover;
  background-position: center center;
  animation-name: sliderScale;
  animation-duration: 1s;
  animation-timing-function: linear;
  &__wrapper {
    height: 900px;
    display: flex;
    align-items: center;
  }
  &__inner {
    background: rgba(#fff, 0.8);
    padding: 70px 50px;
    width: 100%;
    text-align: center;
  }
  &__sub_title {
    font-size: 30px;
  }
  &__title {
    font-size: 100px;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 900;
    color: $main-color;
    margin: 25px 0 30px;
  }
  &__btn {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;
    border-radius: 30px;
    margin-top: 30px;
    display: inline-block;
    padding: 15px 45px;
    background: $main-color;
    font-family: "Montserrat Alternates", sans-serif;
    transition: 0.4s;
    &:hover {
      background: #333;
    }
  }
}

@keyframes sliderScale {
  from {
    background-size: 110% auto;
  }
  to {
    background-size: 100% auto;
  }
}
</style>
