import {createStore} from 'vuex';

export default createStore({
    state: {
        isAuthorised: false,
        username: '',
        favorites: [],
        isRegistrationDialog: true,
        isAuthorizationDialog: false,

    },
    getters: {

    },
    mutations: {
        authorisation(state, value) {
            state.isAuthorised = value;
        },

        setUsername(state, value) {
            state.username = value;
        }
    },
    actions: {

    }
})