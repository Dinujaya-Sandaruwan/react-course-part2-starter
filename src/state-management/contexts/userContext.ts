import { Dispatch } from "react";
import { UserAction } from "../reducers/userReducer";
import React from "react";

interface UserContextType {
    user: string;
    dispatch: Dispatch<UserAction>;
}

const UserContext = React.createContext<UserContextType>({} as UserContextType);

export default UserContext;