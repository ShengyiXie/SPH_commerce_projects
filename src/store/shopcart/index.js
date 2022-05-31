import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from '@/api';
import { Promise } from 'core-js';
const state = {
    cartList: []
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList

    }
};
const actions = {
    // 获取购物车列表数据
    async getCartList({ commit }) {
        let result = await reqCartList();
        console.log(result);
        if (result.code == 200) {
            commit("GETCARTLIST", result.data)

        }
    },
    // 删除购物车中的某一个商品
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 修改购物车选中状态
    async updateCheckedById({ commmit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedById(skuId, isChecked);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }

    },
    // 删除购物车全部产品
    deleteAllCheckedCart({ dispatch, getters }) {
        // context:小仓库,commit:提交mutations修改state,getters:计算属性,dispatch:派发action
        //    获取购物车中全部的产品，数组
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch("deleteCartListBySkuId", item.skuId) : '';
            PromiseAll.push(promise);

        });
        return Promise.all(PromiseAll)
    },
    updateAllCartIsChecked({ dispatch, state }, isChecked) {
        // 数组
        let PromiseAll = [];
        state.cartList[0].cartInfoList.forEach(item => {
            // 派发
            let promise = dispatch("updateCheckedById", { skuId: item.skuId, isChecked })
            PromiseAll.push(promise);
        })
        // 如果都成功，则成功，一个失败就失败
        return Promise.all(PromiseAll);

    }

};
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },

};
export default {
    state,
    mutations,
    actions,
    getters
}