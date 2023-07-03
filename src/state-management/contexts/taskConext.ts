import React, { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/tasksReducer";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>; //type TaskAction = AddTask | DeleteTask;
}

const TaskContex = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default TaskContex;
