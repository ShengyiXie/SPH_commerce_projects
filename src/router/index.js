// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
// 使用插件
Vue.use(VueRouter);
import store from '@/store'


// 重写push|replace VueRouter原型对象上的方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
// call与apply的区别:call用逗号隔开,apply用数组
// 相同点:都可以调用函数一次,都可以篡改函数的上下文
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })

    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })

    }
}

//配置路由
let router = new VueRouter({
    // 配置路由 k-v一致省略v
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { y: 0 }
    }
})

// 全局守卫：前置守卫，在路由跳转之前进行判断
router.beforeEach(async (to, from, next) => {
    // to:获取到想要跳转的路由信息
    // from:从哪个路由来的
    // next:next()放行函数，next(path)放行到指定的路由,next(false)
    //   获取令牌

    let token = store.state.user.token;
    // 获取用户信息,判断空对象为真
    let name = store.state.user.userInfo.name;
    // 用户已经登陆了
    if (token) {
        // 登录后去的是login或register都不行
        if (to.path == '/login' || to.path == '/register') {
            next('/')
        } else {
            // 登陆后去的是home|search|detail|shopcart
            if (name) {
                // 如果用户名（用户信息）已经有了，就放行
                next();
            } else {
                // 登陆了没有用户信息，就需要获取用户信息
                try {
                    //   成功了放行
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    //   token失效了，清除用户信息
                    // 退出重新到登录页面登录
                    await store.dispatch('userLogout');
                    next('/login');
                }
            }

        }
    } else {
        // 未登录
        next();
    }


})
export default router;