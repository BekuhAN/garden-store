<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/headerComponent.vue";
import Footer from "./components/footerComponent.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./styles/fonts.scss";
@import "./styles/global.scss";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  transition: inherit;
  color: inherit;
  line-height: 1;
  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #f8f8f8;
  }

  &::-webkit-scrollbar {
    width: 3px;
    background-color: #f8f8f8;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: $main-color;
  }
}

ul {
  list-style: none;
}

strong {
  color: #777;
}

body {
  color: #010101;
  position: relative;
  overflow-x: hidden;
  font-family: $font-text;
}

.section_title {
  font-size: 40px;
  text-transform: capitalize;
  text-align: center;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 900;
  margin-bottom: 30px;
  color: $main-color;
}
.page_title {
  background: url("./assets/img/bg_page.webp") no-repeat;
  background-size: cover;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 200px;
  color: #fff;
  & > span {
    font-size: 60px;
    font-weight: 900;
    margin-bottom: 20px;
    text-align: center;
    font-family: "Montserrat Alternates", sans-serif;
  }
}
</style>
