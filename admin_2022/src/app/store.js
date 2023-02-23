import { configureStore } from '@reduxjs/toolkit';
import loadingSlice from '../features/loading/loadingSlice';

export default configureStore({
  reducer: {
    loading: loadingSlice,
  },
});
