<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="home">
        <div class="product-list">
          <ProductCard
            v-for="(product, key) in products"
            :key="key"
            :title="product.title"
            :price="product.price"
            :imageUrl="product.imageUrl"
            @add-to-cart="addToCart(product)"
            :inCart="cartItemsIds.includes(product._id)"
          />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { mapGetters, mapActions, mapMutations } from "vuex";
import ProductCard from "../components/ProductCard";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
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
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

.product-list {
  display: flex;
}
</style>
