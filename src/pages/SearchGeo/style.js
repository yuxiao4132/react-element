import styled from 'styled-components';
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
background-color:#F5F5F5;
.search{
    display: flex;
    background-color:#fff;
    padding:0 20px;
    align-items: center;
    justify-content: space-around;
}
    .adm-button{
        height:32px;
    }
    .adm-search-bar{
        --background:#fff;
        border-radius: 2px;
        margin:15px 0;
    }
    .adm-search-bar-input-box{
        background-color: #f2f2f2;
        border: 1px solid #e4e4e4;
        padding: 0 10px
    }
    }
    .adm-input{
        font-size:18px !important;
    }
    .clear{
        background-color: #fff;
        color: #3190e8;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        height:50px;
        line-height:50px;
        border-bottom: 1px solid #e4e4e4;
    }
}
.adm-list-body-inner{
    margin-bottom: 50px
}
`
export const Searchinfo = styled.div`
    .name{
        font-size:16px;
    }
    .address{
        font-size:13px;
        color:#999;
    }
`
export const Food = styled.div`
    display: flex;
    .foodimg img{
    width:50px;
    height:50px
    }
    .foodinfo{
        margin-left: 20px;
        color:#333;
        font-size:14px;
    }
    .sale{
        margin:3px 0;
    }
`