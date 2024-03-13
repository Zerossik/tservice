import { apiPrivate } from "./baseAPI";

export const changeTheme = async (theme) => {
  try {
    const { data } = await apiPrivate.post("/api/user/changeTheme", { theme });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addMaster = async (body) => {
  try {
    const { data } = await apiPrivate.post("/api/user/addMaster", body);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteMaster = async (body) => {
  try {
    const { data } = await apiPrivate.delete("/api/user/deleteMaster", {
      data: body,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllList = async () => {
  try {
    const { data } = await apiPrivate.get("/api/user/deviceSettings");
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addDeviceType = async (body) => {
  try {
    const { data } = await apiPrivate.post(
      "/api/user/deviceSettingsType",
      body
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const editDeviceType = async (body) => {
  try {
    const { data } = await apiPrivate.patch("/api/user/deviceTypeUpdate", body);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteDeviceType = async (body) => {
  try {
    const { data } = await apiPrivate.delete("/api/user/deviceType", {
      data: body,
    });
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const addDeviceManufacturer = async (body) => {
  try {
    const { data } = await apiPrivate.post(
      "/api/user/deviceSettingsManufacturer",
      body
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const editDeviceManufacturer = async (body) => {
  try {
    const { data } = await apiPrivate.patch(
      "/api/user/deviceManufacturerUpdate",
      body
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteDeviceManufacturer = async (body) => {
  try {
    const { data } = await apiPrivate.delete("/api/user/deviceManufacturer", {
      data: body,
    });
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateTableSettings = async (body) => {
  try {
    const { data } = await apiPrivate.put("/api/user/tableSettings", body);
    return data.code;
  } catch (error) {
    throw new Error(error.message);
  }
};
