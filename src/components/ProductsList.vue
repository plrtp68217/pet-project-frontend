<template>
    <div class="container_products_list">
        <TransitionGroup name="products_animate">
            <ProductCard
            v-for="product in products" 
            :product="product" 
            :key="product.id"
            :rewiews="rewiews"/>
        </TransitionGroup>
    </div>
    
</template>

<script>

import ProductCard from '@/components/ProductCard.vue';

export default {
    inject: ['products', 'rewiews'],
    components: { ProductCard }

}
</script>

<style scoped>
.container_products_list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 924px;
    gap: 30px;
    margin: 0 20px;
}

.products_animate-enter-active,
.products_animate-leave-active {
  transition: all 0.5s ease;
}
.products_animate-enter-from,
.products_animate-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.products_animate-move, /* применять переход к движущимся элементам */
.products_animate-enter-active,
.products_animate-leave-active {
  transition: all 0.5s ease;
}

.products_animate-enter-from,
.products_animate-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* убедитесь, что удаляющиеся элементы выведены из потока, чтобы 
анимации перемещения могли быть рассчитаны правильно. */
.products_animate-leave-active {
  position: absolute;
}

</style>