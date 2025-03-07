<template>
  <main class="item">
    <section class="item__single">
      <div class="container">
        <div class="row">
          <div class="col-40" v-if="Item.image">
            <div class="item__single__image">
              <img :src="require(`../assets/img/${Item.image}`)" />
            </div>
          </div>
          <div class="col-60">
            <div class="item__single__title">{{ Item.title }}</div>
            <div class="item__single__price">
              <span class="old" v-if="Item.oldPrice > 0">
                {{ Item.oldPrice }}
              </span>
              {{ Item.price }}
            </div>
            <div class="item__single__description">{{ Item.description }}</div>
            <div class="item__single__pay">
              <button class="item__single__pay__btn" @click="addToCart()">
                В корзину
              </button>
              <input
                class="item__single__pay__count"
                type="number"
                min="1"
                max="99"
                value="1"
                v-model="count"
              />
            </div>
            <div class="item__single__info" v-html="Item.info"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="item__similar">
      <div class="container">
        <div class="section_title">Похожие товары</div>
        <div class="item__similar__list row">
          <div
            class="col-25"
            v-for="item in CatalogList.slice(0, 4)"
            :key="item.id"
          >
            <CatalogItem :item="item" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import CatalogItem from "../components/catalogItem.vue";
export default {
  data() {
    return {
      Item: [],
      count: 1,
      CatalogList: [],
      activeImage: 0,
      activeTabs: 1,
      params: {
        categoryId: 1,
      },
    };
  },
  components: { CatalogItem },
  methods: {
    async fetchData() {
      this.activeImage = 0;
      const { data } = await axios.get(
        "http://localhost:3000/catalog/" + this.$route.params.id
      );
      this.Item = data;
      this.params.categoryId = data.categoryId;
      await this.setCatalog(this.params);
      this.CatalogList = this.getCatalog.filter(
        (item) => item.id != this.$route.params.id
      );
    },
    addToCart() {
      this.addCartItem({ ...this.Item, count: this.count });
    },
    ...mapActions(["setCatalog", "addCartItem"]),
    setActiveImage(index) {
      this.activeImage = index;
    },
  },
  async beforeMount() {
    await this.fetchData();
  },
  computed: {
    ...mapGetters(["getCatalog"]),
  },
  watch: {
    $route: "fetchData",
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.item {
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
  &__single {
    padding: 100px 0 50px;
    margin-bottom: 50px;
    border-bottom: 1px solid #e6e6e6;
    &__image {
      background: #f9f9f9;
      padding: 50px;
      img {
        transition: 0.3s;
        width: 100%;
      }
    }
    &__title {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 15px;
    }
    &__price {
      font-size: 20px;
      color: #222;
      font-weight: 500;
      margin-bottom: 30px;
      .old {
        font-size: 14px;
        color: $gray-500;
        font-weight: 400;
        margin-right: 10px;
        text-decoration: line-through;
      }
    }
    &__description {
      font-size: 14px;
      color: #777;
      padding: 20px 0;
      border-top: 1px solid #e6e6e6;
      line-height: 2;
    }
    &__pay {
      margin-bottom: 30px;
      height: 50px;
      display: flex;
      align-items: center;
      gap: 10px;
      &__btn {
        height: 100%;
        background: #222;
        color: #fff;
        border: 2px solid #222;
        padding: 0px 50px;
        text-transform: uppercase;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
          background: $main-color;
          border-color: $main-color;
        }
      }
      &__count {
        font-size: 20px;
        font-weight: 500;
        height: 100%;
        border: 2px solid #222;
        text-align: center;
        outline: none;
      }
    }
    &__info {
      font-size: 14px;
      & > * {
        margin-bottom: 30px;
        line-height: 1.5;
      }
      & ul,
      & ol {
        padding-left: 30px;
        list-style: square;
        li {
          margin-bottom: 10px;
          line-height: 1.5;
        }
      }
      &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;
        font-size: 14px;
        &__value {
          color: #777;
        }
      }
    }
  }
  &__similar {
    padding-bottom: 100px;
    .section_title {
      font-size: 36px;
    }
    &__list {
      margin-top: 50px;
    }
  }
}
</style>
