<template>
  <section class="items_carousel">
    <div class="container">
      <div class="items_carousel__title">{{ title }}</div>
      <swiper
        :slidesPerView="4"
        :spaceBetween="30"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="items_carousel__list mySwiper"
        v-if="items.length > 0"
      >
        <swiper-slide v-for="item in items" :key="item.id">
          <CatalogItem :item="item" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import { Autoplay } from "swiper/modules";
import CatalogItem from "./catalogItem.vue";
export default {
  props: ["items", "title"],
  components: { Swiper, SwiperSlide, CatalogItem },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
.items_carousel {
  padding: 0 0 100px;
  &__title {
    font-size: 36px;
    font-weight: 600;
    color: $main-color;
    margin-bottom: 30px;
    position: relative;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 700;
    &::before {
      content: "";
      position: absolute;
      height: 2px;
      width: 100px;
      background: $main-color;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
}
</style>
