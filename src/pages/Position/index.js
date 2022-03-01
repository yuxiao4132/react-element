import React from 'react'
import { Wrapper,Searchinfo } from './style'
import NavHeader from '../../components/NavHeader'
import { SearchBar,Button,List } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import { cityinfo,searchcity } from '../../api/city'
import debounce from "lodash/debounce";
import { ishistoryinfo } from '../../utils/search'
import { connect } from 'react-redux';
import {
    addcityinfo
} from '../../store/actions'
const mapStateToProps = state => ({
    shopList: state.cityinfo
})
const mapDispatchToProps = dispatch => ({
    cityinfo(value) {
       dispatch(addcityinfo(value));
    }
})
class Position extends React.Component {
        state = {
            left:<LeftOutline fontSize={24}/>,
            right:'切换城市',
            title:'',
            searchRef: React.createRef(),
            inputRef: React.createRef(),
            searchlist:[],
            historylist:[],
            val:'',
            input:null
        }
    componentDidMount() {
        let input = document.querySelector('.adm-input')
        this.setState({
            input
        })
        this.getcityinfo()
    }

    async getcityinfo(){
       const data = await cityinfo(this.props.match.params.id)
    //    console.log(data.name)
       this.setState({
        title:data.name
       })
    }

    async search(val,flag){
       const data = await searchcity({
        city_id:this.props.match.params.id,
        keyword:val,
        type:'search'
       })
       if(flag && val!==''){
        // console.log('QQQ')
         this.ishistoryinfo(val)
       }
       this.setState({
        searchlist:data,
        val
       })
    }
    ishistoryinfo(val){
        ishistoryinfo(val,'history',this)
    }

    searchclick(value){
        this.props.cityinfo(value.geohash)
        this.state.input.value = value
        this.props.history.push(`/element/home/${value.geohash}`)
    }

    historyclick(val){
        this.state.input.value = val
        this.search(val,true)
    }

    butclick(){
        this.search(this.state.val,true)
    }
    rendersearch(){
         if(this.state.searchlist.length){
            return this.state.searchlist.map((item,index) => (
                <Searchinfo key={index}>
                    <List.Item onClick={()=>{this.searchclick(item)}}>
                        <div className='name'>{item.name}</div>
                        <div className='address'>{item.address}</div>
                    </List.Item>
                </Searchinfo>
            ))
         }
    }

    renderhistory(){
        const historylist = JSON.parse(localStorage.getItem('history'))
        if(historylist && historylist.length){
        return historylist.map(item => (
            <Searchinfo key={item}>
                <List.Item onClick={()=>{this.historyclick(item)}}>
                    <div className='name'>{item}</div>
                </List.Item>
            </Searchinfo>
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
            return(
               <List header='搜索结果'>
                {this.rendersearch()}
               </List>
            )
        }
    }
    back(){
        this.props.history.go(-1)
    }
    rightclick(){
        this.props.history.push('/city')
    }
    render() {
        return (
            <Wrapper>
                <div className='header'>
                    <NavHeader 
                        title={this.state.title} 
                        left={this.state.left}
                        right={this.state.right}
                        back={()=>{this.back()}}
                        rightclick={()=>{this.rightclick()}}
                    >
                    </NavHeader>
                </div>
                <div className='search'>
                <SearchBar 
                    // value={this.state.val}
                    icon={null}
                    placeholder='请输入学校，商务楼，地址' 
                    ref={this.state.searchRef}
                    onSearch={debounce(val=>{this.search(val,true)},300)}
                    onChange={debounce(val=>{this.search(val,false)},300)}
                    />
                    <Button onClick={()=>{this.butclick()}} block color='primary' size='middle'>
                       提交
                    </Button>
                    {this.rendersorh()}
                </div>
            </Wrapper>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Position);
