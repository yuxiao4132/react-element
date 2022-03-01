import {request} from '../utils/api'

export const getcity=params=>{
    return request({
        method:'GET',
        url:'/v1/cities',
        params
    })
}

export const cityinfo=params=>{
    return request({
        method:'GET',
        url:`/v1/cities/${params}`
    })
}

export const searchcity=params=>{
    return request({
        method:'GET',
        url:'/v1/pois',
        params
    })
}

export const citygeohash=params=>{
    return request({
        method:'GET',
        url:`/v2/pois/${params}`
    })
}
