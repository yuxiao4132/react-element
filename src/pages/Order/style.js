import styled from 'styled-components';
export const Wrapper = styled.div`
    height:100vh;
    .header{
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
    }
    .shopname{
        font-size:20px;
        font-weight:bold;
    }
    .shopprice{
        display:flex;
        margin: 10px 0;
        justify-content: space-between;
        align-items:center;
        img{
            width:70px;
            height:70px;
        }
    }
    .shoplistnumber{
        display:flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .again{
        background-color: #3190e8;
        padding:5px 10px;
        border-radius: 10px;
        font-size:15px;
        margin-top:10px;
    }
    .adm-list{
        margin-top: 65px;
    }
    .adm-list-body-inner{
        margin-bottom: 50px;
    }
`