import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from "@/layouts/Dashboard.vue";
import BasicLayout from "@/layouts/BasicLayout.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: BasicLayout,
    children: [
      {
        path: '',
        name: 'landing',
        component: HomeView
      },
        {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
      },
      ]

  },
  {
    path: '/register/',
    component: Dashboard,
    children: [
      {
        path: "candidate",
        name: "candidate",
        component: () => import('@/views/Registration/CandidateRegistration.vue')
      },
      {
        path: 'voter',
        name: 'voter',
        component: () => import('@/views/Registration/VoterRegistration.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '*'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  //if (authRequired && !loggedIn) {
    //return next('/login');
  //}

  next();
})
export default router



