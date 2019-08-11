import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Detail from './views/Detail.vue'
import Collect from './views/Collect.vue'
import Add from './views/Add.vue'

Vue.use(Router)

let routes=[
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/List.vue')
    component: List
  },
  {
    path:'/detail/:id',
    name:'detail',
    component:Detail
  },
  {
    path:'/collect',
    name:'collect',
    component:Collect
  },
  {
    path:'/add',
    name:'add',
    component:Add
  }
]
export default new Router({
  routes
})
