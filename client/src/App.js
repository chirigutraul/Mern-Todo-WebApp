import React,{useState} from 'react';
import {Routes, Route} from 'react-router-dom';

// PAGES IMPORTED
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import LoggedUser from "./Pages/LoggedUser/LoggedUser";
import ErrorPage from './Pages/ErrorPage/ErrorPage';
// STYLED COMPONENTS
import ConditionalNavbar from './components/ConditionalNavbar';
import FullPageContainer from './components/FullPageContainer';
import StyledFooter from './components/Footer';


function App(){

  const [userLoggedIn,setUser] = useState({});

  const changeUser = (loggedUser) => {
    setUser(loggedUser);
  }

  return(
    <FullPageContainer>
    <ConditionalNavbar user={userLoggedIn}/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/loggeduser/:username" 
          element={<LoggedUser user={loggedUser => changeUser(loggedUser)}/>}/>
          <Route path="*" element={<ErrorPage />} />          
      </Routes>
      <StyledFooter>Chirigut Raul © 2022 {process.env.REACT_APP_API_URI}</StyledFooter>
    </FullPageContainer> 
  );
  
}

export default App;