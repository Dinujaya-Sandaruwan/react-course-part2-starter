import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";

import UserProvider from "./state-management/UserProvider";
import { TaskProvider } from "./state-management/tasks";


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
