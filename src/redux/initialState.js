export const authInitialState = {
  error: null,
  user: { id: "", name: "", email: "", isLogin: false, theme: "light" },
  isLoading: false,
  token: "",
};

export const contactsInitialState = {
  error: null,
  contacts: [],
  isLoading: false,
};
