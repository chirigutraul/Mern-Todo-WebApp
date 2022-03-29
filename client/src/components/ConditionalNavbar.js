import React from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import LoggedUserLogic from '../Pages/LoggedUser/LoggedUserLogic';

function ConditionalNavbar (props) {
  const {logOut} = LoggedUserLogic();

    return (<Navbar>
    <Link to="/">Home</Link>
    <Link to="/register">Register</Link>

    {props.user.isLogged && <Link to={`/loggeduser/${props.user.username}`}>Tasks</Link>}

    {props.user.isLogged ?
    
     <Link to="/login" onClick={(e)=>{
       logOut(e, props.user);
       setTimeout(() => {
          window.location.reload(true);
       },100)
     }}>
     Logout</Link>

    : <Link to="/login">Login</Link>}
  </Navbar>);
}

export default ConditionalNavbar;