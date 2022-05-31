// 路由的配置信息
// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
export default [
    {
        path: "/trade",
        component: Trade,
        // 显示components-footer组件
        meta: { show: true }
    },
    {
        path: "/shopcart",
        component: ShopCart,
        // 显示components-footer组件
        meta: { show: true }
    },
    {
        name: 'addcartsuccess',
        path: "/addcartsuccess",
        component: AddCartSuccess,
        // 显示components-footer组件
        meta: { show: true }
    },
    {
        path: "/detail/:skuid",
        component: Detail,
        meta: { show: true }
    },
    {
        path: "/home",
        component: Home,
        meta: { show: true }
    },
    {
        name: "search",
        // ?可以指定params参数传不传递，不然路径就直接/？出错
        path: "/search/:keyword?",
        component: Search,
        meta: { show: true },
        // 路由组件的props数据，三种写法
        // 第一种：布尔值，只能是params参数，在search直接写props接受params数据
        // props: true
        // 第二种对象写法：额外的给路由组件传递一些props
        // props: { a: 1 }
        // 第三种：函数写法，可以把params和query
        // props: ($route) => {
        //     return {
        //         keyword: $route.params.keyword,
        //         k: $route.query.k
        //     }
        // }


    },
    {
        path: "/login",
        component: Login,
        meta: { show: false }

    },
    {
        path: "/register",
        component: Register,
        meta: { show: false }

    },
    {
        //重定向，让他根目录时自动跳转首页 
        path: "*",
        redirect: "/home"
    }]