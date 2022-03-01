import {request} from '../utils/api'

export const foodshop=params=>{
    return request({
        method:'GET',
        url:'/v4/restaurants',
        params
    })
}

export const shopinfo=params=>{
    return request({
        method:'GET',
        url:'/shopping/v2/menu',
        params
    })
}

export const shopdetailed=params=>{
    return request({
        method:'GET',
        url:`/shopping/restaurant/${params}`
    })
}