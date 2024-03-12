import React from "react";

function Lists({ listObject, handleClick }) {
  return (
    <div className="">
      {listObject.map((data) => (
        <div key={data.id} className="flex  space-x-4 mb-3 border my-5">
          <div className="flex flex-1 justify-center  ">
            <div className=" w-1/2 px-4 py-2  bg-white">{data.name}</div>
            <div className=" w-1/2 px-4 py-2  bg-white ">{data.price}</div>
          </div>
          <div className="flex space-x-2 ">
            <button className=" text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded shadow">
              수정
            </button>

            <button
              className=" text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded shadow"
              onClick={() => handleClick(data.id)}
            >
              삭제
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Lists;
