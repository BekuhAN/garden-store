<template>
  <section class="about_home">
    <div class="container">
      <div class="section_title">Товары для садоводства</div>
      <div class="about_home__text">
        Владение собственным садом, огородом и даже небольшой коллекцией
        домашних цветов – весьма непростая задача, несмотря на то, что хлопоты
        эти – приятные. Согласитесь, недостаточно просто посеять желаемые сорта
        и поливать их, ведь всякое растениеводство, как плодоовощное, так и
        цветочное, требует от человека, в первую очередь, постоянной заботы и
        «душевного» отношения. Чтобы Ваши труды носили характер исключительно
        любимого хобби, а результат превзошел самые смелые ожидания, Вам просто
        необходимы качественные предметы инвентаря и садового оснащения!
      </div>
      <router-link to="/about" class="about_home__btn"
        >Подробнее о нас</router-link
      >
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.about_home {
  padding: 100px 0;
  &__text {
    text-align: center;
    padding: 0px 200px;
    color: #777;
    line-height: 1.5;
    margin-bottom: 30px;
  }
  &__btn {
    font-size: 14px;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding: 3px 0;
    border-bottom: 2px solid #010101;
    font-weight: 500;
    transition: 0.3s;
    &:hover {
      color: $main-color;
      border-color: $main-color;
    }
  }
}
</style>
