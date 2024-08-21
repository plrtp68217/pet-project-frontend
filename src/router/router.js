import MainPage from '@/pages/MainPage.vue';
import Products from '@/pages/Products.vue';
import ProductView from '@/pages/ProductView.vue';
import ProductView2 from '@/pages/ProductView2.vue';
import ContactData from '@/pages/ContactData.vue';
import AboutPage from '@/pages/AboutPage.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: MainPage
    },

    {
        path: '/products',
        component: Products
    },

    {
        path: '/products/:id',
        component: ProductView2
    },

    {
        path: '/contact',
        component: ContactData
    },

    {
        path: '/about',
        component: AboutPage
    },
    
];

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
});

export default router;