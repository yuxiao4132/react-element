import React from 'react'
import { TabBar } from 'antd-mobile'
import styled from 'styled-components'
import {
    FileOutline,
    CompassOutline,
    TruckOutline,
    UserOutline,
} from 'antd-mobile-icons'
import { withRouter } from "react-router-dom";
const Wrapper = styled.div`
    .adm-tab-bar-wrap{
        position: fixed;
        z-index: 99;
        left: 0;
        bottom: -2px;
        width: 100%;
        box-shadow: 0 -0.02667rem 0.05333rem rgb(0 0 0 / 10%);
        background-color: #fff;
    }
`;
const tabs = [
    {
      key: 'home',
      title: '外卖',
      icon: <TruckOutline />
    },
    {
      key: 'search',
      title: '搜索',
      icon: <CompassOutline />
    },
    {
      key: 'element/order',
      title: '订单',
      icon: <FileOutline />
    },
    {
      key: 'element/my',
      title: '个人中心',
      icon: <UserOutline />
    },
]
class TabBars extends React.Component{
    renderpathname(){
       const homename = this.props.location.pathname.indexOf('home')
       const searchname = this.props.location.pathname.indexOf('search')
       if(homename!==-1){
           return 'home'
       }else if(searchname!==-1){
           return 'search'
       }else{
           return this.props.location.pathname.slice(1)
       }
    }
    setRouteActive(val){
        // console.log(val)
        if(val=='home' || val=='search'){
            this.props.history.push(`/element/${val}/${this.props.cityinfo}`)
            return
        }
        this.props.history.push(`/${val}`)
    }
    rendertabbar(){
        return <TabBar activeKey={this.renderpathname()} onChange={value => this.setRouteActive(value)}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
    }
    render() {
        return (
            <Wrapper>
                {this.rendertabbar()}
            </Wrapper>
        )
    }
}
export default withRouter(TabBars)
