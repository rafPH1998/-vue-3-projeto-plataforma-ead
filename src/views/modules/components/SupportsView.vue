<template>
    <div class="comments">
        <div class="header">
            <span class="title">Dúvidas</span>
            <button class="btn primary">
                <i class="fas fa-plus"></i>
                Enviar nova dúvida
            </button>
        </div>
        
        <SupportsGlobal/>
    </div>
</template>

<script>
import SupportsGlobal from '@/components/SupportsGlobal.vue';
export default {
   name: 'SupportsView',
   components: {
    SupportsGlobal
   }
}
</script>