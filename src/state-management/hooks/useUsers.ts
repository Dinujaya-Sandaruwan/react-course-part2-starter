import { useContext } from "react";
import UserContext from "../contexts/userContext";

const useUsers = () => useContext(UserContext)

export default useUsers;