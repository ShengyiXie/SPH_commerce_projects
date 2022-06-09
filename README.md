# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 项目布局
project-SPH\app
 ```
├─.gitignore               git忽略项
├─babel.config.js          配置文件
├─jsconfig.json
├─package-lock.json        缓存性文件
├─package.json             项目'身份证'
├─README.md
├─vue.config.js            运行配置
├─src
|  ├─App.vue                入口页面
|  ├─main.js                入口
|  ├─utils                  工具栏(token) 
|  ├─store                  vuex
|  ├─router                 路由
|  ├─plugins                插件
|  ├─pages                  页面
|  |   ├─Trade              交易页面
|  |   ├─ShopCart           购物车
|  |   ├─Search             搜索
|  |   ├─Register           注册
|  |   ├─PaySuccess         支付成功
|  |   ├─Pay                支付
|  |   ├─Login              登录
|  |   ├─Home               首页
|  |   ├─Detail             详情
|  |   ├─Center             个人中心        
|  |   ├─AddCartSuccess     添加购物车成功
|  ├─mock                   模拟数据(轮播图) 
|  |  ├─banner.json         
|  |  ├─floor.json
|  |  └mockServe.js
|  ├─components             全局组件
|  |     ├─TypeNav          三级联动分类
|  |     ├─Pagination       分页器
|  |     ├─Header           顶部导航栏
|  |     ├─Footer           底部导航栏
|  |     ├─Carousel         轮播图
|  ├─assets                 静态资源
|  ├─api                    后端接口
```


