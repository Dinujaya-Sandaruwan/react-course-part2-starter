import { useContext, useReducer } from "react";
import userReducer from "../reducers/userReducer";
import TaskContext from "../contexts/taskContext";

const useTasks = () => useContext(TaskContext)
 
export default useTasks;