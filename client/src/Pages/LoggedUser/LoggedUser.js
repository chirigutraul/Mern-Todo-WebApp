import React,{useEffect} from 'react'
import Axios from 'axios';
import LoggedUserLogic from './LoggedUserLogic';

// importing styled components
import {AddTask,AddTaskContainer} from '../../components/AddTask';
import AddButton from '../../components/AddButton';
import TaskItem from '../../components/TaskItem';
import TasksContainer from '../../components/TasksContainer';
import FormHeader from '../../components/FormHeader';
import ScrollableTasks from '../../components/ScrollableTasks';
import UserWelcomeMessage from '../../components/UserWelcomeMessage';
// end of imported styled components


function LoggedUser(props) {
    const {username,loggedUser,setUser,task,setTask,isLogged,
    inputTask, deleteTask}=LoggedUserLogic(props);
    
    // isLogged component verifies if the user isLogged is true
  
    //Updates page informations after they change
    useEffect(()=>{
    isLogged();
      Axios.get(`${process.env.REACT_APP_API_URI}/users/read/${username}`).then(foundUser=>{
      if(!foundUser.data.isLogged) return
      else {
        setUser(foundUser.data);
        props.user(foundUser.data);
      }
    })
    },[]);
    
   return(<div>
     <UserWelcomeMessage>Welcome, {loggedUser.username}! Here are your tasks. </UserWelcomeMessage>
     <TasksContainer>
     <FormHeader>Tasks:</FormHeader>

     <ScrollableTasks>
     {loggedUser.tasks.map((task, index)=>{
          return(
          <TaskItem key={index} id={index} onClick={(e)=>{deleteTask(e.target.id)}}>
          {task}
          </TaskItem>);
          
        })}
      </ScrollableTasks>

    <AddTaskContainer>
      <AddTask type="text" placeholder="New task" value={task}
        onChange={e=>{setTask(e.target.value)}} />
      <AddButton type="submit" onClick={e=>{inputTask(e)}}>+</AddButton>
    </AddTaskContainer>
    
     </TasksContainer>
   </div>)
    
}
export default LoggedUser;