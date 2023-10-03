import React from 'react'
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from './userSlice';

const UserList = () => {
// Retrieve the "users" state from the Redux store using the "useSelector" hook.
const users = useSelector(store => store.users);

// Get access to the Redux "dispatch" function using the "useDispatch" hook.
const dispatch = useDispatch();

// Define a function "handleDeleteUser" that dispatches the "deleteUser" action
// with the specified "id" as a payload when called.
const handleDeleteUser = (id) => {
  dispatch(deleteUser({ id }));
};


  const renderCard = () => users.map(user => (
    <div className='bg-gray-300 p-5 flex items-center justify-between' key={user.id}>
      
      <div>
        <h3 className='font-bold text-lg text-gray-700'>{user.name}</h3>
        <span className='font-normal text-gray-600'>{user.email}</span>
      </div>

      <div className='flex gap-4'>
        <Link to={`edit-user/${user.id}`}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
          </button>
        </Link>
        <button onClick={()=>handleDeleteUser(user.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
         </svg>
        </button>
      </div>

    </div>
  ))

  return (
<div>
  {/* Create a link to navigate to the '/add-user' route and display an "Add User" button */}
  <Link to='/add-user'><Button>Add User</Button></Link>
  
  {/* Create a grid layout with a gap and two columns on medium-sized screens */}
  <div className='grid gap-5 md:grid-cols-2'>
    {/* Conditionally render cards if there are users, otherwise display a "No User" message */}
    {users.length ? renderCard() : <p className='text-center col-span-2 text-gray-700 font-semibold'>No User</p>}
  </div>
</div>

  )
}

export default UserList
