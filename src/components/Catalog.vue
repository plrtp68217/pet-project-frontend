<template>
    <Content>
        <LeftBar @filter="filterProducts"/>
        <ProductsList/>
    </Content>
</template>

<script>

import LeftBar from '@/components/LeftBar.vue';
import ProductsList from '@/components/ProductsList.vue';


export default {
    components: {LeftBar, ProductsList},
    
    methods:{
        filterProducts(filterRules){
            this.$emit('filter', filterRules);
        },
    }
}
</script>

<style scoped>

</style>