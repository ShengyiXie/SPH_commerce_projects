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
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
// 二级路由
import MyOrder from "@/pages/Center/myOrder";
import GroupOrder from "@/pages/Center/groupOrder";
export default [
    {
        path: "/center",
        component: Center,
        // 显示components-footer组件
        meta: { show: true },
        children: [
            {
                // path要么写全，要么不写/
                path: '/center/myorder',
                component: MyOrder
            },
            {
                path: 'grouporder',
                component: GroupOrder
            },
            {
                // 重定向，一进来是/center重定向到/center/myorder
                path: '/center',
                redirect: '/center/myorder'
            }


        ]
    },
    {
        path: "/paysuccess",
        component: PaySuccess,
        // 显示components-footer组件
        meta: { show: true }
    },
    {
        path: "/pay",
        component: Pay,
        // 显示components-footer组件
        meta: { show: true },
        // 路由独享守卫,只关心这个路由
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next()
            } else {
                //false: 取消当前的导航。如果浏览器的 URL 改变了(可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址    
                next(false);
            }
        }
    },
    {
        path: "/trade",
        component: Trade,
        // 显示components-footer组件
        meta: { show: true },
        // 路由独享守卫,只关心这个路由
        beforeEnter: (to, from, next) => {
            if (from.path == '/shopcart') {
                next()
            } else {
                //false: 取消当前的导航。如果浏览器的 URL 改变了(可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址    
                next(false);
            }
        }
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