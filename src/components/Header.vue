<template>

    <my-dialog v-model:show="dialogVisible">


        <Transition name="bounce">
            <div v-if="$store.state.isRegistrationDialog" class="dialog_authorization">
                <h1>Регистрация</h1>
                <input class="input_authorization" v-model="username" type="text" placeholder="Имя пользователя">
                <input class="input_authorization" v-model="password" type="password" placeholder="Пароль">
                <input class="input_authorization" v-model="repeat_password" type="password" placeholder="Повторите пароль">
                <button @click="Login" class="button_authorization">Зарегистрироваться</button>
                <div><h3 @click="showAuthorization">У меня уже есть аккаунт</h3></div>
            </div>
        </Transition>
        
        <Transition name="bounce">
            <div v-if="$store.state.isAuthorizationDialog" class="dialog_authorization">
                <h1>Авторизация</h1>
                <input class="input_authorization" v-model="username" type="text" placeholder="Имя пользователя">
                <input class="input_authorization" v-model="password" type="password" placeholder="Пароль">
                <button @click="Login" class="button_authorization">Войти</button>
                <div><h3 @click="showRegistration">Пройти регистрацию</h3></div>
                <div v-if="loginError"  class="error">Неверный логин или пароль</div>
            </div>
        </Transition>

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
                <div v-if="$store.state.isAuthorised" class="favorites__item item2">{{ $store.state.username }}</div>
                <div v-else>
                    <div @click="dialogVisible = true" class="favorites__item item2">Войти в профиль</div>
                </div>

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
            dialogVisible: false,
            username: '',
            password: '',
            repeat_password: '',
            loginError: false,
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

            const responseLogin = await axios.request(config);

            if (responseLogin.data.status) {
                this.$store.commit('authorisation', true);
                this.$store.commit('setUsername', this.username);
                this.username = '',
                this.password = '',
                this.loginError = false;
                this.dialogVisible = false;
            }

            else {
                this.loginError = true;
            }

            console.log(responseLogin);
        },

        showAuthorization() {
            this.$store.state.isAuthorizationDialog = true;
            this.$store.state.isRegistrationDialog = false;
        },

        showRegistration() {
            this.$store.state.isAuthorizationDialog = false;
            this.$store.state.isRegistrationDialog = true;
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

.dialog_authorization {
    display: flex;
    flex-direction: column;
    position: absolute;
    
}

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

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

</style>