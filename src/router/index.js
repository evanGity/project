import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('@/components/HelloWorld')
const children1 = () => import('@/components/children1.vue')
const children2 = () => import('@/components/children2.vue')
const mixin = () => import('@/components/mixin.vue')

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        name: 'napier 111'
      }
    },
    {
      path: '/children1',
      name: 'children1',
      component: children1,
      meta: {
        name: 'napier'
      }
    },
    {
      path: '/children2',
      name: 'children2',
      component: children2
    },
    {
      path: '/mixin',
      name: 'mixin',
      component: mixin,
      meta: {
        name: 'mixin'
      }
    },
    {
      path: '/model',
      name: 'model',
      component: () => import('../components/model.vue'),
      meta: {
        name: 'mixin'
      }
    },
    {
      path: '/comp',
      name: 'comp',
      component: () => import('../common/comp.vue'),
      meta: {
        name: 'comp'
      }
    },
    {
      path: '*',
      name: 'notFound',
      component: children2
    }
  ]
})
