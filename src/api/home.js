import {request} from '../utils/api'

export const homefood=params=>{
    return request({
        method:'GET',
        url:'/v2/index_entry'
    })
}

export const homeshop=params=>{
    return request({
        method:'GET',
        url:'/shopping/restaurants',
        params
    })
}