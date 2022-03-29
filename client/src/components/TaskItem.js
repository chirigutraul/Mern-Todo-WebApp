import styled from 'styled-components';

const TaskItem = styled.li`
    color:#EEE;
    list-style-type:none;
    font-family:Montserrat;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    margin: 1rem auto;
    background: #484848;
    max-width:80%;
    border-radius:1rem;
    box-shadow: 0 0 0.125rem 0.125rem #242424;

    &:hover{
        background-color:#993333;
    }
`

export default TaskItem;