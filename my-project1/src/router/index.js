import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import customers from '@/components/customers'
import about from '@/components/about'
import add from '@/components/Add'
import customerdetail from '@/components/customerdetail'
import edit from '@/components/edit'

// import axios from 'axios'
// import VueAxios from 'vue-axios'

Vue.use(VueResource)

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: customers},
    {path:'/about',component:about},
    {path:'/add',component:add},
    {path:'/customer/:id',component:customerdetail},
    {path:'/edit/:id',component:edit}

  ]
})


