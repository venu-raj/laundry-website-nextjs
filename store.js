// store.js
import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './bookingSlice'; // Replace with your actual slice

const store = configureStore({
    reducer: {
        booking: bookingReducer,
        // Add other reducers if any
    },
});

export default store;
