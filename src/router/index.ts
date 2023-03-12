import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect:"/home",
    component: () => import('@/views/Home/Main.vue'),
    children:[
          {
          path: 'home',
          name:'home',
          component:()=>import('@/views/Home/components/Main/components/First/components/Myinfo'),
          },
          {
            path:'home/wish',
            name:'wish',
            component:()=>import('@/views/Home/components/Main/components/First/components/Wish')
          },
          {
            path:'home/write',
            name:'write',
            component:()=>import('@/views/Home/components/Main/components/Write')
          }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
