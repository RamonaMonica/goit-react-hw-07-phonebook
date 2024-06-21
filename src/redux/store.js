import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contactsSilce';
import { filterReducer } from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
