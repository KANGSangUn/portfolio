import Vue from 'vue'
import Router from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css' // This line here
Vue.use(Router);
Vue.use(VueMaterial);
//vue 라이브러리 setting


//page setting 
import HelloWorld from '@/components/index'
// import main from '@/components/mainpage'



export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld
    },
    // {
    //   path: '/main',
    //   name: 'main',
    //   component: main
    // }
  ]
})
