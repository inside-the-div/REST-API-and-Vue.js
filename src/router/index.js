import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/homeComponent'
import categoryComponent from '@/components/categoryComponent'
import AboutComponent from '@/components/aboutComponent'
import ContactComponent from '@/components/ContactComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent
    },
    {
    	path: '/categories',
    	name: 'categoryComponent',
    	component: categoryComponent
    },
    {
      path: '/contact',
      name: 'contactComponent',
      component: ContactComponent
    },
    {
      path: '/about',
      name: 'aboutComponent',
      component: AboutComponent
    }
  ],
  mode: 'history'
})
