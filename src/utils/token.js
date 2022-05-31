// 对外暴露一个函数
export const setToken = (token) => {
    // 存储
    localStorage.setItem('TOKEN', token);
}
export const getToken = () => {
    // 获取
    return localStorage.getItem('TOKEN')
}
export const removeToken = () => {
    // 获取
    return localStorage.removeItem('TOKEN')
}