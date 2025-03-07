<template>
  <div class="cart__item">
    <div class="cart__item__image">
      <img :src="require(`../assets/img/${item.image}`)" />
    </div>
    <div @click.native="visibleModal" class="cart__item__name">
      {{ item.title }}
    </div>
    <div class="cart__item__packege">
      <div
        class="cart__item__packege__control"
        @click="priceMinus(item)"
        onclick="this.nextElementSibling.stepDown(); this.nextElementSibling.onchange();"
      >
        -
      </div>
      <!-- <input
        class="item__single__pay__count"
        v-model="item.count"
        type="number"
        max="200"
        min="1"
      /> -->
      <div
        class="cart__item__packege__control"
        @click="pricePlus(item)"
        onclick="this.previousElementSibling.stepUp(); this.previousElementSibling.onchange();"
      >
        +
      </div>
    </div>
    <div class="cart__item__price">
      <span>
        {{ (item.price * item.count) | numberWithSpaces }}
      </span>
    </div>
    <div class="cart__item__control">
      <unicon @click="deleteCartItem(item)" name="trash-alt" fill="#222" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["item"],
  count: 0,
  priceCount: 0,
  methods: {
    changeCount() {
      this.priceCount = this.count * this.item.price;
      console.log(this.priceCount);
    },
    pricePlus(item) {
      if (item.count < 200) item.qty += 1;
    },
    priceMinus(item) {
      if (item.count > 1) item.qty -= 1;
    },
    ...mapActions(["deleteCartItem"]),
  },
  beforeMount() {
    this.count = this.item.count;
    this.priceCount = this.item.count * this.item.price;
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
.cart__item {
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  border-bottom: 1px solid #ded6d4;
  &__header {
    height: 50px;
    background: #ded6d4;
    .cart__item__image {
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
    display: flex;
    align-items: center;
    gap: 10px;
    &__control {
      font-size: 24px;
      font-weight: 600;
      cursor: pointer;
    }
    input {
      width: 30px;
      padding-left: 0px;
      font-size: 14px;
      height: 30px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
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
</style>
