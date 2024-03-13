import React, {
  useRef,
  useState,
  memo,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import Input from "./Input";
import Lists from "./List/Lists";
import TotalAmount from "./View/TotalAmount";
import Notification from "./View/Notification";
const Container = memo(() => {
  //알림 처리
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState("");

  //focus 처리
  const itemNameInput = useRef(null);

  //listObject 관리
  const [listObject, setListObject] = useState(() => {
    const savedList = localStorage.getItem("listObject");
    try {
      const parsedList = JSON.parse(savedList);
      return Array.isArray(parsedList) ? parsedList : [];
    } catch {
      return [];
    }
  });

  const [itemName, setItemName] = useState("");

  const [itemPrice, setItemPrice] = useState("");

  //총 지출 계산
  const totalAmount = useMemo(() => {
    return Array.isArray(listObject)
      ? listObject.reduce((tot, item) => tot + item.price, 0)
      : 0;
  }, [listObject]);

  //local Storage 저장
  useEffect(() => {
    localStorage.setItem("listObject", JSON.stringify(listObject));
  }, [listObject]);

  //아이템 추가
  const handleSubmit = (e) => {
    e.preventDefault();
    let newItem = {
      id: Date.now(),
      name: itemName,
      price: Number(itemPrice),
    };

    setListObject((currentList) => [...currentList, newItem]);
    setShowNotification(true);
    setMessage("추가");
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    setItemName("");
    setItemPrice("");

    itemNameInput.current.focus();
  };

  const handleChangeItemName = (e) => {
    setItemName(e.target.value);
  };

  const handleChangeItemPrice = (e) => {
    setItemPrice(e.target.value);
  };

  //아이템 업데이트
  const handleUpdate = useCallback((id, newName, newPrice) => {
    setListObject((currentList) =>
      currentList.map((item) =>
        item.id === id ? { ...item, name: newName, price: newPrice } : item
      )
    );
    setShowNotification(true);
    setMessage("수정");
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  }, []);

  //아이템 삭제
  const handleClick = useCallback((id) => {
    setListObject((currentList) =>
      currentList.filter((item) => item.id !== id)
    );

    setShowNotification(true);
    setMessage("삭제");
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  }, []);

  //전체지우기
  const handleRemoveClick = (e) => {
    setListObject([]);
    setShowNotification(true);
    setMessage("전부삭제");
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };
  return (
    <div>
      {showNotification && <Notification message={message} />}
      <div className=" container mx-auto overflow-hidden bg-white p-5 shadow-lg rounded-lg mt-5 justify-center w-[1100px]">
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
