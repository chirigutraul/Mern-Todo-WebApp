import styled from 'styled-components';

const FormHeader = styled.h1`
    color:#999999;
    font-size:3rem;
    font-weight:500;
    margin:0 auto 2rem auto;

    @media(max-width:50rem){
        font-size:2rem;
    }
    @media(max-width:25rem){
        font-size:1.5rem;
    }
`

export default FormHeader;