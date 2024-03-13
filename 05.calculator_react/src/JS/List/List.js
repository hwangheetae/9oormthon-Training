import React, { memo, useState } from "react";
import ListButton from "./ListButton";

const List = memo(({ data, handleClick, handleUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [editedTitle, setEditedTitle] = useState();
  const [editedPrice, setEditedPrice] = useState();
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = () => {
    handleUpdate(data.id, editedTitle, editedPrice);
    setIsEditing(false);
  };

  const handleChangePrice = (e) => {
    const value = e.target.value;
    setEditedPrice(value === "" ? "" : Number(value));
  };
  return (
    <div key={data.id} className="flex space-x-4 mb-3 border my-5">
      {isEditing ? (
        <>
          <input
            className="w-1/2 px-4 py-2 border"
            value={editedTitle}
            placeholder={data.name}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            className="w-1/2 px-4 py-2 border"
            type="number"
            value={editedPrice}
            placeholder={data.price}
            onChange={handleChangePrice}
          />
          <ListButton
            handleClick={handleSaveClick}
            data={data}
            css="bg-blue-500 hover:bg-blue-600"
            value="저장"
          />
        </>
      ) : (
        <>
          <div className="flex flex-1 justify-center">
            <div className="w-1/2 px-4 py-2 bg-white">{data.name}</div>
            <div className="w-1/2 px-4 py-2 bg-white">{data.price}</div>
          </div>
          <div className="flex space-x-2">
            <ListButton
              handleClick={handleEditClick}
              data={data}
              css="bg-red-500 hover:bg-red-600"
              value="수정"
            />
            <ListButton
              handleClick={handleClick}
              data={data}
              css="bg-green-500 hover:bg-green-600"
              value="삭제"
            />
          </div>
        </>
      )}
    </div>
  );
});

export default List;
