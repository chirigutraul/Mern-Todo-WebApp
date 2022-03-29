import styled from 'styled-components';

const ErrorMessage = styled.h1 `
    font-size:3rem;
    padding:2% 2% 0.1% 2%;
    font-family:Montserrat;
    font-weight:100;
`

const ErrorContainer = styled.div`
    margin:0 auto;
    background-color: #FFCCCC;
    max-width:40em;
    border-radius:1rem;
    text-align:center;
    box-shadow: 0rem 0rem 1rem 0.01rem grey;
`

const ErrorParagraph = styled.p`
    font-size:2rem;
    font-family:Montserrat;
    padding:1%;
`
export {ErrorMessage, ErrorContainer, ErrorParagraph}