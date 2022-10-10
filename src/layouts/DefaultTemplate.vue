<template>
    <div>
        <HeaderComponent/>
        
        <section>
            <router-view></router-view>
        </section>

        <FooterComponent/>
    </div>
</template>


<script>
import { onBeforeMount } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
    name: 'DefaultTemplate',
    setup() {
        onBeforeMount(() => {
            document.body.classList.add('page')
            document.body.classList.add('dark')
            document.title = 'Curso EAD com Vuejs 3'
        })
    },
    components: {
        HeaderComponent,
        FooterComponent
    }
}

</script>