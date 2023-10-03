// Define a reusable Button component that accepts an onClick function and children (content) as props.

import React from 'react';

// The Button component takes two props:
// - onClick: A function to be executed when the button is clicked.
// - children: The content to be displayed within the button.

const Button = ({ onClick, children }) => {
  return (
    // Render a button element with styling classes and an onClick event handler.
    <button className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700" onClick={onClick}>
      {/* Display the content (children) within the button. */}
      {children}
    </button>
  )
}

// Export the Button component to make it available for use in other parts of your application.
export default Button;
