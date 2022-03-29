import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Axios from 'axios';

const LoginLogic = () =>{
    const navigate=useNavigate();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [status,setStatus] = useState();


    const makeRequest = () => {
        Axios.post('/users/login', {
        username: username,
        password: password,
      }).then(response=>{
          if(response.data){
            setTimeout(() => {
              navigate(`/loggeduser/${username}`);
            }, 1000);
            setUsername('');
            setPassword('');
          }
          else setStatus(!response.data);
      })

      }
    

    return {navigate,username,password, setUsername, setPassword, makeRequest, status}
}

export default LoginLogic;