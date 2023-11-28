import { getCurrentUser } from "../../services/authAPI";

export const loader = async () => {
  try {
    const data = await getCurrentUser();
    return data;
  } catch (error) {
    return null;
  }
};
