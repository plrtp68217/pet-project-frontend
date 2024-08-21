<template>
    <Catalog @filter="filterProducts" />
</template>
  
<script>
import axios from 'axios';
import { computed } from 'vue'
import Catalog from '@/components/Catalog.vue';


export default {
  components: { Catalog },
  data() {
    return {
      products: {},
      secondProducts: {},
      rewiews: {},
      filterRules: [],
    }
  },

  provide() {
    return {
      products: computed(() => this.secondProducts),
      rewiews: computed(() => this.rewiews),
    }
  },

  methods: {
    async getData() {
      const response = await axios.get('http://localhost/web/api/products');
      
      this.products = response.data.dataProducts;
      this.secondProducts = this.products;
      this.rewiews = response.data.dataRewiews;
    },

    filterProducts(newRules) {
      let rulesLength = newRules.filter((element) => element).length;


      if ((rulesLength == 0)) {

        this.secondProducts =  this.products;

      } else {

        const filteredProducts = this.products.filter((productsElement) => newRules.indexOf(productsElement.category) != -1);
        this.secondProducts = filteredProducts;
      }
    },
  },



  mounted() {
    this.getData();
  }

}

</script>

<style>
</style>