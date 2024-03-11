import React, { useRef, useState } from "react";
import "./CSS/App.css";
function App() {
  const itemNameInput = useRef(null);
  const [listObject, setListObject] = useState([
    { id: 1, name: "밥먹기", price: 12000 },
    { id: 2, name: "술", price: 35000 },
  ]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  // const getStyle = () => {
  //   return {
  //     display: "flex",
  //     padding: "10px",
  //     border: "1px solid gray",
  //     textDecoration: "none", // CSS 속성은 camelCase를 사용해야 하므로 "TextDecoration"이 아닌 "textDecoration"이 되어야 합니다.
  //     marginBottom: "10px",
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //   };
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newItem = {
      id: Date.now(),
      name: itemName,
      price: itemPrice,
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
    <div className="container">
      <div className="title">
        <h1>예산 계산기</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="itemName">지출 항목</label>
          <input
            ref={itemNameInput}
            type="text"
            name="value"
            placeholder="예):렌트비 "
            value={itemName}
            onChange={handleChangeItemName}
          ></input>
        </div>
        <div className="input-group">
          <label htmlFor="itemPrice">비용</label>

          <input
            type="text"
            name="value"
            placeholder="0"
            value={itemPrice}
            onChange={handleChangeItemPrice}
          ></input>
        </div>

        <input type="submit" value="제출" className="btn"></input>
      </form>

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
    </div>
  );
}

export default App;
