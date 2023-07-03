import React, { Dispatch } from "react";
import { AuthAction } from "../reducers/authReducer";

interface AuthContextType {
  state: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContex = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContex;
