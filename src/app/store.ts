import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authorizationSlice';
import browseReducer from '../features/browse/browseSlice';
import singleVideoInfoeReducer from '../features/singleVideo/singleVideoSlice';


export const store = configureStore({
  reducer: {
   
    auth: authReducer,
    browse: browseReducer,
    videoInfoe: singleVideoInfoeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
