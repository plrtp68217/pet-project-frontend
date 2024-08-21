<template>
    <Content>

        <div class="container_product_view">


            <div class="product__all">

                <div class="container_product_view__title_image">

                    <div class="product_view_title">
                        <h1>{{ product.title }}</h1>
                    </div>

                    <div class="product_view_image">
                        <img :src="product.image" alt="" class="product_image">
                    </div>

                </div>


                <div class="container_product_view__price_order_description">

                    <div class="container_product_view__price_order">

                        <div class="product_view_price">
                            {{ product.second_price }} р <s style="color: rgb(66, 66, 66); margin: 0 5px;">{{ product.second_price }} р</s>
                        </div>

                        <div class="product_view_order">
                            <button>Заказать</button>
                        </div>

                    </div>

                    <div class="product_view_description">
                        <b>Описание товара:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id itaque dolorem ut dignissimos labore odio, ab blanditiis excepturi sint nobis illo quos dolores officiis iure saepe voluptatibus possimus perspiciatis.
                    </div>

                </div>

            </div>


            <div class="product_view_rewiews">
                <h2>Отзывы:</h2>
                <div v-if="rewiews.length">
                    <div v-for="rewiew in rewiews" :key="rewiew.id" class="product_view_rewiew">

                        <div class="avatar">
                            <img class="avatar_image" src="/img/avatar.jpg" alt="">
                        </div>

                        <div>
                            {{ rewiew.content }}
                        </div>

                    </div>
                </div>

                <div v-else>
                    Пока что никто не оставил отзыв, будь первым, кто его напишет.
                </div>
            </div>


        </div>

    </Content>

    <!-- <div class="product_view_rewiews_count">
                Отзывов - {be later}
            </div> -->
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

<style solid>
.container_product_view {
    max-width: 800px;
    margin: 0 20px;
    
}

.product__all {
    display: flex;
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

.container_product_view__title_image {
    border-radius: 20px;
    padding: 10px;
}

.container_product_view__price_order_description {
    
    border-radius: 20px;
    margin-left: 30px;
    padding: 40px 10px 0px 10px;
}

.container_product_view__price_order {
    display: flex;
}

.product_view_description {
    margin-top: 20px;
    font-size: 20px;
}

.product_view_rewiews {
    margin-top: 60px;
}

.product_view_rewiew {
    display: flex;
}

.avatar {
    width: 50px;
    height: 50px;
}

.avatar_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 2px #454F5B solid;
}





</style>