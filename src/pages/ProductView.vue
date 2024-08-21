<template>
    <Content>

        <div class="container_product_view">


            <div class="container_product_view__image_other">

                <div class="product_view_image">
                    <img :src="product.image" alt="" class="product_image">
                </div>

                <div class="container_product_view__title_rewiews_prices_order">

                    <div class="container_product_view__title_rewies">

                        <div class="product_view_title">
                            <h1>{{ product.title }}</h1>
                        </div>

                        <div class="product_view_rewiews_count">
                            Отзывов - {be later}
                        </div>

                    </div>


                    <div class="container_product_view__prices">

                        <div class="product_view_second_price">
                            {{ product.second_price }} р
                        </div>

                        <div class="product_view_previos_price">
                            <s>{{ product.previos_price }}</s> р
                        </div>

                    </div>

                    <div class="product_view_order">
                        <button>Заказать</button>
                    </div>

                </div>

            </div>


            <div class="product_view_description">
                Описание товара: {be later}
            </div>

            <div class="product_view_rewiews">
                <h2>Отзывы:</h2>
                <div v-if="rewiews.length">
                    <div v-for="rewiew in rewiews" :key="rewiew.id">
                        {{ rewiew.content }}
                    </div>
                </div>

                <div v-else>
                    Пока что никто не оставил отзыв, будь первым, кто его напишет.
                </div>
            </div>

        </div>

    </Content>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            product: {},
            rewiews: {},

        }
    },
    methods: {
        async getProduct(id) {
            const response = await axios.get(`http://localhost/web/api/products/${id}`);
            this.product = response.data.dataProduct;
            this.rewiews = response.data.dataRewiews;
            console.log(response)
        }
    },

    mounted() {
        this.getProduct(this.$route.params.id);
    }
}
</script>

<style scoped>
.container_product_view {
    max-width: 800px;
    border: 1px red solid
}

.product_view_image {
    width: 288px;
    height: 320px;
    background-color: rgb(224, 223, 223);
}

.product_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.container_product_view__image_other {
    display: flex;
}

.container_product_view__title_rewies {
    display: flex;
}

.container_product_view__prices {
    display: flex;
}
</style>