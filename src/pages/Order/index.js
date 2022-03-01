import React from 'react'
import NavHeader from '../../components/NavHeader'
import TabBar from '../../components/TabBar';
import { Wrapper } from './style'
import { List } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import { connect } from 'react-redux';
const BASEIMGURL = 'https://elm.cangdu.org/img/'
const mapStateToProps = state => ({
    shopList: state.shopList
})

class Order extends React.Component {
    back(){
        this.props.history.go(-1)
    }
    rendermask(){

        let shopList = []
        for(let item in this.props.shopList){
            let shopitem = this.props.shopList[item]
              for(let value in shopitem){
                shopList.push(
                <List.Item key={shopitem[value].id + item}>
                    <div className='shopname'>
                        {shopitem[value].name}
                    </div>
                    <div className='shopprice'>
                        <img src={`${BASEIMGURL}${shopitem[value].imgUrl}`}/>
                        <span>共{shopitem[value].count}件</span>
                    </div>
                    <div className='shoplistnumber'>
                        <span>合计￥{shopitem[value].count*shopitem[value].price}</span>
                        <span className='again'>再来一单</span>
                    </div>
                </List.Item>
              )   
            }       
        }
        return shopList.map(item => (
            item
        ))
    }
    render() {
        return (
            <Wrapper>
                <div className='header'>
                    <NavHeader 
                        title='订单'
                        left={<LeftOutline fontSize={24}/>}
                        back={()=>{this.back()}}
                    >
                    </NavHeader>

                </div>
                <List header='全部订单'>
                    {this.rendermask()}
                </List>
                <TabBar></TabBar>
            </Wrapper>
        )
    }
}

export default connect(mapStateToProps)(Order);