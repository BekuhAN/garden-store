<template>
  <section class="gallery">
    <div class="container">
      <div class="section_title">Галлерея</div>
      <Lightgallery
        class="gallery__list"
        :settings="{ speed: 500, plugins: plugins }"
      >
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
      </Lightgallery>
    </div>
  </section>
</template>

<!-- <script>
export default {
  mounted() {
    // eslint-disable-next-line no-undef
    $(document).ready(function () {
      // eslint-disable-next-line no-undef
      $(".venobox").venobox();
    });
  },
};
</script> -->

<script>
// import { Options, Vue } from "vue-class-component";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// If you are using scss you can skip the css imports below and use scss instead
// import styles from "lightgallery/scss/lightgallery.scss";

export default {
  data() {
    return {
      plugins: [lgThumbnail, lgZoom],
    };
  },
  components: {
    Lightgallery,
  },
  methods: {
    onInit() {
      console.log("lightGallery has been initialized");
    },
    onBeforeSlide() {
      console.log("calling before slide");
    },
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";
@import "lightgallery/css/lightgallery.css";
@import "lightgallery/css/lg-thumbnail.css";
@import "lightgallery/css/lg-zoom.css";
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
