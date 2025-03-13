<template>
  <section class="info">
    <div class="info__wrapper">
      <div class="info__title">Магазин "Зеленое дело" — это</div>
      <div class="info__sub_title">
        ТОП-бренды оборудования для выращивания растений дома!
      </div>
      <div class="info__list">
        <span class="info__list__item"
          >Более 1500 товаров. Выбирай лучший гроутент и вентиляцию, не забудь
          про освещение и удобрения для хорошего урожая.</span
        >
        <span class="info__list__item"
          >Доставка по Краснодару и краю в день заказа*. Отправка любой
          транспортной компанией.</span
        >
        <span class="info__list__item">Анонимная покупка</span>
        <span class="info__list__item"
          >Гарантия 12 месяцев. Возможность возврата и обмена.</span
        >
        <span class="info__list__item"
          >Консультация экспертов команды "Зеленое дело" — ваш помощник в
          быстром освоении тонкостей выращивания растений дома!</span
        >
      </div>
      <router-link to="/catalog" class="info__btn">В каталог</router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
.info {
  height: 800px;
  background: url("../assets/banner9.jpg") no-repeat;
  background-position: center;
  background-size: 100% auto;
  background-attachment: fixed;
  //   color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 400px;
  text-align: center;
  &__wrapper {
    background: rgba(#fff, 0.8);
    padding: 50px;
  }
  &__title {
    font-size: 50px;
    font-weight: 800;
    margin-bottom: 15px;
    font-family: "Montserrat Alternates", sans-serif;
  }
  &__sub_title {
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 40px;
    color: $main-color;
  }
  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    &__item {
      font-size: 18px;
      font-weight: 500;
      line-height: 1.2;
    }
  }
  &__btn {
    font-size: 14px;
    display: inline-block;
    position: relative;
    text-transform: capitalize;
    margin-top: 30px;
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
