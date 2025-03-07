import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    catalog: [],
    categories: [],
    news: [],
    cart: [],
  },
  getters: {
    getCatalog(state) {
      return state.catalog;
    },
    getCategories(state) {
      return state.categories;
    },
    getNews(state) {
      return state.news;
    },
    getCart(state) {
      return state.cart;
    },
  },
  mutations: {
    updateCatalog(state, payload) {
      state.catalog = payload;
    },
    updateCategories(state, payload) {
      state.categories = payload;
    },
    updateNews(state, payload) {
      state.news = payload;
    },
    updateCart(state, payload) {
      state.cart = payload;
    },
  },
  actions: {
    async setCatalog({ commit }, params) {
      const { data } = await axios.get("http://localhost:3000/catalog", {
        params,
      });
      commit("updateCatalog", data);
    },
    async setCategories({ commit }) {
      const { data } = await axios.get("http://localhost:3000/categories");
      commit("updateCategories", data);
    },
    async setNews({ commit }) {
      const { data } = await axios.get("http://localhost:3000/news");
      commit("updateNews", data);
    },
    addCartItem({ state, commit }, item) {
      if (state.cart.length === 0 || state.cart.some((e) => e.id !== item.id)) {
        commit("updateCart", [...state.cart, item]);
        alert("Товар добавлен в корзину!");
      } else {
        alert("Уже в корзине!");
      }
    },
    deleteCartItem({ state, commit }, item) {
      const arr = state.cart.filter((e) => e.id !== item.id);
      commit("updateCart", arr);
    },
    clearCart({ commit }) {
      commit("updateCart", []);
    },
  },
});
