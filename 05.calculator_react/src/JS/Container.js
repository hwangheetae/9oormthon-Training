import React, { useRef, useState } from "react";
import Input from "./Input";
import Lists from "./Lists";
import TotalAmount from "./TotalAmount";
function Container() {
  const itemNameInput = useRef(null);

  const [listObject, setListObject] = useState([
    { id: 1, name: "밥먹기", price: 12000 },
    { id: 2, name: "술", price: 35000 },
  ]);

  const totalAmount = listObject.reduce((tot, item) => tot + item.price, 0);

  console.log(totalAmount);
  const [itemName, setItemName] = useState("");

  const [itemPrice, setItemPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newItem = {
      id: Date.now(),
      name: itemName,
      price: Number(itemPrice),
    };

    setListObject((currentList) => [...currentList, newItem]);
    setItemName("");
    setItemPrice("");

    itemNameInput.current.focus();
  };

  const handleClick = (id) => {
    setListObject((currentList) =>
      currentList.filter((item) => item.id !== id)
    );
  };

  const handleChangeItemName = (e) => {
    setItemName(e.target.value);
  };

  const handleChangeItemPrice = (e) => {
    setItemPrice(e.target.value);
  };
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <Input
            label="지출 항목"
            type="text"
            name="itemName"
            placeholder="예):렌트비 "
            value={itemName}
            onChange={handleChangeItemName}
            ref={itemNameInput}
          />
          <Input
            label="비용"
            type="text"
            name="itemPrice"
            placeholder="0"
            value={itemPrice}
            onChange={handleChangeItemPrice}
          />
          <input type="submit" value="제출" className="btn"></input>
        </form>

        <Lists listObject={listObject} handleClick={handleClick} />
      </div>
      <TotalAmount totalAmount={totalAmount} />
    </div>
  );
}

export default Container;
