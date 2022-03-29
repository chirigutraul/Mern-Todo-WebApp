import styled from 'styled-components';

const StatusMessage = styled.h1`
    font-family:Montserrat;
    color:#D3D3D3;
    font-size:3rem;
    font-weight:100;
    text-align:center;
    max-width:40%;
    margin: 2rem auto;

    @media(max-width:75rem){
        max-width:90%;
        font-size:2rem;
    }
`

export default StatusMessage;