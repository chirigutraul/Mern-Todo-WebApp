import styled from 'styled-components';

const ScrollableTasks = styled.div`
    position:sticky;
    top:0;
    left:0;
    max-height:15rem;
    background:#363636;
    margin: 0 auto;
    text-align:center;
    overflow-y:auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
     display: none;
    }   

    @media(max-width:40rem){
        max-height:10rem;
    }
    @media(max-height:55rem){
        max-height:10rem;
    }
`

export default ScrollableTasks;