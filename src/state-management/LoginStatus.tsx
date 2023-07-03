import useAuth from "./hooks/useAuth";

const LoginStatus = () => {
  const { state, dispatch } = useAuth();

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
