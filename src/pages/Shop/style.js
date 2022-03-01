import styled from 'styled-components';
export const Wrapper = styled.div`
    .adm-tabs-content{
        padding:0;
    }
    .adm-modal-main {
        font-size:18px;
    }
    .container{
        display: flex;
    }
    .content{
        height: 100vh;
    }
    .foodlist{
        height: 100vh;
        overflow-y: auto;
    }
    div::-webkit-scrollbar {
        width: 0;
    }
    .adm-list-item-content{
        // height:800px;
    }
    .adm-list-header{
        margin: 0; 
        padding: 15px 10px;
        background-color: #f5f5f5;
    }
    .adm-tabs-header{
        padding: 8px 0;
    }
    .adm-badge-wrap{
        padding: 10px 0;
    }
    .listheader{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .listheader .name{
        font-size:17px;
        color: #666;
        font-weight: bold;
    }
    .listheader .description{
        font-size:13px;
        margin-left: 10px
    }
    .listheader .righticon{
        font-size:20px;
    }
    .foodimg img{
        width:50px;
        height:50px;
    }
    .fooditem{
        display: flex;
    }
    .foodinfo{
        margin-left: 10px
    }
    .foodinfo .foodname{
        font-weight: bold;
    }
    .foodinfo  .fooddescription{
        color: #999;
        margin:6px 0;
        font-size:13px;
    }
    .foodinfo .sales{
        color:#333;
        font-size:13px;
    }
    .foodinfo .sales .month{
        margin-right: 10px
    }
    .foodinfo .image_text{
        color: rgb(241, 136, 79);
        border-color: rgb(240, 115, 115);
        border:1px solid;
        font-size:8px;
        border-radius: 8px;
        margin:5px 0;
        display: inline-block;
    }

    .foodinfo .price{
        margin-top:3px;
    }
    .foodinfo .price .specfoods{
        color:#f60;
        font-size:18px;
    }
    .foodinfo .price .specifications{
        margin-left:5px;
        color:#333;
        font-size:13px;
    }
    .adm-list-item-content-main{
        display:flex;
    }
    .foodadd{
        flex:1;
        display:flex;
        flex-direction:column;
        align-items: flex-end;
        justify-content: space-between;
        margin-right:5px;
    }
    .foodadd .attributes>span{
        color: rgb(240, 115, 115);
        padding:0 1px;
        border-color: rgb(240, 115, 115);
        border:1px solid;
        border-radius: 5px;
        font-size:12px;
        margin:0 3px;
    }
    .guige{
        font-size:13px;
        padding:3px 5px;
        border-radius: 6px;
        background-color: #3190e8;
        color:#fff;
    }
    .add{
        border: 2px solid #3190e8;
        color: #fff;
        border-radius: 50%;
        text-align: center;
        height: 25px;
        width: 25px;
        display: inline-block;
        background-color:#3190e8;
    } 
    .reduce{
        border: 2px solid #3190e8;
        color: #3190e8;
        border-radius: 50%;
        text-align: center;
        height: 25px;
        width: 25px;
        display: inline-block;
    }
    .count{
        margin:0 10px;
    }
    .tabbar{
        z-index: 9999;
        height:50px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #3d3d3f;
        color: #FFF;
        display: flex;
        justify-content: space-between;
    }
    .distribution{
        display: flex;
    }
    .shopcar{
        color: #fff;
        font-size: 35px;
        border-radius: 50%;
        padding: 0 8px;
        line-height: 50px;
        margin-right: 15px;
        margin-left: 10px;
        position: relative;
        top: -18px;
        border: 3px solid #000;
        height: 55px;
    }
    .shopcarcolor1{
        background-color: #3190e8;
    }
    .shopcarcolor2{
        background-color: #3d3d3f;
    }

    .flotshopprice{
        font-size:20px;
        font-weight: bold;
    }
    .flotshopprice span:first-child{
        margin-right: 5px;
    }
    .flotdelivery{
        margin-top: 3px;;
    }
    .gominimum{
        background-color:#4cd964;
        height:100%;
        width:120px;
        line-height:50px;
        text-align: center;
        font-size:18px;
        font-weight: bold;
    }
    .minimum{
        background-color:#535356;
        height:100%;
        width:120px;
        line-height:50px;
        text-align: center;
        font-size:18px;
        font-weight: bold;
    }
    .adm-mask-content{
        z-index: 1;
        position: fixed;
        width: 100%;
        bottom: 50px;
    }
    .adm-list-header{
        position: relative;
    }
    .empty{
        font-size: 15px;
        position: absolute;
        top: 15px;
        right: 10px;
    }
    .empty span:first-child{
        margin-right: 5px;
    }
    .adm-list-item-content-main{
        justify-content: space-between;
        align-items: center;
    }
    .shopname{
        color: #666;
        font-weight: bold;
    }
    .shopnumber{
        display:flex;
    }
    .shopprice{
        color: #f60;
        margin-right: 30px;
        font-weight: bold;
        font-size: 20px;
    }
    .shopcount{
        position: absolute;
        font-size: 16px;
        right: -5px;
        top: -10px;
        background-color: #ff461d;
        border-radius: 50%;
        padding: 0 5px;
        height: 20px;
        line-height: 22px;
    }
`
export const Modalname = styled.div`
    text-align: center;
    font-size: 20px;
`

export const Modalcheck = styled.div`
    font-size:16px;
    .guige{
        padding:15px 0 15px 0;
    }
    .check{
        margin-bottom: 30px;
    }
    .check span{
        margin: 0 5px;
        padding:8px;
        border-radius: 5px;
    }
    .check .specs_name{
        color:#3190e8;
        display: inline-block;
        margin: 10px 0;
        border:1px solid #3190e8;
    }
    .modalprice{
        font-size:20px;
    }
`
export const Modalprices = styled.div`
    font-size:18px;
    .specsprice{
        color:rgb(240, 115, 115);
        font-weight: bold;
    }
`