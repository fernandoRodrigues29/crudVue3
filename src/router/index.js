import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainPage from '../components/MainPage.vue'

// formulario
import FormItem from '../components/FormItem.vue';
//table
import Table from '../components/Table.vue';
//login
import Login from '../components/Login.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage  
  },
  {
    path: '/form',
    name: 'form',
    component: FormItem  
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: FormItem  
  },
  {
    path: '/delete/:id',
    name: 'delete',
    component: Table  
  },
  {
    path: '/table',
    name: 'table',
    component: Table  
  },
  {
    path: '/login',
    name: 'login',
    component: Login  
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//midleware
router.beforeEach(async (to,from)=>{
  if(!localStorage.chaveLogin && to.name !== 'login'){
    router.push('/login')
  }
});


export default router
