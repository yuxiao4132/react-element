import {
    ADD_SHOP,
    REDUCE_SHOP,
    CLEAR_SHOP,
    CITY_INFO
} from './constants.js';
const defaultState = {
    shopList: {},
    cityinfo:''
};
function reducer(state = defaultState, action) {
    switch (action.type) {
      case ADD_SHOP:
        if(state.shopList[action.shop.shopid]){
          if(state.shopList[action.shop.shopid][action.shop.id]){
           const shoplist = {...state.shopList}
           shoplist[action.shop.shopid][action.shop.id].count+=1
           return {...state,shopList:shoplist}
          }else{
            const shoplist = {...state.shopList}
            shoplist[action.shop.shopid][action.shop.id]=action.shop
            return {...state,shopList:shoplist}
          }
        }else{
          const shoplist = {...state.shopList}
          shoplist[action.shop.shopid]={}
          shoplist[action.shop.shopid][action.shop.id]=action.shop
          return {...state,shopList:shoplist}
        }
      case REDUCE_SHOP:
        const reduceshop = {...state.shopList}
        let count = reduceshop[action.shop.shopid][action.shop.id].count
        count-=1
        if(count===0){
          delete reduceshop[action.shop.shopid][action.shop.id]
          return {...state,shopList:reduceshop}
        }else{
          reduceshop[action.shop.shopid][action.shop.id].count-=1
          return {...state,shopList:reduceshop}
        }
      case CLEAR_SHOP:
        // console.log(clearshop[action.shopid])
        // const shoplist = {}
        let clearshop = {...state.shopList}
        console.log(action)
        clearshop[action.shopid]=null
        return {...state,shopList:clearshop}
      case CITY_INFO:
        let city = {...state}
        city.cityinfo = action.city
        return {...state,cityinfo:city.cityinfo}
      default:
        return state;
    }
}
export default reducer;