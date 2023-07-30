import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import HomePage from "./state-management/HomePage";
import LoginStatus from "./state-management/LoginStatus";
import NavBar from "./state-management/NavBar";

import TaskList from "./state-management/TaskList";
import tasksReducer from "./state-management/reducers/tasksReducer";
import TaskContext from "./state-management/contexts/taskContext";
import userReducer from "./state-management/reducers/userReducer";
import UserContext from "./state-management/contexts/userContext";
import UserProvider from "./state-management/UserProvider";

function App() {
  const [tasks , tasksDispatch] =  useReducer(tasksReducer, [])
  
  return (
    <TaskContext.Provider value={{tasks, dispatch: tasksDispatch}}>
      <UserProvider>
      <NavBar/>
      <HomePage/>
      </UserProvider>
    </TaskContext.Provider>
  );
}

export default App;
