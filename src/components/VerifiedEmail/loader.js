import { verifyEmailToken } from "../../services/authAPI";

export const loader = async ({ params }) => {
  const { verifyToken } = params;

  try {
    await verifyEmailToken(verifyToken);
    return null;
  } catch (error) {
    throw {
      message: "Not found",
      status: "404",
    };
  }
};
