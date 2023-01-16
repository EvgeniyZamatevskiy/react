import { createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH } from "api";
import { RootStateType } from "store";

export const asyncAction = createAsyncThunk<void, undefined, { rejectValue: string, state: RootStateType }>
("app/asyncAction", async (_, { rejectWithValue, getState, dispatch }) => {

  const state = getState();

  try {
    const { data: items } = await AUTH.login();

    return items;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
