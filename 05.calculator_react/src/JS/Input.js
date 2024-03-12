import React from "react";

const Input = React.forwardRef(
  ({ label, type, name, placeholder, value, onChange }, ref) => (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
);

export default Input;
