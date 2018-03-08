import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Link1 from '@/components/link1'
import Link2 from '@/components/link2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/link1',
      name: 'Link1',
      component: Link1
    },
    {
      path: '/link2',
      name: 'Link2',
      component: Link2
    }
  ]
})
