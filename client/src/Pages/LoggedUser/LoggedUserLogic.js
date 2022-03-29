import {useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import Axios from 'axios';

const LoggedUserLogic = () => {
    const {username} = useParams();
    const navigate = useNavigate();
    var [loggedUser,setUser] = useState({
      username:'',
      tasks:[],
      isLogged:false,
    });
    const [task,setTask] = useState('');

    // isLogged() makes a get request to see if the user is logged(in the database)
    const isLogged = async () => {
        const response = await Axios.get(`/users/auth/${username}`)
        .then(foundUser =>{
            if(!foundUser.data.isLogged){
              navigate("/login");
            }
            else {
              return 
            }
        })
        return response;
      }
    
    // logOut sets the isLogged field from database to 'false'
    function logOut(e, propsLoggedUser){
        e.preventDefault();
        Axios.post(`/users/${propsLoggedUser.username}/logout`).then(foundUser=>{
          setUser(foundUser.data);
        })
      }

    ///users/:username/logout
    // inputTask takes the input from text field and puts it in the database 
    // in user's tasks array
    function inputTask(e){
        e.preventDefault();
        Axios.post(`/users/update/${loggedUser._id}` , {
          userId:loggedUser._id,
          userTask:task
        }).then(foundUser=>{
          setUser(foundUser.data);
        })
        setTask('');
      } 

    // Deleting task
    const deleteTask = (taskId) => {
      // console.log(loggedUser.tasks[taskId]);
      Axios.post(`/users/${loggedUser._id}/delete`, {
        userId:loggedUser._id,
        deletedTaskIndex:taskId
      }).then(foundUser => {
        setUser(foundUser.data);
      })
    }

    return {username,navigate,loggedUser,setUser,task,setTask,
    isLogged,logOut,inputTask, deleteTask};
}

export default LoggedUserLogic;