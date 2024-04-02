import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  roles: [],
  permissions: [],
};

const iamSlice = createSlice({
  name: "iam",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    setPermissions: (state, action) => {
      state.permissions = action.payload;
    },
  },
});

export const { setUsers, setRoles, setPermissions } = iamSlice.actions;

export const iamReducer = iamSlice.reducer;
