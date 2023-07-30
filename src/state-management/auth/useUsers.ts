import { useContext } from "react";
import UserContext from "./userContext";

const useUsers = () => useContext(UserContext)

export default useUsers;