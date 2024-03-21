import { redirect } from "react-router-dom";
import { verifyTokenEmail } from "../../services/authAPI";
import { PATHS } from "../../constants";

export const loader = async ({ params }) => {
  const { verifyToken } = params;

  try {
    // const data = await verifyTokenEmail(verifyToken);
    const data = { code: 200 };

    if (data.code === 200) {
      return null;
    }

    return redirect(`/${PATHS.REGISTER}`);
  } catch (error) {
    throw {
      message: "Not found",
      status: "404",
    };
  }
};
