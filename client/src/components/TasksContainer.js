import styled from 'styled-components';

const TasksContainer = styled.div`
    position:relative;
    max-width:40%;
    max-height:50vh;
    background:#363636;
    text-align:center;
    padding:5%;
    margin:0vh auto;
    border-radius:2rem;
    border: 0.01rem solid grey;
    overflow-y:auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
     display: none;
    }   

    @media(max-width:60rem){
        max-width:80%;
    }
`

export default TasksContainer;