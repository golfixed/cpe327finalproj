import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/home')
const Customer_Home = () => import('@/views/customer/home')

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/customer/home',
            name: 'Customer Home',
            component: Customer_Home,
        }
    ]
})

export default router