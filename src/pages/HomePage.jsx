import { useDispatch } from "react-redux";
import {
  getCurrentUserThunk,
  loginThunk,
  logoutThink,
} from "../redux/auth/authThunks";
import { signup } from "../services/authAPI";
import {
  addContactThunk,
  deleteContactThunk,
  getAllThunk,
} from "../redux/contacts/contactsThunks";
import { getContactById } from "../services/contactsAPI";

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

  const newContact = {
    type: "Phone",
    manufacturer: "Samsung",
    model: "A20",
    customerName: "customerName",
    phoneNumber: "customerPhoneNumber",
    failure: "failure description",
    deviceID: "device IMAI or SN",
    price: 200,
    status: "repairStatus",
    masterName: "who made the repairs",
    // endDate: "end repair date",
    description: "Your description",
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
      <h2>Contacts Thunk test</h2>
      <button onClick={() => dispatch(getAllThunk())}>getAllContacts</button>
      <br />
      <button
        onClick={async () =>
          console.log(await getContactById("655145cf7444999c6e8dc993"))
        }
      >
        ContactByIDTest
      </button>
      <br />
      <button onClick={() => dispatch(addContactThunk(newContact))}>
        addContactTest
      </button>
      <br />
      <button
        onClick={() => dispatch(deleteContactThunk("656629820c1d0caa762e8c39"))}
      >
        deleteContactTest
      </button>
    </div>
  );
};

export default HomePage;
