import styled from 'styled-components';

const Navbar = styled.nav`
    ${'' /* Styling the navbar container */}
   position:relative;
   background:#121212;
   padding: 1rem 0;
   top:0;
   left:0;


    ${'' /* Styling the navbar font */}
    &>a {
        font-family:Montserrat;
        font-weight:500;
        font-size:2rem;
        padding: 0rem 3%;
        text-decoration:none;
        color:white;
    }
    &>a:hover{
        color:grey;
    }

    @media (max-width:50rem) {
        &>a{
            font-size:1rem;
            padding:0rem 4%;
        }
        padding:1rem 1%;
    }
    @media (max-width:20rem){
        &>a{
            font-size:0.6rem;
        }
    }
`

export default Navbar;