import { redirect } from "react-router-dom";
import { isUserLogin } from "./auth";
import { PATHS } from "../../constants";
import { getAllOrders } from "../../services/contactsAPI";
import { getAllList } from "../../services/settingsUserAPI";

export const loader = async () => {
  // If the user is not logged in and tries to access `/protected`, we redirect
  // them to `/login` with a `from` parameter that allows login to redirect back
  // to this page upon successful authentication
  // console.log("protected rout ", isLoggedIn);
  const isAuth = isUserLogin();

  // if (isAuth) {
  //   return null;
  // }
  // const url = new URL(request.url);

  // const params = Object.fromEntries([...url.searchParams.entries()]);

  // if (isAuth && url.searchParams.size > 0) {
  //   try {
  //     const value = await getAllOrders(params);
  //     return [value];
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // if (isAuth && url.searchParams.size === 0) {
  if (isAuth) {
    // const contacts = await getAllOrders();
    // const lists = await getAllList();
    const data = await Promise.all([getAllOrders(), getAllList()]);
    console.log(data);
    return data;
    // return Promise.all([getAllOrders(), getAllList()])
    //   .then((value) => {
    //     return value;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
