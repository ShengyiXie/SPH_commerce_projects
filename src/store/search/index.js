import { reqGetSearchInfo } from "@/api";
// search模块的小仓库
// state:仓库存储数据的地方
const state = {
    searchList: {}
};
// mutations:修改state的唯一手段
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }
};
// actions:处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // 获取Search模块数据
    async getSearchList({ commit }, params) {
        // 至少传递一个空对象,
        // params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data);
        }
    }
};
// getters:计算属性，用于简化仓库数据，让组件操作数据更加方便
//可以把我们将来在组件中当中需要用的数据进行简化
const getters = {
    // 形参state是当前仓库中的state
    goodsList(state) {
        // 如果服务器的数据回来了，是一个数组
        // 如果网络不给力，是一个undefined，所以加一个空数组，以防万一
        return state.searchList.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList;
    },
    attrsList(state) {
        return state.searchList.attrsList;
    },

};
// 对外暴露
export default ({
    state,
    mutations,
    actions,
    getters
})