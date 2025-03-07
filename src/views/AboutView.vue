<template>
  <main class="about">
    <div class="page_title">
      <span>О нас</span>
    </div>
    <BannerHome />
    <ServicesAbout />
    <GalleryAbout />
  </main>
</template>

<script>
import BannerHome from "../components/bannerHome.vue";
import ServicesAbout from "../components/servicesAbout.vue";
import GalleryAbout from "../components/galleryAbout.vue";
export default {
  name: "HomeView",
  components: {
    BannerHome,
    ServicesAbout,
    GalleryAbout,
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
</style>
