import Vue from 'vue'
import Router from 'vue-router'
import feather from 'vue-icon'
Vue.use(feather, 'v-icon')
// This line here
Vue.use(Router);

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
