import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from '@/api';
import { setToken, getToken, removeToken } from '@/utils/token'
const state = {
    code: '',
    token: getToken('TOKEN'),
    userInfo: {}


};
const mutations = {
    GETCODE(state, code) {
        state.code = code;

    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    // 退出登录，清除本地数据,state中的userInfo,token,
    CLEAR(state) {
        state.token = '';
        state.userInfo = {};
        removeToken();

    }


};
const actions = {
    // 获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone)
        if (result.code == 200) {

            commit("GETCODE", result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'))
        }

    },
    // 登录业务【token】
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        // token用户身份唯一id，将来通过token找服务器要用户信息展示
        if (result.code == 200) {
            commit("USERLOGIN", result.data.token);
            // 持久化存储
            setToken(result.data.token)
            return 'ok';


        } else {
            return Promise.reject(new Error('faile'))
        }

    },
    // 登录后获取用户数据
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            commit("GETUSERINFO", result.data)
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 退出登录
    async userLogout({ commit }) {
        // 向服务器发请求清除数据
        let result = await reqLogout();
        // action里面不能操作state,提交mutation修改state
        if (result.code == 200) {
            // 退出登录，清除本地数据,state中的userInfo,token,
            commit("CLEAR")
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'))
        }
    }



};
const getters = {

};
export default {
    state,
    mutations,
    actions,
    getters
}