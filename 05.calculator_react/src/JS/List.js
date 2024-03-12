import React from "react";
import Button from "./Button";

function List({ data, handleClick }) {
  return (
    <div key={data.id} className="flex space-x-4 mb-3 border my-5">
      <div className="flex flex-1 justify-center">
        <div className="w-1/2 px-4 py-2 bg-white">{data.name}</div>
        <div className="w-1/2 px-4 py-2 bg-white">{data.price}</div>
      </div>
      <div className="flex space-x-2">
        <Button
          /// handleClick 함수 작성 필요
          handleClick={handleClick}
          data={data}
          css="bg-red-500 hover:bg-red-600"
          value="수정"
        />
        <Button
          handleClick={handleClick}
          data={data}
          css="bg-green-500 hover:bg-green-600"
          value="삭제"
        />
      </div>
    </div>
  );
}

export default List;
