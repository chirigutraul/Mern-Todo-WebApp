import React from 'react';
import {useNavigate} from 'react-router-dom';

//IMPORTING STYLED COMPONENTS
import Button from '../../components/Button';
import HomeWelcomeMessage from '../../components/HomeWelcomeMessage';

function Home(){
    const navigate=useNavigate();
    return (<div>
        <HomeWelcomeMessage>Hello, world!</HomeWelcomeMessage>
        <p>
            This is a simple todo list made with React, Node.js, Express.js and MongoDB.<br/>
            You can register and login to create your own todo list. <br/>
            Please take in consideration the fact that this web application was deployed using render.com free tier, so it might take a while to load the first time you visit it. <br/>
        </p>
        <p>
        Make sure you connect with me on <a href='https://www.linkedin.com/in/chirigutraul/'>LinkedIn</a> :)
        </p>
        <Button onClick={()=>{navigate("/register")}}>Register</Button>
        <Button onClick={()=>{navigate("/login")}}>Login</Button>
    </div>);
}

export default Home;