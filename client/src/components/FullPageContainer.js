import styled from 'styled-components';

const FullPageContainer= styled.div`
    font-family:Montserrat;
    width:100vw;
    height:100vh;
    overflow-y: auto;
    overflow-x: hidden;
    top:0;
    left:0;
    position:fixed;
    background:#242424;

    &>div>p{
        margin: 4rem 3rem;
        font-family:Montserrat;
        font-size:2rem;
        color:grey;
        line-height:1.6;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
     display: none;
    }   

    @media (max-width:40rem){
        &>div>p{
            font-size:1.3rem;
            line-height:1.4;
            margin:2rem 1.5rem;
        }
    }

`

export default FullPageContainer;