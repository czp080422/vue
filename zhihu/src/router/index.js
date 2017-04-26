import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News'
import Themes from '@/components/Themes'
import Sections from '@/components/Sections'
import About from '@/components/About'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/news/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/themes',
      name: 'themes',
      component: Themes
    },
    {
      path: '/sections',
      name: 'sections',
      component: Sections
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
