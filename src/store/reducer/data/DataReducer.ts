// store/dataReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  data: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: null,
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<string>) {
      state.data = action.payload;
      state.loading = false;
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    updateDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    updateDataSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
    },
    updateDataFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  updateDataStart,
  updateDataSuccess,
  updateDataFailure,
} = dataSlice.actions;
export default dataSlice.reducer;
