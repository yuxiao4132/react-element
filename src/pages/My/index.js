import React from 'react'
import NavHeader from '../../components/NavHeader'
import TabBar from '../../components/TabBar';
import { Space, List } from 'antd-mobile'
import { LeftOutline,UserCircleOutline,RightOutline,PhonebookOutline } from 'antd-mobile-icons'
import { withRouter } from "react-router-dom";
import { Wrapper } from './style'

class My extends React.Component {
    back(){
        // console.log(this)
        this.props.history.go(-1)
    }
    render() {
        return (
            <Wrapper>
                <div className='header'>
                    <NavHeader 
                        title='我的'
                        left={<LeftOutline fontSize={24}/>}
                        back={()=>{this.back()}}
                    >
                    </NavHeader>
                </div>
                <div className='login'>
                    <div className='left'>
                        <div className='Outline'>
                            <UserCircleOutline color='#ccc' fontSize={58}/>
                        </div>
                        <div>
                            <p className='zhuce'>登录/注册</p>
                            <p className='phone'><PhonebookOutline />暂无绑定手机号</p>
                        </div>
                    </div>
                    <div className='right'>
                        <RightOutline color='#fff'fontSize={14} />
                    </div>
                </div>
                <Space>
                    <div className='balance'>
                        <p className='balancetop orgin'>0.00<span className='info'>元</span></p>
                        <p className='balancebottom'>我的余额</p>
                    </div>
                    <div className='discount'>
                        <p className='balancetop red'>0<span className='info'>个</span></p>
                        <p className='balancebottom'>我的优惠</p>
                    </div>
                    <div className='integral'>
                        <p className='balancetop green'>0<span className='info'>分</span></p>
                        <p className='balancebottom'>我的积分</p>
                    </div>
                </Space>
                <List>
                    <List.Item>
                        <div>我的订单</div>
                        <div>
                            <RightOutline fontSize={14} />
                        </div>
                    </List.Item>
                    <List.Item>
                        <div>积分商城</div>
                        <div>
                            <RightOutline fontSize={14} />
                        </div>
                    </List.Item>
                    <List.Item>
                        <div>饿了么会员卡</div>
                        <div>
                            <RightOutline fontSize={14} />
                        </div>
                    </List.Item>
                </List>
                <List>
                    <List.Item>
                        <div>服务中心</div>
                        <div>
                            <RightOutline fontSize={14} />
                        </div>
                    </List.Item>
                    <List.Item>
                        <div>下载饿了么APP</div>
                        <div>
                            <RightOutline fontSize={14} />
                        </div>
                    </List.Item>
                </List>
                <TabBar></TabBar>
            </Wrapper>
        )
    }
}

export default withRouter(My)