import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Register from '@/pages/register'
import ResetPassword from '@/pages/reset_password'
import Home from '@/pages/home'
import Layanan from '@/pages/layanan'
import Request from '@/pages/request'
import Dashboard from '@/pages/dashboard'
import EditProfile from '@/pages/edit-profile'
import GantiPassword from '@/pages/ganti-password'
import MenjadiMitra from '@/pages/menjadi-mitra'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/reset-password',
      component: ResetPassword
    },
    {
      path: '/ganti-password',
      component: GantiPassword
    },
    {
      path: '/layanan-kami',
      component: Layanan
    },
    {
      path: '/request/:layanan',
      component: Request
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/edit-profile',
      component: EditProfile
    },
    {
      path: '/menjadi-mitra',
      component: MenjadiMitra
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  mode: "history",
  
})
