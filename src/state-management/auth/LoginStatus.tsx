import useUsers from "./useUsers";

const LoginStatus = () => {
  // const [user, setUser] = useState('');

  const {user, dispatch} = useUsers()

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
