import React from 'react'
import {useState} from 'react'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from './userSlice'

const EditUser = () => {
// Import the "useNavigate" hook for programmatic navigation.
const navigate = useNavigate();

// Get access to the Redux "dispatch" function for dispatching actions.
const dispatch = useDispatch();

// Extract parameters from the current route.
const params = useParams();

// Retrieve the "users" state from the Redux store.
const users = useSelector(store => store.users);

// Filter the list of users to find the user with the matching ID from the route parameters.
const exitingUser = users.filter(user => user.id === params.id);

// Extract the name and email of the found user.
const { name, email } = exitingUser[0];

// Create state variables "values" and "setValues" to manage user input for name and email fields.
const [values, setValues] = useState({ name, email });

// Define a function "handleEditUser" to dispatch an "editUser" action with updated user data,
// reset input fields, and navigate back to the home page.
const handleEditUser = () => {
  // Dispatch an "editUser" action with the user's ID and updated name and email.
  dispatch(editUser({ id: params.id, name: values.name, email: values.email }));

  // Reset input fields by setting "values" to an empty object.
  setValues({ name: '', email: '' });

  // Use the "navigate" function to navigate back to the home page ('/').
  navigate('/');
}

// Return JSX for rendering the user edit form.
return (
  <div className='mt-10 max-w-xl mx-auto'>
    {/* Render text input fields for name and email with value and onChange handlers. */}
    <TextField
      label='Name'
      value={values.name}
      onChange={(e) => setValues({ ...values, name: e.target.value })}
      inputProps={{ type: 'text', placeholder: 'John Doe' }}
    />
    <br />
    <TextField
      label='Email'
      value={values.email}
      onChange={(e) => setValues({ ...values, email: e.target.value })}
      inputProps={{ type: 'email', placeholder: 'johndoe@gmail.com' }}
    />
    {/* Render an "Edit" button with an onClick handler to trigger the edit action. */}
    <Button onClick={handleEditUser}>Edit</Button>
  </div>
)

}

export default EditUser
