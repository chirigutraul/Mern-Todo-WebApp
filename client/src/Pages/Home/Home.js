import React from 'react';
import {useNavigate} from 'react-router-dom';

//IMPORTING STYLED COMPONENTS
import Button from '../../components/Button';
import HomeWelcomeMessage from '../../components/HomeWelcomeMessage';

function Home(){
    const navigate=useNavigate();
    return (<div>
        <HomeWelcomeMessage>This is the home page!</HomeWelcomeMessage>
        <p>
        Human is behind a closed door, emergency! abandoned! meeooowwww!!! <br/>
        cats are cute pounce on unsuspecting person, but get poop stuck in <br/>
        paws jumping out of litter box and run around the house scream meowing <br/>
        and smearing hot cat mud all over. Sleep intently sniff hand, yet attack <br/>
        curtains but bird bird bird bird bird bird human why take bird out i could <br/>
        </p>
        <Button onClick={()=>{navigate("/register")}}>Register</Button>
        <Button onClick={()=>{navigate("/login")}}>Login</Button>
    </div>);
}

export default Home;