import React from "react";

function Lists({ listObject, handleClick }) {
  return (
    <div className="lists">
      {listObject.map((data) => (
        <div key={data.id} className="list">
          <div>
            <div className="name">{data.name}</div>
            <div className="price">{data.price}</div>
          </div>
          <div>
            <button>수정</button>
            <button onClick={() => handleClick(data.id)}>삭제</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Lists;
