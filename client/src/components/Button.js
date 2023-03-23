import styled from 'styled-components';

const Button = styled.button`
    font-family:Montserrat;
   background: rgb(105,105,105, 10%);
   color:white;
   font-size: 3rem;
   padding:1rem;
   margin: 2rem 0rem 2rem 3rem;
   border-radius:1rem;
   border: 0.001rem solid grey;
   transition: 0.2s ease-out;
   max-width:80%;
   cursor:pointer;

   &:hover{
       background:grey;
       transform:scale(1.1);
   }

   @media(max-width:40rem){
       font-size:1.5rem;
       margin: 1rem 0 1rem 3.5rem;
   }
`

export default Button;