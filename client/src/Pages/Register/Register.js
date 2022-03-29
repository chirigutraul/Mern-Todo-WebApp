import React, { useEffect } from 'react';
import RegisterLogic from './RegisterLogic';

//Importing styled components
import InputText from '../../components/InputText';
import FormButton from '../../components/FormButton';
import RegisterLoginForm from '../../components/RegisterLoginForm';
import StatusMessage from '../../components/StatusMessage';
import FormHeader from '../../components/FormHeader';

function Register(){
    const {email,setEmail,username,setUsername,
    password,setPassword,confirmPassword,setConfirmPassword,registerUser,status, } = RegisterLogic();

    useEffect(()=>{

    },[status]);

    return(<div>

    <RegisterLoginForm>
    <FormHeader>Register form</FormHeader>
    <InputText type="email" placeholder="E-mail" value={email}
    onChange={e=>{setEmail(e.target.value)}}></InputText><br/>
    <InputText type='text' placeholder='Username' value={username}
    onChange={event=>{setUsername(event.target.value)}}></InputText><br/>
    <InputText type='password' placeholder='Password' autoComplete="off" value={password}
    onChange={event=>{setPassword(event.target.value)}}></InputText><br/>
    <InputText type='password' placeholder='Confirm Password' autoComplete="off" value={confirmPassword}
    onChange={event=>{setConfirmPassword(event.target.value)}}></InputText><br/>
    {<StatusMessage>{status}</StatusMessage>}
    <FormButton onClick={registerUser} type="button">
    Register</FormButton>
    </RegisterLoginForm>
    </div>);
  }

  export default Register;