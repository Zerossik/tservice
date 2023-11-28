import axios from "axios";

export const getAllContacts = async () => {
  try {
    const { data } = await axios("api/contacts");
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getContactById = async (id) => {
  try {
    const { data } = await axios(`api/contacts/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addcontact = async (body) => {
  try {
    const { data } = await axios.post("/api/contacts", body);
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const updateContactById = async (id, body) => {
  try {
    const { data } = await axios.patch(`api/contacts/${id}`, body);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteContactById = async (id) => {
  try {
    const { data } = await axios.delete(`api/contacts/${id}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
