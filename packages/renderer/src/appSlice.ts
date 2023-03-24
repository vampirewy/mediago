import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface AppStore {
  local: string;
  promptTone: boolean;
  proxy: string;
  useProxy: boolean;
}

const initialState: AppStore = {
  local: "",
  promptTone: true,
  proxy: "",
  useProxy: false,
};

export const counterSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppStore(state, { payload }) {
      const { local, promptTone } = payload;
      if (local) {
        state.local = payload.local;
      }
      if (promptTone != null) {
        state.promptTone = payload.promptTone;
      }
    },
  },
});

export const { setAppStore } = counterSlice.actions;
export const selectStore = (state: RootState) => state.app;
export default counterSlice.reducer;
