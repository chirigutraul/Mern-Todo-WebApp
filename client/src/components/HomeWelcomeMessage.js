import styled from 'styled-components';

const StatusMessage = styled.h1`
    font-family:Montserrat;
    color:#D3D3D3;
    font-size:4rem;
    font-weight:100;
    margin: 2rem 3rem;
    
    @media(max-width:50rem){
        font-size:2.5rem;
        text-align:center;
        margin:1rem auto;
    }
`

export default StatusMessage;