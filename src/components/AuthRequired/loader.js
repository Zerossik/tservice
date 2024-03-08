import { redirect } from "react-router-dom";
// import isEmpty from "lodash.isempty";
import { isUserLogin } from "./auth";
import { PATHS } from "../../constants";
import { getAllOrders } from "../../services/contactsAPI";
import { getAllList } from "../../services/settingsUserAPI";

export const loader = async ({ request }) => {
  // If the user is not logged in and tries to access `/protected`, we redirect
  // them to `/login` with a `from` parameter that allows login to redirect back
  // to this page upon successful authentication
  // console.log("protected rout ", isLoggedIn);
  const isAuth = isUserLogin();

  const url = new URL(request.url);

  const params = Object.fromEntries([...url.searchParams.entries()]);

  // const isQueryParams = isEmpty(params);

  // if (isAuth && !isQueryParams) {
  //   console.log("first");
  //   try {
  //     const value = await getAllOrders(params);
  //     return [value];
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // if (isAuth && isQueryParams) {
  //   console.log("second");
  //   const data = await Promise.all([getAllOrders(params), getAllList()]);
  //   return data;
  // }

  if (isAuth) {
    const data = await Promise.all([getAllOrders(params), getAllList()]);
    return data;
  }

  let paramsForToBackUser = new URLSearchParams();
  paramsForToBackUser.set("from", new URL(request.url).pathname + url.search);
  return redirect(`/${PATHS.LOGIN}?` + paramsForToBackUser.toString());

  // const auth = false;
  // if (auth) {
  //   return null;
  // }
  // let params = new URLSearchParams();
  // params.set("from", new URL(request.url).pathname);
  // return redirect("/api/auth/signin?" + params.toString());
};
