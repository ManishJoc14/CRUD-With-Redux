import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', name: 'Manish', email: 'manishjoc14@gmail.com' },
    { id: '2', name: 'Bipin', email: 'bipinbadu567@gmail.com' },
];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
             // Create a new state array by spreading the existing state and adding the new user
             const newState = [...state, action.payload];
             return newState;
        },
        editUser: (state, action) => {
            const { id, name, email } = action.payload;
            const existingUser = state.find(user => user.id === id);
            
            if (existingUser) {
              // Create a new object by spreading the existingUser and updating the name and email properties
              const updatedUser = { ...existingUser, name, email };
              
              // Find the index of the existingUser in the state array
              const index = state.indexOf(existingUser);

              // Create a new state array by copying the original state array and replacing the old user with the updatedUser
              const newState = [...state.slice(0, index), updatedUser, ...state.slice(index + 1)];
              
              return newState;
            }
            // If no user with the matching id was found, return the current state
            return state;
          },
          deleteUser: (state, action) => {
            // Extract the user ID to be deleted from the action payload
            const { id } = action.payload;
          
            // Attempt to find the user with the matching ID in the current state
            const existingUser = state.find(user => user.id === id);
          
            // If a user with the matching ID exists in the state
            if (existingUser) {
              // Return a new state array that filters out the user with the specified ID
              return state.filter(user => user.id !== id);
            }
          
            // If no user with the matching ID was found, return the current state unchanged
            return state;
          }          
    }
});

// Exports individual action creators for Redux actions related to user data management.
export const { addUser, editUser, deleteUser } = userSlice.actions

// Exports the reducer function for handling actions related to user data in the Redux store.
export default userSlice.reducer