import styled from 'styled-components';

const ScrollableTasks = styled.div`
    position:sticky;
    top:0;
    left:0;
    height:35vh;
    background:#363636;
    margin: 0 auto;
    text-align:center;
    overflow-y:auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
     display: none;
    }   
`

export default ScrollableTasks;