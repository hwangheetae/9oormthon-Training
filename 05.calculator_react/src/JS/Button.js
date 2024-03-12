import React from "react";

function Button({ handleClick, data, css, value }) {
  const classes = `${css} text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded shadow`;
  return (
    <button className={classes} onClick={() => handleClick(data.id)}>
      {value}
    </button>
  );
}

export default Button;
