
import {configureStore} from '@reduxjs/toolkit';
import { getDummyData } from './reducers';


export default configureStore({
  reducer: {
    Data: getDummyData,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false, 
    serializableCheck: false,
  })
});
