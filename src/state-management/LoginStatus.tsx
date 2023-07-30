import { useContext, useReducer, useState } from "react";
import userReducer from "./reducers/userReducer";
import React from 'react';
import UserContext from "./contexts/userContext";

const LoginStatus = () => {
  // const [user, setUser] = useState('');

  const {user, dispatch} = useContext(UserContext)

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({status : 'LOGGED_OUT'})} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({status:'LOGGED_IN', name: "Dinujaya Sandaruwan" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
