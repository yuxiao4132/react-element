import React from 'react'
import NavHeader from '../../components/NavHeader'
import TabBar from '../../components/TabBar';
import { foodshop } from '../../api/business'
import { withRouter } from "react-router-dom";
import { SearchBar,Button,List,Modal,Toast } from 'antd-mobile'
import { LeftOutline,CloseOutline,AlipaySquareFill } from 'antd-mobile-icons'
import { Wrapper,Searchinfo,Food } from './style'
import debounce from "lodash/debounce";
import { connect } from 'react-redux';
import { ishistoryinfo } from '../../utils/search'
const BASEIMGURL = 'https://elm.cangdu.org/img/'
const mapStateToProps = state => ({
    cityinfo: state.cityinfo
})

class SearchGeo extends React.Component {
    state = {
        val:'',
        searchlist:[],
        historylist:JSON.parse(localStorage.getItem('foodlist')),
        searchRef: React.createRef(),
        child:null
        // node:ReactDOM.findDOMNode(this)
    }
    back(){
        // console.log(this)
        this.props.history.go(-1)
    }
    componentDidUpdate(){
    //    console.log('???')
    }
    async search(val,flag){
        const data = await foodshop({
         geohash:this.props.cityinfo,
         keyword:val
        })
        if(flag && val!==''){
            // console.log(val)
          this.ishistoryinfo(val)
        }
        this.setState({
         searchlist:data,
         val
        })
         console.log(data)
     }

    ishistoryinfo(val){
        ishistoryinfo(val,'foodlist',this,'')
    }

    searchclick(value){
        this.props.history.push(`/shop/${this.props.cityinfo}/${value.id}`)
    }
    historyclick(val){
        this.search(val,true)
    }
    spliceclick(value){
        const historylist = this.state.historylist
        const flag = historylist.indexOf(value)
        historylist.splice(flag,1)
        this.setState({
            historylist
        })
        localStorage.setItem('foodlist',JSON.stringify(historylist))
        
    }
    async clearclick(){
        const result = await Modal.confirm({
            content: '确定清空吗?',
          })
          if (result) {
             this.setState({
                historylist:[]
              })
             localStorage.removeItem('foodlist')
            Toast.show({ content: '清除成功', position: 'center' })
          } else {
            // Toast.show({ content: '', position: 'bottom' })
        }
    }
    renderhistory(){
        // console.log(this.state.historylist)
        // const historylist = JSON.parse(localStorage.getItem('foodlist'))
        if(this.state.historylist && this.state.historylist.length){
        return this.state.historylist.map(item => (
            <Searchinfo key={item}>
                <List.Item arrow={<CloseOutline onClick={()=>{this.spliceclick(item)}}/>}>
                    <div className='name' onClick={()=>{this.historyclick(item)}}>{item}</div>
                </List.Item>
            </Searchinfo>
          ))
        }
    }

    rendersearch(){
        if(this.state.searchlist.length){
           return this.state.searchlist.map(item => (
                   <List.Item key={item.id} onClick={()=>{this.searchclick(item)}}>
                       <Food>
                       <div className='foodimg'>
                           <img src={`${BASEIMGURL}${item.image_path}`}></img>
                        </div>
                       <div className='foodinfo'>
                           <div>
                               <span>{item.name}</span>
                               <AlipaySquareFill color='#76c6b8' fontSize={24}/>
                           </div>
                           <p className='sale'>月售{item.recent_order_num}单</p>
                           <p>{item.float_minimum_order_amount}元起送/距离{item.distance}</p>
                        </div>
                        </Food>
                   </List.Item>
           ))
        }
   }
    rendersorh(){
        if(!this.state.val){
            return(
               <List header='搜索历史'>
                  {this.renderhistory()}
               </List>
            )
        }else{
            // console.log(this.state.val)
            return(
               <List header='商家'>
                {this.rendersearch()}
               </List>
            )
        }
    }
    renderclear(){
        // console.log(this.state.historylist)
        if(this.state.historylist && this.state.historylist.length && this.state.val===''){
            // console.log("???")
            return <div className='clear' onClick={()=>{this.clearclick()}}>清空搜索历史</div>
        }else{
            return ''
        }
    }
    render() {
        return (
            <Wrapper>
                <div className='header'>
                    <NavHeader 
                        title='搜索'
                        left={<LeftOutline fontSize={12}/>}
                        back={()=>{this.back()}}
                    >
                    </NavHeader>
                </div>
                <div className='search'>
                <SearchBar 
                //    value={this.state.val}
                   icon={null}
                   ref={this.state.searchRef}
                   placeholder='请输入商家或美食名称' 
                   onSearch={debounce(val=>{this.search(val,true)},300)}
                   onChange={debounce(val=>{this.search(val,false)},300)}
                    />
                    <Button size='small' color='primary'>提交</Button>
                </div>
                <TabBar></TabBar>
                {this.rendersorh()}
                {this.renderclear()}
            </Wrapper>
        )
    }
}

export default connect(mapStateToProps)(SearchGeo);