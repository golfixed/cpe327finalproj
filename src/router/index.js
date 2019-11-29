import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/home')
const Customer_Home = () => import('@/views/customer/home')
const Customer_Promotion = () => import('@/views/customer/promotion')
const Customer_Set = () => import('@/views/customer/set')
const Customer_Alacarte = () => import('@/views/customer/alacarte')
const Customer_Appitizer = () => import('@/views/customer/appitizer')
const Customer_Drink = () => import('@/views/customer/drink')
const Customer_ConfirmOrder = () => import('@/views/customer/orderconfirm')
const Customer_ฺBillSummary = () => import('@/views/customer/billsummary')
const Customer_ฺThankYou = () => import('@/views/customer/thankyou')
const Cooker_Dashboard = () => import('@/views/cooker/dashboard')



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
            path: '/customer/set',
            name: 'Customer Set',
            component: Customer_Set,
        },
        {
            path: '/customer/alacarte',
            name: 'Customer A\' La Carte',
            component: Customer_Alacarte,
        },
        {
            path: '/customer/appitizer',
            name: 'Customer Appitizer',
            component: Customer_Appitizer,
        },
        {
            path: '/customer/drink',
            name: 'Customer Drinks',
            component: Customer_Drink,
        },
        {
            path: '/customer/confirmorder',
            name: 'Customer Confirm Order',
            component: Customer_ConfirmOrder,
        },
        {
            path: '/customer/billsummary',
            name: 'Customer Bill Summary',
            component: Customer_ฺBillSummary,
        },
        {
            path: '/customer/thankyou',
            name: 'Customer Thankyou',
            component: Customer_ฺThankYou,
        },
        {
            path: '/cooker/dashboard',
            name: 'Cooker Dashboard',
            component: Cooker_Dashboard,
        },
    ]
})

export default router