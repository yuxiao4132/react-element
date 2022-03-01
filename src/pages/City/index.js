import React from 'react'
import { withRouter } from "react-router-dom";
import { Wrapper,Login,Thiscity,Hotcity } from './style'
import {getcity} from '../../api/city'
import { Toast } from 'antd-mobile'
import { RightOutline } from 'antd-mobile-icons'

class City extends React.Component {
    state = {
        thiscity:'',
        hotcity:[],
        allcity:[],
        flag:false
    }
    componentDidMount() {
         this.allcity()
         this.thiscity()
         this.hotcity()
    }
    componentDidUpdate() {
        if(!this.state.flag && this.state.allcity['A']){
            Toast.show({
                icon: 'success',
                content: '加载完毕',
            })
            this.state.flag=true
        }
    }
    cityClick(value){
        this.props.history.push(`/position/${value}`)
    }

    renderHotCity(){
        if(this.state.hotcity.length==0) return
        return this.state.hotcity.map(item => (
             <div onClick={()=>{this.cityClick(item.id)}} key={item.pinyin}>{item.name}</div>
        ))
    }
    rendersort(flag){
        if(flag==='A'){
            return <span>按字母排序</span>
        }
    }
    AllCity(){
        const alllist=this.state.allcity
        if(!alllist['A']) return
        const allcity=[]
        for(let item in alllist){
            allcity.push(<Hotcity key={item}>
                <div className='hot'>
                    <span>{item}</span>
                    {this.rendersort(item)}
                </div>
                <div className='city allcity'>
                    {alllist[item].map(item => (
                    <div onClick={()=>{this.cityClick(item.id)}} key={item.id}>{item.name}</div>
                    ))
                    }
                </div>
            </Hotcity>)
        }
       
        return allcity.map(item => (
            item
        ))
        
    }
    async thiscity() {
        const data = await getcity({
            type:'guess'
        }) 
        this.setState({
            thiscity: data
        })
    }
    async hotcity() {
        const data = await getcity({
            type:'hot'
        })
        this.setState({
            hotcity: data
        })
        // console.log(data)
    }
    async allcity() {
        Toast.show({
            icon: 'loading',
            content: '加载中…',
        })
        const data = await getcity({
            type:'group'
        })
        const allcity = []
        for(let i=65;i<=90;i++){
          if(data[String.fromCharCode(i)]){
            allcity[String.fromCharCode(i)]=data[String.fromCharCode(i)]
          }
        }
        this.setState({
            allcity
        })
        // console.log(data)
    }
    renderthiscity(val){
        // console.log('!!!')
        if(val){
            return <div onClick={()=>{this.cityClick(val.id)}} className='localhost'>
            <span className='thiscity'>{val.name}</span>
            <div className='right'>
                <RightOutline/>
            </div>
        </div>
        }else{
            return <div className='localhost'>
            <span className='thiscity'>当前定位不到你的城市,请手动选择</span>
            <div className='right'>
                <RightOutline/>
            </div>
        </div>
        }
    }
    render() {
        return (
            <Wrapper>
               <Login>
                   <p>ele.me</p>
                   <p>登录|注册</p>
               </Login>
               <Thiscity>
                   <div className='accuracy'>
                       <span>当前定位城市:</span>
                       <span className='citycheck'>定位不准时,请在城市列表中选择</span>
                   </div>
                   {
                       this.renderthiscity(this.state.thiscity)
                   }
               </Thiscity>
               <Hotcity>
                 <div className='hot'>热门城市</div>
                 <div className='city hotcity'>
                   {this.renderHotCity()}
                 </div>
               </Hotcity>
               {this.AllCity()}
            </Wrapper>
        )
    }
}
export default withRouter(City)