<template>
  <div class="catalog_item" v-if="item">
    <div class="catalog_item__image">
      <img :src="require(`../assets/img/${item.image}`)" />
      <div class="catalog_item__state">
        <div class="catalog_item__state__item new" v-if="item.new">Новинка</div>
        <div class="catalog_item__state__item popular" v-if="item.popular">
          Хит
        </div>
      </div>
      <div class="catalog_item__control">
        <Icon
          icon="solar:cart-plus-line-duotone"
          class="catalog_item__control__icon"
          @click="addToCart()"
          width="32"
          height="32"
        />
        <router-link :to="`/item/${item.id}`">
          <Icon
            icon="solar:info-square-line-duotone"
            width="32"
            height="32"
            class="catalog_item__control__icon"
        /></router-link>
      </div>
    </div>
    <div class="catalog_item__description">
      <router-link :to="`/item/${item.id}`" class="catalog_item__title">{{
        item.title
      }}</router-link>
      <div class="catalog_item__price">
        {{ priceFormat(item.price) }} ₽
        <span class="old" v-if="item.oldPrice > 0">
          {{ priceFormat(item.oldPrice) }} ₽
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Icon } from "@iconify/vue";
export default {
  props: ["item"],
  methods: {
    addToCart() {
      this.addCartItem({ ...this.item, count: 1 });
    },
    ...mapActions(["addCartItem"]),
    priceFormat(price) {
      return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
    },
  },
  components: { Icon },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.catalog_item {
  &__control {
    position: absolute;
    top: -100%;
    left: -100%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    background: rgba($main-color, 0.7);
    transition: 0.3s;
    z-index: 1;
    &__icon {
      transition: 0.3s;
      cursor: pointer;
      color: #fff;
      &:hover {
        transform: scale(1.2);
      }
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
  &__image {
    background: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 320px;
    padding: 30px;
    position: relative;
    img {
      width: 100%;
    }
    &:hover {
      .catalog_item__control {
        left: 0;
        top: 0;
      }
    }
  }
  &__state {
    position: absolute;
    top: 20px;
    left: 0;
    &__item {
      padding: 5px 20px 5px 10px;
      font-size: 12px;
      overflow: hidden;
      &.new {
        background: $main-color;
        color: #fff;
      }
      &.popular {
        background: $red;
        color: #fff;
      }
      &::before {
        position: absolute;
        content: "";
        height: 30px;
        width: 30px;
        right: -20px;
        top: 0;
        background: #f9f9f9;
        transform: rotate(-80deg);
      }
    }
  }
  &__description {
    padding: 30px;
  }
  &__title {
    display: block;
    font-size: 20px;
    color: $main-color;
    text-align: center;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 10px;
    transition: 0.3s;
    font-weight: 500;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 700;
    &:hover {
      color: #010101;
    }
  }
  &__price {
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    .old {
      color: #777;
      padding-left: 10px;
      text-decoration: line-through;
      font-size: 12px;
    }
  }
}
</style>
