import { useContext, useReducer, useState } from "react";
import AuthContex from "./contexts/authContext";

const LoginStatus = () => {
  const { state, dispatch } = useContext(AuthContex);

  if (state)
    return (
      <>
        <div>
          <span className="mx-2">{state}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", username: "mosh.hamedani" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
