import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import Events from '@/components/Events'
import Login from '@/components/Login'
import About from '@/components/About'
import Profil from '@/components/Profil'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: About
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/profil',
      name: 'Profil',
      component: Profil
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
