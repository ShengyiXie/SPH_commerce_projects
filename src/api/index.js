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