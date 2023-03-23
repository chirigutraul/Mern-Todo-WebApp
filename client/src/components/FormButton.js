import styled from 'styled-components';

const FormButton = styled.button`
    font-family:Montserrat;
   background: rgb(105,105,105, 10%);
   color:white;
   font-size: 2rem;
   padding:1rem;
   border-radius:1rem;
   border: 0.001rem solid grey;
   transition: 0.1s ease-out;
   max-width:80%;
   margin: 2rem auto 0rem auto;
    cursor:pointer;

   &:hover{
       background:grey;
       transform:scale(1.1);
   }
`

export default FormButton;