
/* eslint-disable */;
import { Link } from "react-router-dom";
import classes from "./navigation.module.css";
import { logout, auth } from "../../auth";
import { useAuthState } from "react-firebase-hooks/auth";


const Navigation = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        {!user && <><li>
          <Link to="/login">Login</Link>
        </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>}
        {user && <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li >
            <button onClick={logout}>Logout</button>
          </li></>}
      </ul>
    </nav>
  );
};

export default Navigation;
