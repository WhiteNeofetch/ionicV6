import { createStore } from "vuex";
import product from "./product";
import category from "./category";
import cart from "./cart";

const store = createStore({
  modules: {
    product,
    category,
    cart,
  },
});

export default store;
