<template>
    <section id="loginPage" 
        :style="{
            backgroundImage: 'url(' + require('@/assets/images/bgLogin.jpg') +')'
        }">
        <div class="loginContent">
            <div class="loginCard">
                <div class="decor" :src="require('@/assets/images/building.jpg')">
                    <div class="content">
                        <span class="logo">
                            <img :src="require('@/assets/images/logo.svg')" alt="">
                        </span>
                        <span class="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <span class="description">
                            <p>
                                Os melhores e mais completos cursos de Laravel do Brasil, cursos com projetos reais. Do zero ao profissional.
                            </p>
                        </span>
                        <span class="copyright fontSmall">
                            Todos os Direitos reservados - <b>Especializati</b>
                        </span>
                    </div>
                </div>
                <div class="login">
                    <div class="content">
                        <span>
                            <p>Seja muito bem vindo!</p>
                        </span>
                        <span class="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <span class="description">
                            Acesse nossa plataforma e desfrute de cursos completos para sua especialização.
                        </span>
                        <form action="/dist/index.html" method="">
                            <div class="groupForm">
                                <i class="far fa-envelope"></i>
                                <input type="email" name="email" v-model="email" placeholder="Email" required>
                            </div>
                            <button 
                                :class="[
                                    'btn',
                                    'primary',
                                    loading ? 'loading' : ''
                                ]" 
                                @click.prevent="forgetPassword()"
                                type="submit">
                                <span v-if="loading">Verificando...</span>
                                <span v-else>Recuperar</span>
                            </button>
                        </form>
                        <span>
                            <p class="fontSmall">Acessar? 
                                <router-link :to="{name: 'auth'}">Clique aqui</router-link>
                            </p>
                        </span>
                    </div>
                    <span class="copyright fontSmall">
                        Todos os Direitos reservados - <b>Especializati</b>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
    name: "ForgetPasswordView",

    setup(){
        const store = useStore()
        const email = ref('')
        const loading = ref(false)

        const forgetPassword = () => {
            loading.value = true

            store.dispatch('forgetPassword', {
                email: email.value
            })
            .then(() => alert('deu certo'))
            .catch(() => alert('Error'))
            .finally(() => loading.value = false)
        }

        return {
            forgetPassword,
            loading,
            email
        }
        
    }
};
</script>
