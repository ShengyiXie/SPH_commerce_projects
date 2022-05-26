import { reqCategoryList, reqGetBannerList, reqFloorList } from '@/api';
// home模块的小仓库
// state:仓库存储数据的地方
const state = {
    // 根据接口返回值进行初始化。返回的是数组，初始化空的数组
    categoryList: [],
    bannerList: [],
    floorList: []
};
// mutations:修改state的唯一手段
const mutations = {
    GETCATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
    }

};
// actions:处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async getcategoryList({ commit }) {
        let result = await reqCategoryList();

        if (result.code == 200) {
            commit('GETCATEGORYLIST', result.data.slice(0, 16))

        }
    },
    // 获取首页轮播图的数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data)

        }

    },
    // 获取floor数据
    async getFloorList({ commit }) {
        let result = await reqFloorList();
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data)

        }

    },
};
// getters:计算属性，用于简化仓库数据，让组件操作数据更加方便
const getters = {};
// 对外暴露
export default ({
    state,
    mutations,
    actions,
    getters
})