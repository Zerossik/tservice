import { redirect } from "react-router-dom";

export const authRequiredLoader = ({ request }) => {
  // If the user is not logged in and tries to access `/protected`, we redirect
  // them to `/login` with a `from` parameter that allows login to redirect back
  // to this page upon successful authentication
  const auth = false;

  if (auth) {
    return null;
  }

  let params = new URLSearchParams();
  params.set("from", new URL(request.url).pathname);
  return redirect("/api/auth/signin?" + params.toString());
};
