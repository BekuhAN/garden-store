<template>
  <main class="catalog">
    <div class="page_title">
      <span>Каталог</span>
    </div>
    <section class="catalog__wrapper">
      <div class="container">
        <div class="row">
          <div class="col-25">
            <div class="catalog__categories">
              <div class="catalog__categories__title">Категории</div>
              <div class="catalog__categories__list">
                <div
                  class="catalog__categories__list__item"
                  :class="{ active: activeCat == 0 }"
                  @click="setActiveCat(0)"
                >
                  Все
                </div>
                <div
                  class="catalog__categories__list__item"
                  v-for="item in getCategories"
                  :key="item.id"
                  :class="{ active: activeCat == item.id }"
                  @click="setActiveCat(item.id)"
                >
                  {{ item.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="col-75">
            <div class="catalog__filter">
              <unicon name="filter" fill="#222" />Фильтр:
              <select @change="sorted($event)" v-model="selectedStatus">
                <option selected :value="['', '']">по умолчанию</option>
                <option :value="['title', 'asc']">
                  по возрастанию названия
                </option>
                <option :value="['title', 'desc']">по убыванию названия</option>
                <option :value="['price', 'asc']">по возрастанию цены</option>
                <option :value="['price', 'desc']">по убыванию цены</option>
              </select>
            </div>
            <div class="catalog__list row">
              <div class="col-33" v-for="item in getCatalog" :key="item.id">
                <CatalogItem :item="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CatalogItem from "../components/catalogItem.vue";
export default {
  data() {
    return {
      selectedStatus: ["", ""],
      activeCat: 0,
      countItem: 0,
      params: {},
    };
  },
  components: {
    CatalogItem,
  },
  methods: {
    async fetchData() {
      await this.setCategories();
      if (this.$route.query.categoryId != undefined) {
        await this.setActiveCat(this.$route.query.categoryId);
      } else {
        await this.setActiveCat(0);
      }
    },
    ...mapActions(["setCategories", "setCatalog"]),
    setActiveCat(cat) {
      this.activeCat = cat;
      if (this.activeCat == 0) {
        this.setCatalog();
      } else {
        this.setCatalog({ categoryId: this.activeCat });
      }

      this.selectedStatus = ["", ""];
    },
    async sorted(event) {
      const list = event.target.value.split(",");
      const sort = list[0];
      const order = list[1];
      if (sort == "" || order == "") {
        delete this.params._sort;
        delete this.params._order;
      } else {
        this.params._sort = sort;
        this.params._order = order;
      }

      if (this.activeCat == 0) {
        await this.setCatalog(this.params);
      } else {
        await this.setCatalog({ ...this.params, categoryId: this.activeCat });
      }
    },
  },
  async beforeMount() {
    await this.fetchData();

    if (this.$route.query.categoryId != undefined) {
      await this.setActiveCat(this.$route.query.categoryId);
    } else {
      await this.setActiveCat(0);
    }
  },
  computed: {
    ...mapGetters(["getCategories", "getCatalog"]),
  },
  watch: {
    $route: "fetchData",
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.catalog {
  &__wrapper {
    padding: 100px 0;
  }
  &__btn {
    display: inline-block;
    padding: 15px 45px;
    color: #fff;
    background: $main-color;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    transition: 0.4s;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    &:hover {
      background: #333;
    }
  }

  &__filter {
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    padding-bottom: 16px;
    margin-bottom: 30px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    select {
      margin-left: 10px;
      border: none;
      border: 1px solid #e6e6e6;
      padding: 5px;
      color: #000;
      text-transform: uppercase;
      outline: none;
      font-family: $font-text;
    }
  }

  &__categories {
    padding: 0;
    &__title {
      font-size: 20px;
      font-weight: 500;
      text-transform: uppercase;
      padding-bottom: 26px;
      margin-bottom: 30px;
      border-bottom: 1px solid #e6e6e6;
      font-family: "Montserrat Alternates", sans-serif;
    }
    &__list {
      &__item {
        font-size: 14px;
        font-weight: 500;
        padding-left: 15px;
        cursor: pointer;
        transition: 0.3s;
        display: flex;
        align-items: center;
        padding: 15px 0;
        &:hover {
          color: $main-color;
          padding-left: 20px;
          border-left: 5px solid $main-color;
        }
        &.active {
          color: $main-color;
          padding-left: 20px;
          border-left: 5px solid $main-color;
        }
      }
    }
  }
}
</style>
