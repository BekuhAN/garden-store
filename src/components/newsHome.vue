<template>
  <section class="news_home">
    <div class="container">
      <div class="section_title">Статьи</div>

      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="news_home__list mySwiper"
      >
        <swiper-slide v-for="item in getNews" :key="item.id">
          <div class="news_home__item">
            <router-link
              :to="`/news/${item.id}`"
              class="news_home__item__image"
            >
              <img :src="require(`../assets/img/${item.image}`)" />
              <div class="news_home__item__control">
                <router-link :to="`/news/${item.id}`"
                  ><unicon
                    class="news_home__item__control__icon"
                    width="40"
                    name="ellipsis-h"
                    fill="#ffffff"
                /></router-link>
              </div>
            </router-link>
            <router-link
              :to="`/news/${item.id}`"
              class="news_home__item__title"
              >{{ item.title }}</router-link
            >
            <div class="news_home__item__description">
              {{ item.description }}
            </div>
            <router-link :to="`/news/${item.id}`" class="news_home__item__btn"
              >Подробнее</router-link
            >
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
// import { Icon } from "@iconify/vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import { Autoplay } from "swiper/modules";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HomeView",
  components: { Swiper, SwiperSlide },
  data() {
    return {};
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
  async beforeMount() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      await this.setNews();
    },
    ...mapActions(["setNews"]),
  },
  computed: {
    ...mapGetters(["getNews"]),
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.news_home {
  background: #f9f9f9;
  padding: 100px 0;
  .section_title {
    text-align: left;
    margin-bottom: 50px;
  }
  &__item {
    padding-bottom: 30px;
    &__control {
      position: absolute;
      bottom: -100%;
      right: -100%;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      background: rgba($main-color, 0.7);
      transition: 0.3s;
      &__icon {
        transition: 0.3s;
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
      position: relative;
      height: 320px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        .news_home__item__control {
          right: 0;
          bottom: 0;
        }
      }
      img {
        height: 100%;
        width: auto !important;
      }
    }
    &__title {
      display: block;
      font-weight: 600;
      font-size: 20px;
      padding: 25px 0 20px;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover {
        color: $main-color;
      }
    }
    &__description {
      font-size: 14px;
      color: #777;
      margin-bottom: 20px;
      line-height: 1.6;
    }
    &__btn {
      font-size: 14px;
      font-weight: 500;
      padding-bottom: 5px;
      position: relative;
      transition: 0.3s;
      &::before {
        position: absolute;
        transition: 0.3s;
        content: "";
        width: 0px;
        height: 2px;
        background: $main-color;
        left: 0;
        bottom: 0;
      }
      &:hover {
        color: $main-color;
        &::before {
          width: 40px;
        }
      }
    }
  }
}
</style>
