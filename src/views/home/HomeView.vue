
<template>
  <div>
    <div class="pageTitle">
      <span class="title">Meus Cursos</span>
      <span class="dots">
          <span></span>
          <span></span>
          <span></span>
      </span>
    </div>

    <div class="content">
        <ul class="listCourses">
          <CardCourseView 
            :title="'Curso de Laravel com Vuejs'"
            :image="''"
            :bgName="'laravel'"
          />
        </ul>
    </div>
  </div>
</template>

<script>
import CardCourseView from './components/CardCourseView.vue';

export default {
  name: 'HomeView',
  components: {
    CardCourseView
  }
}
</script>
