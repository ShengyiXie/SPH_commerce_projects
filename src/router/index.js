// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
// 使用插件
Vue.use(VueRouter);


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
export default new VueRouter({
    // 配置路由 k-v一致省略v
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { y: 0 }
    }
})