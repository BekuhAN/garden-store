<template>
  <div class="cart">
    <div class="cart__icon" @click="visibleModal">
      <Icon icon="solar:cart-large-4-line-duotone" />
      <div class="cart__icon__count">{{ getCart.length }}</div>
    </div>

    <div class="cart__modal" :class="{ visible: isModal }">
      <div class="cart__modal__close" @click="visibleModal">
        <Icon icon="solar:close-square-line-duotone" />
      </div>
      <div class="container">
        <div class="cart__modal__title">Корзина</div>
        <div class="cart__modal__list">
          <div class="cart__modal__list__error" v-if="!getCart.length">
            Корзина пуста :(
          </div>
          <div
            class="cart__modal__list__item cart__modal__list__item__header"
            v-if="getCart.length"
          >
            <div class="cart__modal__list__item__image">Изображение</div>
            <div class="cart__modal__list__item__name">Наименование</div>
            <div class="cart__modal__list__item__packege">Количество</div>
            <div class="cart__modal__list__item__price">Стоимость</div>
            <div class="cart__modal__list__item__control">Удалить</div>
          </div>
          <div
            class="cart__modal__list__item"
            v-for="(item, index) in getCart"
            :key="index"
          >
            <div class="cart__modal__list__item__image">
              <img :src="require(`../assets/img/${item.image}`)" />
            </div>
            <div onclick="visibleModal" class="cart__modal__list__item__name">
              {{ item.title }}
            </div>
            <div class="cart__modal__list__item__packege">
              <input
                class="cart__modal__list__item__packege__count"
                v-model="item.count"
                type="number"
                max="200"
                min="1"
              />
            </div>
            <div class="cart__modal__list__item__price">
              <span>
                {{ item.count * item.price }}
              </span>
            </div>
            <div class="cart__modal__list__item__control">
              <Icon
                icon="solar:trash-bin-trash-bold-duotone"
                width="24"
                height="24"
                @click="deleteCartItem(item)"
              />
            </div>
          </div>
        </div>
        <div class="cart__modal__footer">
          <form
            class="cart__modal__form col-75 row"
            id="order_form"
            @submit.prevent="sendEmail"
          >
            <input
              name="order_name"
              type="text"
              class="cart__modal__form__item"
              placeholder="Ваше имя"
              required
            />
            <MaskInput
              mask="+7 (###) ###-##-##"
              required
              class="cart__modal__form__item"
              type="phone"
              id="order_phone"
              placeholder="Ваш номер"
              name="order_phone"
            />
            <input
              name="order_comment"
              type="text"
              class="cart__modal__form__item"
              placeholder="Ваш комментарий (Если хотите заказать доставку, укажите в коментарии адрес)"
            />
            <textarea v-model="sendTemplate" name="order_list"></textarea>
          </form>
          <div class="cart__modal__buttons col-25">
            <button
              class="cart__modal__send"
              @click="getTemplateCart(getCart, total)"
              form="order_form"
              type="submit"
            >
              Оформить
            </button>
            <button class="cart__modal__clear" @click="clearCart">
              Очистить
            </button>
            <div class="cart__modal__total">Итог: {{ total }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { MaskInput } from "vue-3-mask";
import { mapActions, mapGetters } from "vuex";
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      isModal: false,
      sendTemplate: "",
    };
  },
  computed: {
    ...mapGetters(["getCart"]),
    total() {
      let summ = 0;
      for (let index = 0; index < this.getCart.length; index++) {
        summ += this.getCart[index].count * this.getCart[index].price;
      }
      return summ;
    },
  },
  beforeMount() {},
  methods: {
    pricePlus(item) {
      if (item.count < 200) item.qty += 1;
    },
    priceMinus(item) {
      if (item.count > 1) item.qty -= 1;
    },
    visibleModal() {
      this.isModal = !this.isModal;
    },
    ...mapActions(["clearCart", "deleteCartItem"]),
    sendEmail(e) {
      emailjs
        .sendForm(
          "service_immv23g",
          "template_u4l9ywx",
          e.target,
          "DOW3AKNJ0TAiV1e87"
        )
        .then(
          (result) => {
            e.target.reset();
            alert("Заказ оформлен!", result.status, result.text);
            console.log("SUCCESS!", result.status, result.text);
            this.clearCart();
          },
          (error) => {
            e.target.reset();
            alert("Ошибка...", error);
            console.log("FAILED...", error);
          }
        );
    },
    getTemplateCart(items, totalCart) {
      const header =
        "<table><thead><tr><th width='50px' style='text-align: center'>№</th><th style='text-align: center'>Наименование</th><th width='100px' style='text-align: center'>Количество</th><th width='50px'>Стоимость</th><th></th></tr></thead><tbody>";
      const cart = items
        .map((item, index) => {
          return `<tr>
    <td width='50px' style='text-align: center'>${index + 1}</td>
    <td>${item.title}</td>
    <td width='100px' style='text-align: center'>
    ${item.count} шт.
    </td>
    <td width='100px' style='text-align: center'>${(
      item.count * item.price
    ).toFixed(2)} руб.</td>
  </tr>`;
        })
        .join("");
      this.sendTemplate = `${header}${cart}</tbody></table><h2 class="cart_total">Итого: ${totalCart} руб.</h2>`;
    },
  },
  components: {
    MaskInput,
    Icon,
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.cart {
  &__icon {
    position: relative;
    svg {
      width: 40px;
      height: 40px;
    }
    &__count {
      position: absolute;
      width: 20px;
      height: 20px;
      color: #fff;
      font-size: 12px;
      right: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: $main-color;
    }
  }
  &__modal {
    position: fixed;
    color: #222;
    top: -100vh;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    background: #fff;
    padding: 100px 0;
    transition: 0.5s ease-in-out;
    &.visible {
      top: 0;
    }
    &__close {
      position: absolute;
      top: 40px;
      right: 50px;
      font-size: 60px;
      color: #ded6d4;
      transition: 0.2s;
      line-height: 1;
      cursor: pointer;
      &:hover {
        color: #222;
      }
    }
    &__title {
      font-size: 32px;
      margin-bottom: 30px;
      padding-bottom: 30px;
      text-align: center;
      border-bottom: 1px solid #ded6d4;
      font-weight: 500;
    }
    &__list {
      height: 50vh;
      overflow-y: auto;
      &__item {
        display: flex;
        height: 100px;
        align-items: center;
        justify-content: space-between;
        padding: 10px 30px;
        border-bottom: 1px solid #ded6d4;
        &__header {
          height: 50px;
          background: #e6e6e6;
          .cart__modal__list__item__image {
            height: auto;
          }
        }
        &__image {
          height: 100%;
          width: 180px;
          img {
            height: 100%;
          }
        }
        &__name {
          width: 480px;
          color: #222;
        }
        &__packege {
          width: 150px;
          &__count {
            border: none;
            border-bottom: 2px solid #222;
            height: 30px;
            padding-left: 10px;
          }
        }
        &__price {
          width: 150px;
          &__icon {
            font-size: 16px;
            line-height: 1;
          }
        }
        &__control {
          width: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    &__form {
      &__item {
        width: calc(50% - 10px);
        margin-bottom: 20px;
        height: 40px;
        padding-left: 10px;
        border: none;
        border-bottom: 1px solid #ded6d4;
        transition: 0.2s;
        &:focus {
          border-color: #222;
        }
        &:nth-child(3) {
          width: 100%;
        }
        &:first-child {
          margin-right: 20px;
        }
      }
      textarea {
        display: none;
      }
    }
    &__footer {
      border-top: 1px solid #ded6d4;
      padding-top: 30px;
      display: flex;
      justify-content: space-between;
    }
    &__buttons {
      display: flex;
      justify-content: flex-end;
      margin-right: -15px;
      flex-wrap: wrap;
    }
    &__send,
    &__clear {
      height: 50px;
      display: inline-flex;
      align-items: center;
      padding: 5px 25px;
      color: #fff;
      font-weight: 300;
      border-radius: 5px;
      transition: 0.2s;
      cursor: pointer;
      border: none;
      font-size: 18px;
    }
    &__send {
      background: #222;
      margin-right: 20px;
      &:hover {
        background: $main-color;
      }
    }
    &__clear {
      background: #222;
      &:hover {
        background: $main-color;
      }
    }
    &__total {
      width: 100%;
      text-align-last: right;
    }
  }
}
</style>
