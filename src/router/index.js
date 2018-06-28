import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import MyArt from '@/components/MyArt'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/myart',
      name: 'MyArt',
      component: MyArt
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
