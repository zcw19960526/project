// //权限校验
// import router from './router'
// import {getUserInfo} from './api/login';




// router.beforeEach((to,from,next) =>{
//     //1.获取token
//     //如果没有去登录
//     const token = localStorage.getItem('usertoken')

   
//     if(!token){
//         if(to.path != '/login'){
//             next({path: '/login'})
//         }else {
//             next()
//         }
//     }else if(token){
        
//     }else {
//         if(to.path === '/login') {
//             next()
//         }else {
//             const userinfo = localStorage.getItem("userinfo")
//             if(userinfo){
//                 next()
//             }else {
//                 getUserInfo(token).then( resp =>{
//                     if (resp.data.data.flag){
//                         //保存到本地
//                         localStorage.setItem('userinfo',JSON.stringify(resp.data.data))
//                         next()
//                     }else {
//                         next({path:  '/login'})
//                     }
//                 })
//             }
//         }
//     }
// })