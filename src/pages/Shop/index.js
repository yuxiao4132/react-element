import React from 'react'
import NavHeader from '../../components/NavHeader'
import { Modalprices,Modalcheck,Modalname,Wrapper } from './style'
import { LeftOutline,SearchOutline,MoreOutline,TruckOutline,DeleteOutline } from 'antd-mobile-icons'
import { shopinfo,shopdetailed } from '../../api/business'
import { Tabs,SideBar,List,Modal,Mask,Toast } from 'antd-mobile'
import { connect } from 'react-redux';

import {
    addShopList,
    reduceShopList,
    clearShopList
} from '../../store/actions'
const BASEIMGURL = 'https://elm.cangdu.org/img/'
const _ = require('lodash');
const mapStateToProps = state => ({
    shopList: state.shopList
})

const mapDispatchToProps = dispatch => ({
    addshop(shop) {
        console.log(dispatch)
      dispatch(addShopList(shop));
    },
    reduceshop(shop) {
      dispatch(reduceShopList(shop));
    },
    clearshop(shopid) {
      dispatch(clearShopList(shopid))
    }
})

class Shop extends React.Component {
    state = {
        shopinfo:{},
        shoplist:[],
        activeKey:'9196',
        scroll:null,
        foodRef: React.createRef(),
        foodtoplist:[],
        foodidlist:[],
        scrollflag:true,
        timer:null,
        foodid:null,
        price:0,
        shopdetailed:{},
        shopnumber:0,
        visible:false
    }
    back(){
        this.props.history.go(-1)
    }
    
    componentDidMount(){  
        if(this.props.shopList[this.props.match.params.id]){
            let shopflag = Object.keys(this.props.shopList[this.props.match.params.id])
            this.setState({
              shopnumber:shopflag.length
            })
        }
        Toast.show({
            icon: 'loading',
            content: '加载中…',
        })
        this.getshopinfo()
        this.getshopdetailed()
    }
    componentDidUpdate(){
        const foodscroll = document.querySelector('.foodlist')
        foodscroll.addEventListener('scroll',_.throttle(event=>{
            // console.log(foodscroll.scrollTop)
            if(this.state.scrollflag){
                const scrolltop=foodscroll.scrollTop
                for(let item in this.state.foodtoplist){
                    if(scrolltop>this.state.foodtoplist[item] && scrolltop<this.state.foodtoplist[++item]){
                        const flag = this.state.foodtoplist.indexOf(this.state.foodtoplist[--item])
                        const activeKey = this.state.foodidlist[flag]
                        if (this.state.activeKey!=activeKey) {
                            this.setState({
                                activeKey:`${activeKey}`
                            })
                        }
                    }
                }
            }
        },300))
    }
    async getshopinfo(){
        const data = await shopinfo({
            restaurant_id:1
        })
        this.setState({
            shoplist:data,
        })
        const foodlist = document.getElementsByClassName('food')
        const offtop = document.getElementsByClassName('food')[0].offsetTop
        const foodtoplist=[]
        const foodidlist=[]
        for(let item in foodlist){
            if(foodlist[item].offsetTop){
                foodidlist.push(data[item].id)
                foodtoplist.push(foodlist[item].offsetTop-offtop)
            }
        }
        this.setState({
            foodtoplist,
            foodidlist
        })
    }
    async getshopdetailed(){
        const data = await shopdetailed(this.props.match.params.id)
        this.setState({
            shopdetailed:data
        })
        // console.log(this.state.shopdetailed)
    }
    setActiveKey(val){
        clearTimeout(this.state.timer)
        this.state.scrollflag=false
        const foodscroll = document.querySelector('.foodlist')
        const flag = this.state.foodidlist.indexOf(Number(val))
        foodscroll.scrollTop=this.state.foodtoplist[flag]
        // console.log(this.state.foodtoplist[flag])
        // console.log(foodscroll.scrollHeight)
        this.setState({
            activeKey:val
        })
        this.state.timer = setTimeout(() => {
            this.state.scrollflag=true
        }, 500);
    }
    renderheader(value){
        return <div className='listheader'>
            <div>
                <span className='name'>{value.name}</span>
                <span className='description'>{value.description}</span>
            </div>
            <div>
                <span className='righticon'><MoreOutline /></span>
            </div>
        </div>
    }
    activitytext(value){
        if (value) {
            return <span className='image_text'>{value.image_text}</span>
        }else{
            return ''
        }
    }
    specifications(value){
        if (value) {
            return '起'
        }else{
            return ''
        }
    }
    attributes(value){
        if(value.length && value[0]!==null){
            // console.log(value)
            return value.map(item => (
                <span key={item.icon_name}>{item.icon_name}</span>
            ))
        }
    }
    cart_module(value,shop){
        
        // console.log(this.state.foodid)
        if(value.length>1){
            return <p onClick={() =>{
                this.state.foodid=value[0].food_id
                this.state.price=value[0].price
                // this.setState({
                //     foodid:value[0].food_id,
                //     price:value[0].price
                // })
                // console.log(this.state.price)
                Modal.show({
                  content: this.rendermodal(value),
                  closeOnAction: true,
                  showCloseButton: true,
                  //this.shopclick(value,shop)
                  onAction:()=>{this.shopclick(value,shop)},
                  actions: [
                    {
                      key: 'check',
                      text: '加入购物车',
                      primary: true,
                    }
                  ],
                })}} className='guige'>选规格</p>
        }else{
            // console.log(value)
            
            return <p onClick={() => {this.shopclick(value[0],shop)}} className='add'>+</p>
        }
    }
    shopclick(value,shop){
        let shopnumber = this.state.shopnumber
        shopnumber+=1
        this.setState({
            shopnumber
        })
        console.log(value,shop)
        let shopinfo = {
            id:shop._id,
            count:1,
            price:value.price || this.state.price,
            imgUrl:shop.image_path,
            name:shop.name,
            shopid:this.props.match.params.id
            // float_delivery_fee:
        }
        // console.log(shopinfo,value)
        this.props.addshop(shopinfo)
        //console.log(this.props)
    }
    // specs_name(value){
    //     // console.log(value.food_id)
    //     // console.log(this.state.foodid)
    //     if(value.food_id==this.state.foodid){
    //         return 'specs_name'
    //     }
    // }
    nameclick(value){
        const speclist = document.getElementsByClassName('specs')
        const price = document.querySelector('.specsprice')
        price.innerText=value.price
        // console.log(this.state.price)
        // console.log(speclist[0].title,speclist[0].className)
        // this.setState({
        //     price:value.price
        // })
        //this.state.price=value.price
        // console.log(this.state.price)
        this.setState({
            price:value.price
        })
        // console.log(value.price,this.state.price)
        this.state.foodid=value.food_id
        for(let item in speclist){
            if(speclist[item] && speclist[item].className){
                if(speclist[item].title==this.state.foodid){
                    speclist[item].className='specs_name specs'
                }else{
                    speclist[item].className='specs'
                }
            }
        }
    }
    shopprice(){
        let price = 0
        let shopid = this.props.shopList[this.props.match.params.id]
        for(let item in shopid){
            const shop = shopid[item]
            price+=shop.count*shop.price
        }
        // this.setState({})
        return price
    }
    rendermodal(value){
        // console.log(this.props.)
        // console.log(value)
       
        return <div className='modal'>
            <Modalname>
                <span className='modalname'>{value[0].name}</span>
            </Modalname>
            <Modalcheck>
                <p className='guige'>规格</p>
                <p className='check'>
                    {
                       value.map(item => (
                           <span title={item.food_id} onClick={()=>this.nameclick(item)} className={item.food_id==this.state.foodid ? 'specs_name specs':'specs'} key={item.food_id}>{item.specs_name}</span>
                       ))
                    }
                </p>
            </Modalcheck>
            <Modalprices>
                <p><span>价格:</span><span className='specsprice'>{this.state.price}</span></p>
            </Modalprices>
        </div>
    }
    onerror(img){
        // console.log(img)
    }
    renderfoodlist(){
        return this.state.shoplist.map(item => (
            <div className='food' key={item.id}>
                <List header={this.renderheader(item)}>
                        {
                            item.foods.map(item2 => (
                                <List.Item key={item2._id}>
                                    <div className='fooditem'>
                                        <div className='foodimg'>
                                            <img src={`${BASEIMGURL}${item2.image_path}`}/>
                                        </div>
                                        <div className='foodinfo'>
                                            <p className='foodname'>{item2.name}</p>
                                            <p className='fooddescription'>{item2.description}</p>
                                            <div className='sales'>
                                                <span className='month'>月售{item2.month_sales}份</span>
                                                <span>好评率{item2.satisfy_rate}%</span>
                                            </div>
                                            {this.activitytext(item2.activity)}
                                            <div className='price'>
                                                <span className='specfoods'>￥{item2.specfoods[0].price}</span>
                                                <span className='specifications'>{this.specifications(item2.specifications)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='foodadd'>
                                    {/* item2.attributes[0].icon_name */}
                                        <p className='attributes'>{this.attributes(item2.attributes)}</p>
                                        {this.cart_module(item2.specfoods,item2)}
                                    </div>
                                </List.Item>
                            ))
                        }
                </List>
            </div>
        ))
    }
    renderprice(){
        // console.log(this.state.price)
        return this.state.price
    }
    renderminimum(){
        let price = 0
        let shopid = this.props.shopList[this.props.match.params.id]
        for(let item in shopid){
            const shop = shopid[item]
            price+=shop.count*shop.price
        }
        // console.log()
        if(price<this.state.shopdetailed.float_minimum_order_amount){
            return (
                <p className='minimum'>还差￥{this.state.shopdetailed.float_minimum_order_amount-price}起送</p>
            )
        }else{
            return (
                <p className='gominimum'>去结算</p>
            )
        }
    }
    shopcolor(){
        if(this.state.shopnumber!==0){
            return 'shopcar shopcarcolor1'
        }else{
            return 'shopcar shopcarcolor2'
        }
    }
    setVisible(){
        if(this.state.shopnumber!==0){
            this.setState({
                visible:!this.state.visible
            })
        }
    }
    changeshop(flag,value){
        if(flag){
            let shopnumber = this.state.shopnumber
            shopnumber+=1
            this.setState({
                shopnumber
            })
            this.props.addshop(value)
        }else{
            let shopnumber = this.state.shopnumber
            shopnumber-=1
            if(shopnumber===0){
                this.setState({
                    visible:false
                })
            }
            this.setState({
                shopnumber
            })
            // console.log('!!!')
            this.props.reduceshop(value)
        }
    }
    clearshop(){
        // console.log(this.props.match.params.id)
        this.props.clearshop(this.props.match.params.id)
        this.setState({
            visible:false,
            shopnumber:0
        })
    }
    rendermask(){
        let shopList = []
        let shoppid=this.props.shopList[this.props.match.params.id]
        for(let item in shoppid){
            shopList.push(
                <List.Item key={shoppid[item].id}>
                    <div className='shopname'>
                        {shoppid[item].name}
                    </div>
                    <div className='shopnumber'>
                        <div className='shopprice'>
                          ￥{shoppid[item].price}
                        </div>
                        <div className='shoplistnumber'>
                          <span className='reduce' onClick={() => {this.changeshop(false,shoppid[item])}}>-</span>
                          <span className='count'>{shoppid[item].count}</span>
                          <span className='add' onClick={() => {this.changeshop(true,shoppid[item])}}>+</span>
                        </div>
                    </div>
                </List.Item>
            )         
        }
        return (
            <List header='购物车'>
                <div className='empty' onClick={() => {this.clearshop()}}>
                    <span><DeleteOutline /></span>
                    <span>清空</span>
                </div>
                {
                    shopList.map(item => (
                        item
                    ))
                }
            </List>
        )
    }
    render() {
        return (
            <Wrapper>
                <div className='header'>
                {/* {this.props.counter.shopList} */}
                    <NavHeader 
                        title=''
                        left={<LeftOutline fontSize={24}/>}
                        right={<SearchOutline fontSize={24}/>}
                        back={()=>{this.back()}}
                    >
                    </NavHeader>
                </div>
                <Tabs>
                    <Tabs.Tab title='商品' key='shop'>
                        <div className='container'>
                            <div className='content'>
                                <SideBar activeKey={this.state.activeKey} onChange={val=>{this.setActiveKey(val)}}>
                
                                        {this.state.shoplist.map(item => (
                                            <SideBar.Item key={item.id} title={item.name} />
                                        ))}
                                    
                                </SideBar>
                            </div>
                            <div className='foodlist'>
                                {this.renderfoodlist()}
                            </div>
                        </div>
                    </Tabs.Tab>
                    <Tabs.Tab title='评价' key='evaluate'>
                        
                    </Tabs.Tab>
                </Tabs>
                <div className='tabbar'>
                    <div className='distribution'>
                    
                        <div onClick={()=>{this.setVisible()}} className={this.shopcolor()}>
                            {
                                this.state.shopnumber!==0 && <span className='shopcount'>
                                   {this.state.shopnumber}
                                </span>
                            }
                              
                              <TruckOutline />
                        </div>
                        <div className='shopdetailed'>
                            <p className='flotshopprice'><span>￥</span><span>{this.shopprice()}</span></p>
                            <p className='flotdelivery'>配送费￥{this.state.shopdetailed.float_delivery_fee}</p>
                        </div>
                    </div>
                    <div className='delivery'>
                        {this.renderminimum()}
                    </div>
                </div>
                <Mask visible={this.state.visible} onMaskClick={() => this.setVisible()}>
                    {this.rendermask()}
                </Mask>
            </Wrapper>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);