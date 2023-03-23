import styled from 'styled-components';

const AddTask = styled.input.attrs({
    placeholderTextColor:"white",
})`
    font-family:Montserrat;
    background: #363636; 
    font-size:2rem;
    color: rgb(255,255,255,64%);
    border-radius:1rem;
    margin: 0.5rem auto;
    border:1px solid #888888;
    box-shadow: 0 0 0.5rem 0.1rem #363636;
    max-width:60%;
    cursor:pointer;

    @media(max-width:40rem){
        max-width:80%;
    }
`

const AddTaskContainer = styled.div`
   padding:1%;
   background-color:#363636;
   position:sticky;
   bottom:0;
   @media(max-width:40rem){
       max-width:90%;
       margin:0.5rem auto;
   }
   @media(max-width:25rem){
       max-width:100%;
   }
`

export {AddTask, AddTaskContainer}
