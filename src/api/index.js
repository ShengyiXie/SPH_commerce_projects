// API接口进行统一管理
import requests from './request';
import mockRequests from './mockAjax';
// 三级联动接口
// /api/product/getBaseCategoryList get 无参数
// 发请求:axios发请求返回结果Promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

//获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner');

// 获取floor数据
export const reqFloorList = () => mockRequests.get("/floor");

// 获取搜索模块数据 地址:/api/list 请求方式：post 带参数
// 给服务器传递参数params，至少是一个空对象
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params })

// 获取产品详情页的地址
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

// 将产品添加到购物车中（获取更新某一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

// 获取购物车列表数据接口 /cart/cartList
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })

// 删除购物车界面的产品接口 /cart/deleteCart/{skuId}
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

// 修改商品选中状态/cart/checkCart/{skuID}/{isChecked}
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

// 获取验证码 /api/user/passport/sendCode/{phone} get
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })


// 注册用户/user/passport/register
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' })

// 登录 /user/passport/login
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' })

// 给服务器发token，获取用户登录后的数据
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })

// 退出登录/user/passport/logout
export const reqLogout = () => requests({ url: '/user/passport/logout', method: 'get' })

//获取购物车用户地址信息 /api/user/userAddress/auth/findUserAddressList
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })

// 获取购物车商品信息 /order/auth/trade
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' })
