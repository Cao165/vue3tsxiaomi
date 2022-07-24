import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import mainss from "../views/main.vue"
import home from '../views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta:{
      requiresAuth:true
    },
    component: home
  },
  {
    path: '/xiaomi',
    name: 'xiaomi',
    component: () => import(/* webpackChunkName: "about" */ '../views/xiaomi.vue'),
    redirect: '/main',
    children:[
      {
        path:'/main',
        name:'main',
        meta:{
          title:'首页'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/main.vue'),
      },
      {
        path:'/AboutView',
        name:'AboutView',
        meta:{
          title:'muil'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to,from,next)=>{
//   if(to.matched.some(item=>item.meta.requiresAuth)){
//     next({
//       path:'/xiaomi',
//       query:{redirect:to.fullPath}
//     })
//   }else{
//     next()
//   }
// })

router.afterEach((to)=>{
  (document.title as any)=to.meta.title
})

export default router
