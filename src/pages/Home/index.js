import React from 'react'
import NavHeader from '../../components/NavHeader'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Wrapper,SwiperDiv,Header,ShopList } from './style'
import { Swiper,List,Rate,Toast } from 'antd-mobile'
import { SearchOutline,EnvironmentOutline } from 'antd-mobile-icons'
import { citygeohash } from '../../api/city'
import { homefood,homeshop } from '../../api/home'
import mitt from 'mitt'
const emitter = mitt()
// @bindLifecycle
const BASEIMGURL = 'https://fuss10.elemecdn.com/'
const BASEIMGURL2 = 'https://elm.cangdu.org/img/'
const mapStateToProps = state => ({
    cityinfo: state.cityinfo
})
class Home extends React.Component {
    state = {
        geohash:{},
        swiperfoodlist1:[],
        swiperfoodlist2:[],
        homeshoplist:[],
        offset:0
    }

    componentDidMount() {
        this.getcitygeohash()
        this.gethomefood()
        this.gethomeshop()
    }
    
    
    async getcitygeohash() {
        const data = await citygeohash(this.props.match.params.id)
        this.setState({
            geohash:data
        })
    }

    async gethomefood(){
        const data = await homefood()
        for(let index in data){
            if (index<=(data.length/2-1)) {
                this.state.swiperfoodlist1.push(data[index])
            }else{
                this.state.swiperfoodlist2.push(data[index])
            }
        }
         //console.log(this.state.swiperfoodlist1,this.state.swiperfoodlist2)
    }

    async gethomeshop(){
        Toast.show({
            icon: 'loading',
            content: '加载中…',
        })
        const geohash = this.props.match.params.id.split(',');
        // console.log(geohash)
        const data = await homeshop({
            latitude:geohash[0],
            longitude:geohash[1],
            order_by:5,
            limit:40
        })
        this.state.offset+=20
        const homeshoplist = this.state.homeshoplist
        homeshoplist.push(...data)
        // console.log(homeshoplist)
        this.setState({
            homeshoplist
        })
        Toast.show({
            icon: 'success',
            content: '加载完毕',
        })
        // this.state.homeshoplist.push(...data)
        // console.log(this.state.homeshoplist)
    }
    renderswiper1(){
       return <Swiper.Item key={1}>
           <SwiperDiv>
            {
              this.state.swiperfoodlist1.map(item => (
                <div className='swiperitem' key={item.id}>
                    <div>
                        <img src={`${BASEIMGURL}${item.image_url}`}></img>
                    </div>
                    <div className='title'>
                        <p>{item.title}</p>
                    </div>
                </div>
              ))
            }
            </SwiperDiv>
       </Swiper.Item>
    }

    renderswiper2(){
        return <Swiper.Item key={2}>
        <SwiperDiv>
         {
           this.state.swiperfoodlist2.map(item => (
             <div className='swiperitem' key={item.id}>
                 <div>
                     <img src={`${BASEIMGURL}${item.image_url}`}></img>
                 </div>
                 <div className='title'>
                     <p>{item.title}</p>
                 </div>
             </div>
           ))
         }
         </SwiperDiv>
    </Swiper.Item>
    }
    renderheader(){
        return <Header>
            <EnvironmentOutline />
            <span style={{marginLeft:'5px'}}>附近商家</span>
        </Header>
    }

    rendersupports(value){
        return value.map(item => (
            <i  style={{margin:'0 1px',border:'1px solid #f1f1f1'}} key={item._id}>{item.icon_name}</i>
        ))
    }
    rendersupports2(value){
        if(value.delivery_mode){
            return <span className='fengniao'>{value.delivery_mode.text}</span>
        }else{
            return ''
        }
    }
    rendersupports3(value){
        if(value.supports[1]){
            return <span className='zhunshi'>{value.supports[1].name}</span>
        }else{
            return ''
        }
        
    }
    renderhomeshop(){
        // console.log(this.state.homeshoplist)
        if(this.state.homeshoplist.length){
            return this.state.homeshoplist.map(item => (
                <List.Item onClick={()=>{this.shopclick(item)}} key={item.image_path}>
                    <ShopList>
                    <div className='left'>
                        <img src={`${BASEIMGURL2}${item.image_path}`}></img>
                    </div>
                    <div className='center'>
                        <div className='pingname'>
                            <span className='pingpai'>品牌</span>
                            <span className='shopname'>{item.name}</span>
                        </div>
                        <div className='pingfen'>
                            <Rate 
                            readOnly  
                            allowHalf 
                            defaultValue={item.rating} 
                            style={{
                                '--star-size': '10px',
                              }}/>
                            <span className='rating'>{item.rating}</span>
                            <span className='yueshou'>月售{item.recent_order_num}单</span>
                        </div>
                        <div className='qisong'>
                            <span className='gongli'>￥{item.float_minimum_order_amount}起送</span>
                            <span style={{margin:'0 3px'}}>/</span>
                            <span className='min'>配送费约￥{item.float_delivery_fee}</span>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='bzp'>
                            <span>
                                {this.rendersupports(item.supports)}
                            </span>
                        </div>
                        <div className='getda'>
                            {this.rendersupports2(item)}
                            {this.rendersupports3(item)}
                        </div>
                        <div className='gongli'>
                            <span className='juli'>{item.distance}</span>
                            <span style={{margin:'0 2px'}}>/</span>
                            <span className='min'>{item.order_lead_time}</span>
                        </div>
                    </div>
                    </ShopList>
                </List.Item>
            ))
        }
    }
    back(){
        this.props.history.push(`/element/search/${localStorage.getItem('cityid')}`)
    }
    rightclick(){
        this.props.history.push('/login')
    }
    shopclick(val){
        this.props.history.push(`/shop/${this.props.cityinfo}/${val.id}`)
    }
    render() {
        return (
            <Wrapper>
                <div className='header'>
                    <NavHeader 
                        title={this.state.geohash.name}
                        left={<SearchOutline fontSize={24}/>}
                        right='登录|注册'
                        back={()=>{this.back()}}
                        rightclick={()=>{this.rightclick()}}
                    >
                    </NavHeader>
                </div>
                <div className='wrapper'>
                    <Swiper autoplay loop>
                        {this.renderswiper1()}
                        {this.renderswiper2()}
                    </Swiper>
                    <List header={this.renderheader()}>
                        {this.renderhomeshop()}
                    </List>
                </div>
            </Wrapper>
        )
    }
}

export default connect(mapStateToProps)(Home);