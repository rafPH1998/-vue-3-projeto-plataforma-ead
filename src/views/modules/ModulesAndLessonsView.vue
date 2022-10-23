
<template>
      <div class="pageTitle">
        <span class="title">LaraFood</span>
        <span class="dots">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </div>

    <div class="content">
        <div class="container">
        
            <ModulesView/>

            <div class="right">
                <div class="content">
                    <PlayerView/>
                    <SupportsView/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModulesView from './components/ModulesView.vue';
import PlayerView from './components/PlayerView.vue';
import SupportsView from './components/SupportsView.vue';
export default {
    name: 'ModulesAndLessonsView',
    components: {
        ModulesView,
        PlayerView,
        SupportsView,
    }
}
</script>