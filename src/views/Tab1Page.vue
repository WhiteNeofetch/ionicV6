<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ProductCard
        v-for="(product, key) in products"
        :key="key"
        :title="product.title"
        :price="product.price"
        :imageUrl="product.imageUrl"
        @add-to-cart="addToCart(product)"
        :inCart="cartItemsIds.includes(product._id)"
      />
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";
import ProductCard from "../components/ProductCard";
export default {
  components: {
    ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    ProductCard,
  },
  mounted() {
    this.fetchProducts();
  },
  computed: {
    ...mapGetters({
      products: "products",
      cartItems: "cartItems",
    }),
    cartItemsIds: ({ cartItems }) => cartItems.map(({ _id }) => _id),
  },
  methods: {
    ...mapActions({
      fetchProducts: "fetchProducts",
    }),
    ...mapMutations({
      addToCart: "addToCart",
    }),
  },
};
</script>
