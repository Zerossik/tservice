export const selectToken = ({ auth }) => auth.token;
export const selectUser = ({ auth }) => auth.user; // Повертає об'єкт user
export const selectIsLoading = ({ auth }) => auth.isLoading;
export const selectIsLogin = ({ auth }) => auth.user.isLogin;
