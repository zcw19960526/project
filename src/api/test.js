import request from '@/utils/request'

// request.get('/db.json').then(resp =>{
//     console.log(resp)
// })


// request({
//     method:'get',
//     url: '/db.json'
// })
export default {
    getList(){
        const req = request({
            method: 'get',
            url: '/test'
        })
        return req
    }
}