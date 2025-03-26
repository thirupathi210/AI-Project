import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Reduser'; // Ensure the correct path

const store = configureStore({
    reducer: rootReducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;
