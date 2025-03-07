<template>
  <section class="banner">
    <div class="container">
      <div class="banner__wrapper">
        <div class="banner__item banner__text">
          <div class="banner__text__title">Городское сельское хозяйство</div>
          <div class="banner__text__content">
            Городское сельское хозяйство, городское сельское хозяйство или
            городское садоводство - это практика выращивания, обработки и
            распределения продуктов питания в городских районах или вокруг них.
            Городское сельское хозяйство может также включать животноводство,
            аквакультуру, агролесоводство, городское пчеловодство и садоводство.
            Эти виды деятельности происходят и в пригородных районах, а
            пригородное сельское хозяйство может иметь другие характеристики.
          </div>
          <router-link to="/catalog" class="banner__text__btn"
            >Каталог</router-link
          >
        </div>
        <div class="banner__item banner__image">
          <img src="../assets/banner7.1.jpg" />
        </div>
        <div class="banner__item banner__image">
          <img src="../assets/banner7.2.jpg" />
        </div>
        <div class="banner__item banner__text">
          <div class="banner__text__title">О нас</div>
          <div class="banner__text__content">
            Городское сельское хозяйство может отражать различные уровни
            экономического и социального развития. Это может быть социальное
            движение за устойчивые сообщества, где органические производители,
            «гурманы» и «локаворы» образуют социальные сети, основанные на общем
            идеале природы и единства сообщества. Эти сети могут развиваться при
            получении официальной институциональной поддержки, интегрируясь в
            местное городское планирование в качестве движения «переходного
            города» за устойчивое городское развитие.
          </div>
          <router-link to="/catalog" class="banner__text__btn"
            >Каталог</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
.banner {
  padding: 50px 0;
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    width: 50%;
    min-width: 50%;
  }
  &__text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px;
    text-align: center;
    &__title {
      font-size: 40px;
      margin-bottom: 20px;
      font-weight: 700;
      color: $main-color;
    }
    &__content {
      font-size: 14px;
      color: #777;
      line-height: 2;
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
      transition: 0.4s;
      &:hover {
        background: #333;
      }
    }
  }
  &__image {
    overflow: hidden;
    height: 670px;
    img {
      width: 100%;
    }
  }
}
</style>
