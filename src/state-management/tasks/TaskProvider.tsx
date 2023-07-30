import { ReactNode, useReducer } from "react";
import TaskContext from "./taskContext";

export interface Task {
    id: number;
    title: string;
  }

interface AddTask {
    type: 'ADD';
    task: Task;
}

interface DeleteTask {
    type: 'DELETE';
    taskId: number;
}

export type TaskAction = AddTask | DeleteTask;


const tasksReducer = (tasks: Task[], action : TaskAction): Task[] => {

    if (action.type === "ADD") {
        return [action.task, ...tasks];
    }
    if (action.type === "DELETE") {
        return tasks.filter(task => task.id !== action.taskId);
    }

    return tasks;
}

interface Props {
    children: ReactNode
}

const TaskProvider = ({children} : Props) => {
    const [tasks , dispatch] =  useReducer(tasksReducer, [])
    return ( 
        <TaskContext.Provider value={{tasks, dispatch}}>
            {children}
        </TaskContext.Provider>
     );
}
 
export default TaskProvider;