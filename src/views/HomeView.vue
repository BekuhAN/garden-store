<template>
  <main class="home">
    <Slider />
    <AboutHome />
    <ItemsCarousel :title="'Новинки'" :items="newList" />
    <InfoHome />
    <BannerHome />
    <ItemsCarousel :title="'Популярное'" :items="popularList" />
    <NewsHome />
  </main>
</template>

<script>
import Slider from "../components/sliderHome.vue";
import AboutHome from "../components/aboutHome.vue";
import InfoHome from "../components/infoHome.vue";
import BannerHome from "../components/bannerHome.vue";
import ItemsCarousel from "../components/itemsCarousel.vue";
import NewsHome from "../components/newsHome.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HomeView",
  components: {
    Slider,
    AboutHome,
    InfoHome,
    BannerHome,
    ItemsCarousel,
    NewsHome,
  },
  data() {
    return {
      newList: [],
      popularList: [],
    };
  },
  async beforeMount() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      await this.setCatalog({ popular: true, _limit: 8 });
      this.popularList = this.getCatalog;
      await this.setCatalog({ new: true, _limit: 8 });
      this.newList = this.getCatalog;
    },
    ...mapActions(["setCatalog"]),
  },
  computed: {
    ...mapGetters(["getCatalog"]),
  },
};
</script>
