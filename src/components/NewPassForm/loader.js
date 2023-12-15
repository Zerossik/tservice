import { redirect } from "react-router-dom";
import { verifyTokenLink } from "../../services/authAPI";
import { PATHS } from "../../constants";

export const loader = async ({ params, request }) => {
  const { token } = params;
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  try {
    const data = await verifyTokenLink({ token, id });

    if (data.code === 200) {
      return { token, id };
    }

    return redirect(`${PATHS.LOGIN}`);
  } catch (error) {
    throw {
      message: "Not found",
      status: "404",
    };
  }
};

// export const loader = () => {
//   // If the user is not logged in and tries to access `/protected`, we redirect
//   // them to `/login` with a `from` parameter that allows login to redirect back
//   // to this page upon successful authentication
//   // console.log("protected rout ", isLoggedIn);
//   const isAuth = isUserLogin();

//   if (isAuth) {
//     return null;
//   }

//   return redirect(`/${PATHS.LOGIN}`);

// const auth = false;
// if (auth) {
//   return null;
// }
// let params = new URLSearchParams();
// params.set("from", new URL(request.url).pathname);
// return redirect("/api/auth/signin?" + params.toString());
// };

// export const loader = () => {
//   // throw {
//   //   message: "the error there",
//   //   statusText: "statusText",
//   //   status: "res.status",
//   // };
//   return "The data is here";
// };
