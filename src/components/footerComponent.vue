<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-33">
          <div class="footer__column">
            <div class="footer__column__title">Навигация</div>
            <ul class="footer__nav">
              <li class="footer__nav__item">
                <router-link to="/" class="footer__nav__link"
                  >Главная</router-link
                >
              </li>
              <li class="footer__nav__item">
                <router-link to="/about" class="footer__nav__link"
                  >О нас</router-link
                >
              </li>
              <li class="footer__nav__item">
                <router-link to="/catalog" class="footer__nav__link"
                  >Каталог</router-link
                >
              </li>
              <li class="footer__nav__item">
                <router-link to="/contacts" class="footer__nav__link"
                  >Контакты</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-33">
          <div class="footer__column">
            <div class="footer__column__title">Категории</div>
            <ul class="footer__nav">
              <li class="footer__nav__item">
                <router-link
                  :to="{ path: '/catalog', query: { categoryId: 1 } }"
                  class="footer__nav__link"
                  >Гроутенты</router-link
                >
              </li>
              <li class="footer__nav__item">
                <router-link
                  :to="{ path: '/catalog', query: { categoryId: 2 } }"
                  class="footer__nav__link"
                  >Освещение</router-link
                >
              </li>
              <li class="footer__nav__item">
                <router-link
                  :to="{ path: '/catalog', query: { categoryId: 3 } }"
                  class="footer__nav__link"
                  >Вентиляция</router-link
                >
              </li>
              <li class="footer__nav__item">
                <router-link
                  :to="{ path: '/catalog', query: { categoryId: 4 } }"
                  class="footer__nav__link"
                  >Удобрения и стимуляторы</router-link
                >
              </li>
              <li class="footer__nav__item">
                <router-link
                  :to="{ path: '/catalog', query: { categoryId: 5 } }"
                  class="footer__nav__link"
                  >Гидропонные системы</router-link
                >
              </li>
              <li class="footer__nav__item">
                <router-link
                  :to="{ path: '/catalog', query: { categoryId: 6 } }"
                  class="footer__nav__link"
                  >Субстраты</router-link
                >
              </li>
              <li class="footer__nav__item">
                <router-link
                  :to="{ path: '/catalog', query: { categoryId: 7 } }"
                  class="footer__nav__link"
                  >Инвентарь</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-33">
          <div class="footer__column">
            <div class="footer__column__title">Контакты</div>
            <div class="footer__info">
              <span>Адрес: улица Труда, 243, Краснодар</span>
              <span
                >Почта: <a href="mailto:info@jardin.ru">info@jardin.ru</a></span
              >
              <span
                >Телефон:
                <a href="tel:+78611112233">+7 (861) 111-22-33</a></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      Copyright © 2023 Jardin – Все права защищены.
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.footer {
  background: #222;
  color: #fff;
  &__column {
    padding: 50px 0;
    &:not(:last-child) {
      border-right: 1px solid #555;
    }
    &__title {
      font-weight: 500;
      text-transform: uppercase;
      padding-bottom: 25px;
      margin-bottom: 25px;
      font-size: 15px;
      position: relative;
      &::before {
        height: 2px;
        width: 50px;
        background: #fff;
        left: 0;
        bottom: 0;
        content: "";
        position: absolute;
      }
    }
  }
  &__info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    color: #aaa;
  }
  &__nav {
    color: #aaa;
    &__item {
      padding-bottom: 20px;
    }
    &__link {
      transition: 0.3s;
      &:hover {
        color: $main-color;
      }
    }
  }
  &__copyright {
    font-size: 12px;
    text-align: center;
    padding: 25px 0;
    border-top: 1px solid #555;
  }
}
</style>
