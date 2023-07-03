import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import tasksReducer from "./state-management/reducers/tasksReducer";

import TaskContex from "./state-management/contexts/taskConext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import loginReducer from "./state-management/reducers/authReducer";
import AuthContex from "./state-management/contexts/authContext";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [state, authDispatch] = useReducer(loginReducer, "");
  return (
    <TaskContex.Provider value={{ tasks, dispatch: tasksDispatch }}>
      <AuthContex.Provider value={{ state, dispatch: authDispatch }}>
        <NavBar /> <HomePage />
      </AuthContex.Provider>
    </TaskContex.Provider>
  );
}

export default App;
