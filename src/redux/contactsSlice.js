import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const initialState = {
  items: [],
  loading: false,
  error: null,
};
const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const idx = state.items.findIndex((item) => item.id === action.payload);
        state.items.splice(idx, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// SELECTORS
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, search) => {
    const items = !search
      ? contacts
      : contacts.filter(({ name, number }) => {
          return name.toLowerCase().includes(search) || number.includes(search);
        });
    return items;
  }
);

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

/*USAGE WITHOUT createAsyncThunk
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
*/
