import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/users/userSlice'
// Import the configureStore function from Redux Toolkit to create a store instance.

// Define the store by calling configureStore, which takes an object as its argument.
export const store = configureStore({
    // Inside the reducer property of the configuration object, specify the reducers
    // that will manage different parts of the application's state.
  
    // In this example, we use the "users" key to assign the "userReducer" to manage
    // the state related to users. You can have multiple reducers for different parts
    // of your application state, and they are combined here.
    reducer: {
      users: userReducer,
    },
  });