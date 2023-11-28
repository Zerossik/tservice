export const authInitialState = {
  error: null,
  user: { id: "", name: "", email: "", isLogin: false },
  isLoading: false,
  token: "",
};

export const contactsInitialState = {
  error: null,
  contacts: [],
  isLoading: false,
};
