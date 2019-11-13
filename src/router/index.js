import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/home')
const Customer_Home = () => import('@/views/customer/home')
const Customer_Promotion = () => import('@/views/customer/promotion')
const Customer_Deal = () => import('@/views/customer/deals')

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
        },
        {
            path: '/customer/promotion',
            name: 'Customer Promotion',
            component: Customer_Promotion,
        },
        {
            path: '/customer/deal',
            name: 'Customer Deal',
            component: Customer_Deal,
        }
    ]
})

export default router