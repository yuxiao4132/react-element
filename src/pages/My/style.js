import styled from 'styled-components';

export const Wrapper = styled.div`
    .login{
        border-top:1px solid #ececec;
        display: flex;
        height:100px;
        background-color: #3190e8;
        align-items: center;
        padding: 0 15px;
        // justify-content: space-around;
    }
    .left{
        display: flex;
        align-items: center;
    }
    .zhuce{
        font-size: 20px;
        color:#fff;
        font-weight: bold;
    }
    .phone{
        font-size: 14px;
        color:#fff;
        margin-top: 5px;
    }
    .right{
        flex:1;
        display: flex;
        justify-content: flex-end;
    }
    .Outline{
        width:58px;
        height:58px;
        border-radius: 50%;
        background-color: #fff;
        margin-right: 10px;
    }
    .adm-space{
        padding: 10px 0;
        display: flex;
    }
    .adm-space>div{
        flex:1;
        text-align:center;
        border-right: 1px solid #f1f1f1;
    }
    .orgin{
        font-weight:bold;
        color: #f90;
    }
    .red{
        font-weight:bold;
        color: #ff5f3e;
    }
    .green{
        font-weight:bold;
        color: #6ac20b;
    }
    .info{
        font-size: 14px;
        color: #333;
        margin-left: 3px;
    }
    .balancetop{
        font-size:30px;
        margin: 10px 0;
    }
    .balancebottom{
        font-size: 14px;
        color: #666;
        font-weight: 400;
    }
    .adm-list{
        border-top:10px solid #f5f5f5;
    }
    .adm-list-item-content-main{
        display:flex;
        justify-content: space-between;
    }
`