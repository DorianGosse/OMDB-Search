import React from 'react' 

export default Button = ({ label, ...props}) => (
  <button {...props}>
    {label}
  </button>
)