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
import TaskProvider from "./state-management/TaskProvider";

function App() {
  
  
  return (
    <TaskProvider>
      <UserProvider>
      <NavBar/>
      <HomePage/>
      </UserProvider>
      </TaskProvider>

  );
}

export default App;
