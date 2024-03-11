import React, { Component } from "react";
import "./CSS/App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.itemNameInput = React.createRef(); // itemName 입력 필드에 대한 참조 생성
    this.state = {
      listObject: [
        { id: 1, name: "밥먹기", price: 12000 },
        { id: 2, name: "술", price: 35000 },
      ],
      itemName: "",
      itemPrice: "",
    };
  }
  btnStyle = {
    color: "gray", // 여기 "#gray" 대신 "gray"를 사용해야 합니다.
    border: "none",
    padding: "5px 9px",
    borderRadius: "50px",
    float: "right",
  };

  getStyle = () => {
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
  state = {
    listObject: [
      { id: 1, name: "밥먹기", price: 12000 },
      { id: 2, name: "술", price: 35000 },
    ],
    itemName: "",
    itemPrice: "",
  };

  handleClick = (id) => {
    let newListObject = this.state.listObject.filter((data) => data.id !== id);
    console.log("newListObject", newListObject);
    this.setState({ listObject: newListObject });
  };

  handleChangeItemName = (e) => {
    this.setState({ itemName: e.target.value });
  };

  handleChangeItemPrice = (e) => {
    this.setState({ itemPrice: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let newItem = {
      id: Date.now(),
      name: this.state.itemName,
      price: this.state.itemPrice,
    };
    this.setState(
      {
        listObject: [...this.state.listObject, newItem],
        itemName: "",
        itemPrice: "",
      },
      () => this.itemNameInput.current.focus()
    );

    this.itemNameInput.current.focus();
  };
  render() {
    return (
      <div
        className="container"
        style={{ minWidth: "320px", overflowX: "auto" }}
      >
        <div className="title">
          <h1>예산 계산기</h1>
        </div>
        <form
          style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
          onSubmit={this.handleSubmit}
        >
          <div className="input-group" style={{ marginRight: "10px" }}>
            <label htmlFor="itemName">지출 항목</label>
            <input
              ref={this.itemNameInput}
              type="text"
              name="value"
              style={{ flex: "10", padding: "5px", marginRight: "10px" }}
              placeholder="예):렌트비 "
              value={this.state.itemName}
              onChange={this.handleChangeItemName}
            ></input>
          </div>
          <div className="input-group">
            <label htmlFor="itemPrice">비용</label>

            <input
              type="text"
              name="value"
              style={{ flex: "10", padding: "5px", marginRight: "10px" }}
              placeholder="0"
              value={this.state.itemPrice}
              onChange={this.handleChangeItemPrice}
            ></input>
          </div>

          <input type="submit" value="제출" className="btn"></input>
        </form>

        <div className="lists">
          {this.state.listObject.map((data) => (
            <div key={data.id} className="list" style={this.getStyle()}>
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
                <button
                  style={this.btnStyle}
                  onClick={() => this.handleClick(data.id)}
                >
                  삭제
                </button>
                <button style={this.btnStyle}>수정</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
