import { useDispatch } from "react-redux";
import {
  getCurrentUserThunk,
  loginThunk,
  logoutThink,
} from "../redux/auth/authThunks";
import { signup } from "../services/authAPI";

const HomePage = () => {
  const dispatch = useDispatch();
  const userLogin = {
    email: "zeross19940301@gmail.com",
    password: "112233",
  };

  const userCreate = {
    name: "PAVLO",
    email: "zeross1994030122@gmail.com",
    password: "112233",
  };

  return (
    <div>
      <p>HomePage</p>
      <button onClick={() => dispatch(loginThunk(userLogin))}>
        login
      </button>{" "}
      <br />
      <button onClick={() => dispatch(logoutThink())}>logout</button> <br />
      <button
        onClick={() => {
          dispatch(getCurrentUserThunk());
        }}
      >
        getCurrent
      </button>
      <br />
      <button
        onClick={() =>
          signup(userCreate)
            .then((data) => console.log(data))
            .catch((error) => console.log(error.message))
        }
      >
        createAcount
      </button>{" "}
      <br />
    </div>
  );
};

export default HomePage;
