<template>
  <section class="services">
    <div class="services__title">Причины делать покупки у нас</div>
    <div class="container">
      <div class="services__list">
        <div class="services__list__item">
          <div class="services__list__item__icon">
            <Icon icon="solar:delivery-line-duotone" width="100" height="100" />
          </div>
          <div class="services__list__item__title">Бесплатная доставка</div>
        </div>
        <div class="services__list__item">
          <div class="services__list__item__icon">
            <Icon
              icon="solar:hand-money-line-duotone"
              width="100"
              height="100"
            />
          </div>
          <div class="services__list__item__title">Выгодные цены</div>
        </div>
        <div class="services__list__item">
          <div class="services__list__item__icon">
            <Icon
              icon="solar:bag-check-line-duotone"
              width="100"
              height="100"
            />
          </div>
          <div class="services__list__item__title">Поддержка 24/7</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Icon } from "@iconify/vue";
export default { components: { Icon } };
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.services {
  background: url("../assets/img/about3.webp") no-repeat;
  background-position: center;
  background-size: 100% auto;
  padding: 150px 0;
  color: #fff;
  &__title {
    font-size: 40px;
    text-align: center;
    margin-bottom: 100px;
  }
  &__list {
    display: flex;
    align-items: center;
    &__item {
      width: 33.3333%;
      min-width: 33.3333%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 30px;
      &:not(:last-child) {
        border-right: 1px solid #fff;
      }
      &__icon {
        transition: 1s;
        margin-bottom: 30px;
        &:hover {
          transform: translateY(-10px);
        }
        svg {
          width: 70px;
          height: 70px;
        }
      }
      &__title {
        font-size: 24px;
      }
    }
  }
}
</style>
