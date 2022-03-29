import styled from 'styled-components';

const InputText = styled.input.attrs({
    placeholderTextColor:"white",
})`
    background: #363636; 
    font-size:2rem;
    font-family:Montserrat;
    color: rgb(255,255,255,64%);
    border-radius:1rem;
    margin: 0.5rem auto;
    border:1px solid #888888;
    box-shadow: 0 0 0.5rem 0.1rem #363636;
    max-width:80%;
`

export default InputText;
