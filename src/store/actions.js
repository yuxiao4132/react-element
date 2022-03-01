import {
    ADD_SHOP,
    REDUCE_SHOP,
    CLEAR_SHOP,
    CITY_INFO
} from './constants.js';

export const addShopList = shop => ({
    type: ADD_SHOP,
    shop
});

export const reduceShopList = shop => ({
    type: REDUCE_SHOP,
    shop
});

export const clearShopList = shopid => ({
    type: CLEAR_SHOP,
    shopid
});

export const addcityinfo = city => ({
    type:CITY_INFO,
    city
})