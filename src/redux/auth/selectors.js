export const selectToken = (state) => state.token;
export const selectUser = (state) => state.user; // Повертає об'єкт user
export const selectIsLoading = (state) => state.isLoading;
export const selectIsLogin = (state) => state.user.isLogin;
