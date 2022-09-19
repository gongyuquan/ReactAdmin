/* 
  登录，注册相关接口
*/
import ajax from "./ajax";

// 注册
export const register = (data) => ajax('/register', data, "POST")


// 登录
export const login = (data) => ajax('/login', data, "POST")
