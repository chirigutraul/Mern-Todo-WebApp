import React from 'react';
import LoginLogic from "./Loginlogic";

// importing styled components
import RegisterLoginForm from "../../components/RegisterLoginForm";
import InputText from "../../components/InputText";
import FormButton from "../../components/FormButton";
import StatusMessage from "../../components/StatusMessage";
import FormHeader from "../../components/FormHeader";
// end of styled components


function Login(){
    const {username,password,setUsername,setPassword,makeRequest,status} = LoginLogic();


    return(
    <div>
    <RegisterLoginForm>
      <FormHeader>Login page</FormHeader>
      <InputText type="text" placeholder="Username" value={username}
      onChange={e=>{setUsername(e.target.value)}}></InputText><br/>
      <InputText type="password" placeholder="Password" value={password}
      onChange={e=>{setPassword(e.target.value)}} autoComplete="off"></InputText><br/>
      {status && <StatusMessage>Wrong username or password.</StatusMessage>}
      <FormButton type="submit" 
      onClick={(e)=>{
        e.preventDefault();
        makeRequest();
        }}>Login</FormButton>
    </RegisterLoginForm> 
    </div>);
  }

  export default Login;