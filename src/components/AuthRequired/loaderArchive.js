import { redirect } from "react-router-dom";
// import isEmpty from "lodash.isempty";
import { isUserLogin } from "./auth";
import { PATHS } from "../../constants";
import { getAllOrdersFromArchive } from "../../services/contactsAPI";
import { getAllList } from "../../services/settingsUserAPI";

export const loaderArchive = async ({ request }) => {
  const isAuth = isUserLogin();

  const url = new URL(request.url);

  const params = Object.fromEntries([...url.searchParams.entries()]);

  // const isQueryParams = isEmpty(params);

  // if (isAuth && !isQueryParams) {
  //   try {
  //     const value = await getAllOrdersFromArchive(params);
  //     return [value];
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // if (isAuth && isQueryParams) {
  //   const data = await Promise.all([getAllOrdersFromArchive(), getAllList()]);
  //   return data;
  // }

  if (isAuth) {
    const data = await Promise.all([
      getAllOrdersFromArchive(params),
      getAllList(),
    ]);
    return data;
  }

  let paramsForToBackUser = new URLSearchParams();
  paramsForToBackUser.set("from", new URL(request.url).pathname + url.search);
  return redirect(`/${PATHS.LOGIN}?` + paramsForToBackUser.toString());
};
