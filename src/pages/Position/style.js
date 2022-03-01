import styled from 'styled-components';
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color:#F5F5F5;
    .search{
        background-color:#fff;
        padding:0 20px;
        margin-top: 10px;
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        .adm-search-bar{
            --background:#fff;
            border: 1px solid #e4e4e4;
            margin:10px 0;
        }
        .adm-input{
            font-size:18px !important;
        }
        button{
            margin:15px 0;
        }
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