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

  const btnStyle = {
    color: "gray", // 여기 "#gray" 대신 "gray"를 사용해야 합니다.
    border: "none",
    padding: "5px 9px",
    borderRadius: "50px",
    float: "right",
  };

  const getStyle = () => {
    return {
      display: "flex",
      padding: "10px",
      border: "1px solid gray",
      textDecoration: "none", // CSS 속성은 camelCase를 사용해야 하므로 "TextDecoration"이 아닌 "textDecoration"이 되어야 합니다.
      marginBottom: "10px",
      alignItems: "center",
      justifyContent: "space-between",
    };
  };

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
    <div className="container" style={{ minWidth: "320px", overflowX: "auto" }}>
      <div className="title">
        <h1>예산 계산기</h1>
      </div>
      <form
        style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
        onSubmit={handleSubmit}
      >
        <div className="input-group" style={{ marginRight: "10px" }}>
          <label htmlFor="itemName">지출 항목</label>
          <input
            ref={itemNameInput}
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px", marginRight: "10px" }}
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
            style={{ flex: "10", padding: "5px", marginRight: "10px" }}
            placeholder="0"
            value={itemPrice}
            onChange={handleChangeItemPrice}
          ></input>
        </div>

        <input type="submit" value="제출" className="btn"></input>
      </form>

      <div className="lists">
        {listObject.map((data) => (
          <div key={data.id} className="list" style={getStyle()}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="name"
                style={{
                  display: "inline-box",
                  width: "200px",
                  height: "20px",
                  justifyContent: "center",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textAlign: "left",
                  background: "#fff",
                }}
              >
                {data.name}
              </div>
              <div
                className="price"
                style={{
                  display: "inline-box",
                  width: "200px",
                  height: "20px",
                  justifyContent: "center",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textAlign: "left",
                  background: "#fff",
                }}
              >
                {data.price}
              </div>
            </div>
            <div>
              <button style={btnStyle} onClick={() => handleClick(data.id)}>
                삭제
              </button>
              <button style={btnStyle}>수정</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
