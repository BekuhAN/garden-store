<template>
  <header class="header">
    <div class="container header__wrapper">
      <router-link to="/" class="header__logo"
        ><img src="../assets/logo.png" alt=""
      /></router-link>
      <nav class="header__nav">
        <ul class="header__nav__list">
          <li class="header__nav__item">
            <router-link to="/" class="header__nav__link">Главная</router-link>
          </li>
          <li class="header__nav__item">
            <router-link to="/about" class="header__nav__link"
              >О нас</router-link
            >
          </li>
          <li class="header__nav__item">
            <router-link to="/catalog" class="header__nav__link"
              >Каталог</router-link
            >
          </li>
          <li class="header__nav__item">
            <router-link to="/contacts" class="header__nav__link"
              >Контакты</router-link
            >
          </li>
        </ul>
      </nav>
      <Cart />
    </div>
  </header>
</template>

<script>
import Cart from "./cartComponent.vue";
export default {
  components: {
    Cart,
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.header {
  background: #fff;
  &__wrapper {
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    img {
      height: 80px;
    }
  }
  &__nav {
    &__list {
      display: flex;
      gap: 40px;
    }
    &__link {
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 700;
      transition: 0.3s;
      &:hover {
        color: $main-color;
      }
      &.router-link-exact-active {
        color: $main-color;
      }
    }
  }
}
</style>
