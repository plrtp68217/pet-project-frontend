<template>

    <my-dialog v-model:show="dialogVisible">
        <input class="input_authorization" v-model="username" type="text" placeholder="Имя пользователя">
        <input class="input_authorization" v-model="password" type="password" placeholder="Пароль">
        <button @click="Login" class="button_authorization">Войти</button>
    </my-dialog>

    <div class="discont">
        <div>Скидка 10% по промокоду "POLEARTOP"</div>
        <u>Обратный звонок</u>
    </div>
    <div class="header">
        <div class="container">
            <div class="nav">
                <router-link to="/" class="nav__item">Главная</router-link>
                <router-link to="/products" class="nav__item">Каталог</router-link>
                <router-link to="/contact" class="nav__item">Контактные данные</router-link>
                <router-link to="/about" class="nav__item">О нас</router-link>
            </div>
            <div class="favorites">
                <div class="favorites__item item1">Понравившeeся</div>
                <div @click="dialogVisible = true" class="favorites__item item2">Авторизация</div>
            </div>
        </div>

    </div>
</template>

<script>

import axios from 'axios';
import FormData from 'form-data';

export default {
    data() {
        return {
            isAuthorized: false,
            dialogVisible: false,
            username: '',
            password: '',
            loginError: '',
        }
    },

    methods: {
        async Login() {
            let data = new FormData();
            data.append('username', this.username);
            data.append('password', this.password);

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost/web/api/login/login',
                headers: {
                    'Content-Type': 'application/ecmascript',
                },
                data: data
            };

            const responseLogin = await axios.request(config)

            this.dialogVisible = false;
        }
    }
}
</script>
<style scoped>
.discont {
    max-width: 1440px;
    height: 44px;
    color: white;
    margin: 0 auto;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    background-color: #454F5B;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.header {
    max-width: 1440px;
    margin: 0 auto;
    height: 82px;
    border-bottom: 2px rgb(224, 223, 223) solid;
    font-size: 20px;
}

.container {
    max-width: 1245px;
    margin: 0 auto;
    height: 82px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
}

.nav {
    display: flex;
    margin-left: 20px;

}

.nav__item {
    margin-right: 32px;
    white-space: nowrap;
    text-decoration: none;
    color: black;
}

.nav__item:hover {
    color: #454F5B;
}

.nav__item:last-child {
    margin-right: 0px;
}

.favorites {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.favorites__item {
    margin-right: 32px;
}

.favorites__item:hover {
    color: #454F5B;
    cursor: pointer;
}

.favorites__item:last-child {
    margin-right: 0px;
}

/* авторизация */

.input_authorization {
    width: 300px;
    height: 30px;
    margin: 8px;
    padding: 5px 8px;
    background-color: white;
    color: #454F5B;
    border: 2px #454F5B solid;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
}

.button_authorization {
    background: none;
    color: #454F5B;
    border: 2px #454F5B solid;
    border-radius: 10px;
    font-size: 20px;
    transition: all 200ms;
    padding: 5px 8px;
}

.button_authorization:hover {
    transform: scale(1.1);
}
</style>