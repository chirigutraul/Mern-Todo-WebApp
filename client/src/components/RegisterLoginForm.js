import styled from 'styled-components';

const RegisterLoginForm = styled.form`
    max-width:40%;
    background:#121212;
    text-align:center;
    padding:5%;
    margin:10vh auto;
    border-radius:2rem;
    border: 0.01rem solid grey;

    @media(max-width:60rem){
        max-width:80%;
        margin:5vh auto;
        padding:5%;
    }
`

export default RegisterLoginForm;