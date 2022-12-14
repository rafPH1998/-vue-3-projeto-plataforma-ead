import AuthServices from '@/services/AuthServices';
import PasswordResetServices from '@/services/PasswordResetServices';

export default {

    state: {
        user: {
            name: '',
            email: '',
        },
        loggedIn: false,
    },

    mutations: {
        SET_USER (state, user) {
            state.user = user
            state.loggedIn = true
        },

        LOGOUT (state) {
            state.user = {
                name: '',
                email: ''
            }

            state.loggedIn = false
        }
    },

    actions: {
        //aqui tenho que receber no 1 parametro um commit que permite chamar um muttation
        auth ({ state }, params) {
            state.user
            return AuthServices.auth(params)
        },

        forgetPassword ({state}, params) {
            state.user
            return PasswordResetServices.forgetPassword(params)
        }
    },

}