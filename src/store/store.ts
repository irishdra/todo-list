import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosReducer';

export const store = configureStore({
    reducer: todosReducer
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
