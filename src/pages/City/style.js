import styled from 'styled-components';
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const Login = styled.div`
    display: flex;
    color: #fff;
    font-size: 16px;
    padding: 10px;
    background-color: #3190e8;
    justify-content: space-between;
`
export const Thiscity = styled.div`
    display: flex;
    flex-direction: column;
    .accuracy{
        padding: 10px;
        font-size:18px;
        text-align: center;
        .citycheck{
          color:#ccc;
          font-weight: bold;
        }
    }
    .localhost{
        display: flex;
        font-size:17px;
        border-top: 1px solid #e4e4e4;
        border-bottom: 2px solid #e4e4e4;
        padding: 10px;
        justify-content: space-between;
        span{
            color:#3190e8;
        }
        .right{
            margin-top: 3px;
            color:#999;
        }
    }
`
export const Hotcity = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 10px solid #ececec;
    .hot{
        padding: 10px; 
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
    }
    .city{
        display: flex;
        flex-wrap: wrap;
    }
    .city>div{
        text-align: center;
        line-height:50px;
        width:25%;
        border-bottom: 1px solid #e4e4e4;
        border-right: 1px solid #e4e4e4;
        white-space:nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .hotcity{
        color:#3190e8;
    }
    .allcity{
        color:#333;
    }
`