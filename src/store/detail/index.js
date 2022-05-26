import { reqGoodsInfo } from "@/api";
// search模块的小仓库
// state:仓库存储数据的地方
const state = {
    goodinfo: {}
};
// mutations:修改state的唯一手段
const mutations = {
    GETGOODINFO(state, goodinfo) {
        state.goodinfo = goodinfo;

    }

};
// actions:处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // 获取Search模块数据
    async getGoodInfo({ commit }, skuId) {
        // 至少传递一个空对象,
        // skuId形参：是当用户派发action的时候，第二个参数传递过来的
        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            commit("GETGOODINFO", result.data);
        }
    }
};
// getters:计算属性，用于简化仓库数据，让组件操作数据更加方便
//可以把我们将来在组件中当中需要用的数据进行简化
const getters = {
    // 路径导航简化的数据 比如手机/手机通讯/手机
    categoryView(state) {
        // 这个state指的是当前state不需要state.detail
        // 初识状态是空对象undefined，就会让后面出现假的警告，至少是一个空对象
        return state.goodinfo.categoryView || {};
    },
    // 产品信息 比如价格、图片、详情
    skuInfo(state) {
        return state.goodinfo.skuInfo || {};
    },
    // 产品售卖属性的简化，比如颜色、版本
    spuSaleAttrList(state) {
        return state.goodinfo.spuSaleAttrList || [];
    }

};
// 对外暴露
export default ({
    state,
    mutations,
    actions,
    getters
})