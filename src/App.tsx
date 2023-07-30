import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";

import UserProvider from "./state-management/auth/UserProvider";
import Counter from "./state-management/counter/Counter";
import { TaskProvider } from "./state-management/tasks";

function App() {
  return (
    <TaskProvider>
      <UserProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </UserProvider>
    </TaskProvider>
  );
}

export default App;
