import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchCount } from "./authorizationAPI";
import { CounterState, typeValues } from "./types";


const initialState: CounterState = {
  value: 0,
  status: "idle",
  User: {
    Id: 0,
    UserName: "",
    FullName: "",
    Email: "",
    Initials: "",
    ClientRoles: [],
  },
  AuthorizationToken: {
    AuthResult: "",
    Token: "",
    TokenExpires: "",
    RefreshToken: "",
  },
};

export const authUserAsync = createAsyncThunk(
  "auth/fetchCount",
  async (initialValues: typeValues) => {
    const response = await fetchCount(initialValues);
    // The value we return becomes the `fulfilled` action payload

    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(authUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.User = action.payload.User;
        state.status = "LogIn";
        state.AuthorizationToken = action.payload.AuthorizationToken;
        localStorage.setItem("authUser", JSON.stringify(action.payload.User));
        localStorage.setItem(
          "authTokens",
          JSON.stringify(action.payload.AuthorizationToken)
        );
      })
      .addCase(authUserAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const authToken = (state: RootState) => state.auth.AuthorizationToken;
export const userState = (state: RootState) => state.auth.User;
export const userStatus = (state: RootState) => state.auth.status;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default authSlice.reducer;
