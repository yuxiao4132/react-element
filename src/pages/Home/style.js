import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color:#F5F5F5;
    .header{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        width: 100%;
    }
    .adm-swiper{
        margin-top: 45px;
    }
    .adm-list-body{
        margin-bottom: 50px;
    }
`
export const SwiperDiv = styled.div`
    background-color:#fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .swiperitem{
        margin: 20px;
        text-align: center;
    }
    .swiperitem img{
        width:50px;
        height:50px;
    }
`
export const Header = styled.div`
    font-size:16px;
    span{
        margin-left: 6px;
    }
`
export const ShopList = styled.div`
     display: flex;
     align-content: flex-start;
     img{
         width:70px;
         height:70px;
     }
     .center{
         margin: -2px 0 0 13px;
     }
     .center .shopname{
         margin-left: 5px;
         font-weight: bold;
         font-size:14px;
         text-overflow: ellipsis;
         white-space: nowrap;
         overflow: hidden;
     }
     .center .pingname{
        width: 140px;
        display: flex;
        flex-wrap:nowrap;
     }
     .center .pingfen{
        margin:8px 0;
     }
     .center .pingpai{
         padding: 3px;
         font-size:12px;
         white-space: nowrap;
         font-weight: bold;
         background-color: #ffd930;
     }
     .center .rating{
         font-size:9px;
         margin: 0 5px;
     }
     .center .yueshou{
         font-size:9px;
         color:#666;
     }
     .center .qisong{
         color:#666;
         font-size:9px;
     }
     .right{
        font-size: 9px;
        position: relative;
        flex: 1;
     }
     .right .bzp{
        position: absolute;
        right: 0;
        top: -4px;
     }
     .right .getda{
        position: absolute;
        right: 0;
        top: 30px;
     }
     .right .fengniao{
         color:#fff;
         background-color:#3190e8;
         padding:2px;
         border:1px solid #3190e8;
         border-radius: 3px;
         margin-left: 20px;
     }
     .right .zhunshi{
         color:#3190e8;
         padding:2px;
         border:1px solid #3190e8;
     }
     .right .gongli{
        white-space: nowrap;
        position: absolute;
        right: -10px;
        top: 56px;
     }
     .right .juli{
         color:#999;
     }
     .right .min{
        color:#3190e8;
    }
`