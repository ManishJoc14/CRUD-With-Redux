// Define a reusable TextField component for creating labeled text input fields.

import React from 'react';

// The TextField component takes several props:
// - label: The label text displayed above the input field.
// - inputProps: Additional props to be spread onto the input element (e.g., type, placeholder).
// - onChange: A function to be executed when the input value changes.
// - value: The current value of the input field.

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    // Render a div element containing a label and an input element.
    <div className='flex flex-col'>
      {/* Display the label above the input field. */}
      <label className='mb-2 text-base text-gray-800'>{label}</label>
      {/* Render the input element with specified CSS classes and props. */}
      <input className='bg-gray-200 py-2 px-3 border-2 outline-none'
        {...inputProps} // Spread additional input props onto the input element.
        onChange={onChange} // Attach an event handler for input value changes.
        value={value} // Set the current value of the input field.
      />
    </div>
  )
}

// Export the TextField component to make it available for use in other parts of your application.
export default TextField;
