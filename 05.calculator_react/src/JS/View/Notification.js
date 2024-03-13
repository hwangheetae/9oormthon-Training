import React from "react";

const Notification = ({ message }) => {
  let notificationMessage = "";
  let css = "";
  if (message === "추가") {
    notificationMessage = "아이템이 추가되었습니다.";
    css = "bg-blue-500";
  }
  if (message === "삭제") {
    notificationMessage = "아이템이 삭제되었습니다.";
    css = "bg-red-500";
  }
  if (message === "전부삭제") {
    notificationMessage = "아이템을 전부 삭제하였습니다.";
    css = "bg-gray-800";
  }
  if (message === "수정") {
    notificationMessage = "아이템을 수정하였습니다.";
    css = "bg-yellow-800";
  }
  const classes = `${css} fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 text-white p-2 rounded
  `;
  return <div className={classes}>{notificationMessage}</div>;
};

export default Notification;
