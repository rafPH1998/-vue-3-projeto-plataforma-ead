import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import MySupportView from '../views/supports/MySupportView.vue'
import ModulesAndLessonsView from '../views/modules/ModulesAndLessonsView.vue'
import AuthView from '../views/auth/AuthView.vue'
import ForgetPasswordView from '../views/auth/ForgetPasswordView.vue'

const routes = [
   {
    path: '/campus',
    component: () => import('@/layouts/DefaultTemplate.vue'),
    children: [
      {
        path: 'minhas-duvidas',
        name: 'campus.my.supports',
        component: MySupportView
      },
      {
        path: '',
        name: 'campus.home',
        component: HomeView
      },
      {
        path: 'modulos',
        name: 'campus.modulos',
        component: ModulesAndLessonsView
      },
    ]
   },
   {
    path: '/',
    name: 'auth',
    component: AuthView
   },
   {
    path: '/recuperar-senha',
    name: 'forget.password',
    component: ForgetPasswordView
   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
