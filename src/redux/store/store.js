/** @format */

import { configureStore } from '@reduxjs/toolkit';
import todoSliceReducers from '../features/todoSlice';
export const store = configureStore({
  reducer: todoSliceReducers,
});
