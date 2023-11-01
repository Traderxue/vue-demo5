import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/home",
      component:()=>import("@/views/Home/home.vue"),
      children:[
        {
          path:"",
          component:()=>import("@/views/Homepage/homepage.vue")
        },
        {
          path:"/homepage",
          component:()=>import("@/views/Homepage/homepage.vue")
        },
        {
          path:"/setting",
          component:()=>import("@/views/Setting/setting.vue")
        },
        {
          path:"/order",
          component:()=>import("@/views/Order/oreder.vue")
        }
      ]
    },
    {
      path:"/login",
      component:()=>import("@/views/Login/login.vue")
    },
  ]
})

export default router
