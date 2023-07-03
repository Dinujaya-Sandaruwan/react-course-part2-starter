import { ReactNode, useReducer } from "react";
import loginReducer from "./reducers/authReducer";
import AuthContex from "./contexts/authContext";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(loginReducer, "");
  return (
    <AuthContex.Provider value={{ state, dispatch: dispatch }}>
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;
