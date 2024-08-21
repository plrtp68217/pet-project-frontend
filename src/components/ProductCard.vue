<template>
    <div class="container_product_card" @click="$router.push(`/products/${product.id}`)">
        <div class="product_image">
            <img class="image" :src=product.image v-if="product.image">
        </div>

        <!-- Класс для разнесения (названия продукта и его цены) с (отзывами) -->
        <div class="product__items">
            <div class="product_info">
                <div class="product__title">{{ product.title }}</div>
                <div class="product__price">{{ product.second_price }} р <s style="color: rgb(66, 66, 66); margin-left: 5px;">{{ product.previos_price }} р</s></div>
            </div>

            <!-- Отзывы -->
            <div class="product__reviews">
                Отзывы ({{ getRewiewsCount(product.id) }})
            </div>

        </div>

    </div>
</template>

<script>

export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
        rewiews: {
            type: Object,
            required: true,
        }
    },

    methods: {
        getRewiewsCount($id) {
            const rewiewsCount = this.rewiews.filter((element) => element.product_id == $id);
            return rewiewsCount.length;
        }
    },
}

</script>

<style scoped>
    .container_product_card {
        width: 288px;
        height: 390px;
        border: 1px rgb(224, 223, 223) solid;
        transition: all 200ms;
    }
    
    .container_product_card:hover {
        transform: scale(1.1);
        cursor: pointer;

    }

    .product_image {
        width: 288px;
        height: 320px;
        background-color: rgb(224, 223, 223);
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

    .product__items {
        display: flex;
        margin: 10px 12px;
    }

    .product_info {
        width: 288px;
        height: 133px;
    }

    .product__title {
        color: rgb(66, 66, 66);
        font-size: 16px;
    }
    
    .product__price {
        font-size: 20px;
        font-weight: 600;
    }


</style>