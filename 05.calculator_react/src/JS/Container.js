import React, {
  useRef,
  useState,
  memo,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import Input from "./Input";
import Lists from "./Lists";
import TotalAmount from "./TotalAmount";

const Container = memo(() => {
  const itemNameInput = useRef(null);

  const [listObject, setListObject] = useState(() => {
    const savedList = localStorage.getItem("listObject");
    try {
      const parsedList = JSON.parse(savedList);
      return Array.isArray(parsedList) ? parsedList : [];
    } catch {
      return [];
    }
  });

  const totalAmount = useMemo(() => {
    return Array.isArray(listObject)
      ? listObject.reduce((tot, item) => tot + item.price, 0)
      : 0;
  }, [listObject]);

  const [itemName, setItemName] = useState("");

  const [itemPrice, setItemPrice] = useState("");

  useEffect(() => {
    localStorage.setItem("listObject", JSON.stringify(listObject));
  }, [listObject]);
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

  const handleUpdate = useCallback((id, newName, newPrice) => {
    setListObject((currentList) =>
      currentList.map((item) =>
        item.id === id ? { ...item, name: newName, price: newPrice } : item
      )
    );
  }, []);

  const handleClick = useCallback((id) => {
    setListObject((currentList) =>
      currentList.filter((item) => item.id !== id)
    );
  }, []);

  const handleChangeItemName = (e) => {
    setItemName(e.target.value);
  };

  const handleChangeItemPrice = (e) => {
    setItemPrice(e.target.value);
  };

  const handleRemoveClick = (e) => {
    setListObject([]);
  };

  return (
    <div>
      <div className=" container  mx-auto overflow-hidden bg-white p-5 shadow-lg rounded-lg mt-5 justify-center">
        <form onSubmit={handleSubmit}>
          <div className="w-full flex">
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
          </div>
          <input
            type="submit"
            value="제출"
            className="inline-block  px-5 py-2.5 text-base bg-green-500 text-white rounded-md cursor-pointer mr-1.5 hover:bg-red-700 "
          ></input>
        </form>

        <div>
          <Lists
            listObject={listObject}
            handleClick={handleClick}
            handleUpdate={handleUpdate}
          />
          <button
            onClick={handleRemoveClick}
            className="inline-block  px-5 py-2.5 text-base bg-green-500 text-white rounded-md cursor-pointer mr-1.5 hover:bg-red-700 "
          >
            전체 지우기
          </button>
        </div>
      </div>
      <TotalAmount totalAmount={totalAmount} />
    </div>
  );
});

export default Container;
