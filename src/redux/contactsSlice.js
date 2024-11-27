import { createSlice } from "@reduxjs/toolkit";
// import { fetchError, fetchInProgress, fetchSuccess } from "./contactsActions";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    fetchInProgress(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchAddInProgress(state) {
      state.loading = true;
    },
    fetchAddSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    fetchAddError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchDeleteInProgress(state) {
      state.loading = true;
    },
    fetchDeleteSuccess(state, action) {
      state.loading = false;
      state.error = null;
      const idx = state.items.findIndex((item) => item.id === action.payload);
      console.log(idx);
      state.items.splice(idx, 1);
    },

    fetchDeleteError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// SELECTORS
export const selectContacts = (state) => state.contacts.items;
// ACTIONS
export const {
  fetchError,
  fetchInProgress,
  fetchSuccess,
  fetchAddInProgress,
  fetchAddSuccess,
  fetchAddError,
  fetchDeleteInProgress,
  fetchDeleteSuccess,
  fetchDeleteError,
} = slice.actions;
// REDUCER
export default slice.reducer;
