import {useState} from 'react';
import Axios from 'axios';


const RegisterLogic = () => {
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [status,setStatus] = useState('');

    const registerUser = () => { 
    
      Axios.post(`${process.env.REACT_APP_API_URI}/users/register`, {
        username: username,
        password: password,
        email: email,
        tasks:[],
        isLogged:false,
        confirmPassword: confirmPassword
      }).then(response =>{
        setStatus(response.data);
      })

      setEmail('');
      setUsername('');
      setPassword('');
      setConfirmPassword('');

    }

    return {email,setEmail,username,setUsername,
    password,setPassword,confirmPassword,setConfirmPassword,registerUser,status,setStatus};
}

export default RegisterLogic;