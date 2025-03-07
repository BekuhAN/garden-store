<template>
  <main class="news_page">
    <section class="news_page__wrapper">
      <div class="container">
        <div class="news_page__inner">
          <div class="news_page__title">{{ newsItem.title }}</div>
          <div class="news_page__image">
            <img :src="require('../assets/img/' + newsItem.image)" alt="" />
          </div>
          <div class="news_page__content" v-html="newsItem.content"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      newsItem: [],
      newsList: [],
    };
  },
  components: {},
  methods: {
    async fetchData() {
      const { data } = await axios.get(
        "http://localhost:3000/news/" + this.$route.params.id
      );
      this.newsItem = data;
      await this.setNews();
      this.newsList = this.getNews
        .filter((item) => item.id != this.$route.params.id)
        .slice(0, 3);
    },
    ...mapActions(["setNews"]),
  },
  async beforeMount() {
    await this.fetchData();
  },
  computed: {
    ...mapGetters(["getNews"]),
  },
  watch: {
    $route: "fetchData",
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
.news_page {
  border-top: 1px solid #e6e6e6;
  .section_title {
    font-size: 36px;
    font-weight: 600;
    color: $main-color;
    text-align: left;
    margin-bottom: 30px;
    position: relative;
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
  &__inner {
    margin: 50px 200px;
  }
  &__title {
    text-align: center;
    font-size: 50px;
    margin-bottom: 30px;
    line-height: 1.2;
  }
  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    background: #fff;
    margin-bottom: 50px;
    img {
      width: 100%;
    }
  }
  &__content {
    & > * {
      line-height: 2;
      font-size: 14px;
      margin-bottom: 30px;
    }
    & p {
      color: #777;
    }
    & h2 {
      font-size: 16px;
    }
    & ul,
    & ol {
      padding-left: 30px;
      list-style: square;
      li {
        line-height: 1.5;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
