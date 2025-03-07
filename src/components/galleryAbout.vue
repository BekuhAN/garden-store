<!-- eslint-disable no-undef -->
<template>
  <section class="gallery">
    <div class="container">
      <div class="section_title">Галлерея</div>
      <div class="gallery__list">
        <a
          :href="require('../assets/img/instagram1.jpg')"
          class="gallery__item venobox"
          data-gall="myGallery"
        >
          <img src="../assets/img/instagram1.jpg" />
        </a>
        <a
          :href="require('../assets/img/instagram2.jpg')"
          class="gallery__item venobox"
          data-gall="myGallery"
        >
          <img src="../assets/img/instagram2.jpg" />
        </a>
        <a
          :href="require('../assets/img/instagram3.jpg')"
          class="gallery__item venobox"
          data-gall="myGallery"
        >
          <img src="../assets/img/instagram3.jpg" />
        </a>
        <a
          :href="require('../assets/img/instagram4.jpg')"
          class="gallery__item venobox"
          data-gall="myGallery"
        >
          <img src="../assets/img/instagram4.jpg" />
        </a>
        <a
          :href="require('../assets/img/instagram5.jpg')"
          class="gallery__item venobox"
          data-gall="myGallery"
        >
          <img src="../assets/img/instagram5.jpg" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // eslint-disable-next-line no-undef
    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $(".venobox").venobox();
    });
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
.gallery {
  padding: 100px 0;
  &__list {
    display: flex;
  }
  &__item {
    img {
      width: 100%;
    }
  }
}
</style>
