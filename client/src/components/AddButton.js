import styled from 'styled-components';

const AddButton = styled.button`
   background: rgb(105,105,105, 10%);
   margin:0.5rem 0.5rem;
   color:white;
   font-size: 3rem;
   padding: 0 0.75rem 0 0.75rem;
   border-radius: 100%;
   border: 0.001rem solid grey;
   transition: 0.5s ease-out;
   cursor:pointer;

   &:hover{
       background:grey;
       transform:scale(1.1);
   }
`

export default AddButton;