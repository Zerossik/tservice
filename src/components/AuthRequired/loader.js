import { redirect } from "react-router-dom";
import { isUserLogin } from "./auth";
import { PATHS } from "../../constants";
import {
  getAllContacts,
  getContactsBySearch,
  getContactsByType,
} from "../../services/contactsAPI";
import { getAllList } from "../../services/settingsUserAPI";

export const loader = async ({ request }) => {
  // If the user is not logged in and tries to access `/protected`, we redirect
  // them to `/login` with a `from` parameter that allows login to redirect back
  // to this page upon successful authentication
  // console.log("protected rout ", isLoggedIn);
  const isAuth = isUserLogin();
  const url = new URL(request.url);
  const type = url.searchParams.get("type");
  const filter = url.searchParams.get("filter");

  if (isAuth && type) {
    try {
      const value = await getContactsByType(type);
      return [value];
    } catch (error) {
      console.log(error);
    }
  }

  if (isAuth && filter) {
    try {
      const value = await getContactsBySearch(filter);
      return [value];
    } catch (error) {
      console.log(error);
    }
  }

  if (isAuth) {
    return Promise.all([getAllContacts(), getAllList()])
      .then((value) => {
        return value;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return redirect(`/${PATHS.LOGIN}`);

  // const auth = false;
  // if (auth) {
  //   return null;
  // }
  // let params = new URLSearchParams();
  // params.set("from", new URL(request.url).pathname);
  // return redirect("/api/auth/signin?" + params.toString());
};
