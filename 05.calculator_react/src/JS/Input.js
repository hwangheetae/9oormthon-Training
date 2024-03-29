import React from "react";
const Input = React.forwardRef(
  ({ label, type, name, placeholder, value, onChange }, ref) => (
    <div className="mb-4 flex-1">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
