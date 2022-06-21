import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { numbersReducers } from './reducers/assortmentRedusers';

export const store = configureStore({
  reducer: {
    collection: numbersReducers.reducer
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
