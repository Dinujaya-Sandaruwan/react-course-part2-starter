import { useContext } from "react";
import LoginStatus from "./LoginStatus";
import TaskContex from "./contexts/taskConext";

const NavBar = () => {
  const { tasks } = useContext(TaskContex);

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
