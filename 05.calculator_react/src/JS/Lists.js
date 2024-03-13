import React, { memo } from "react";
import List from "./List"; // 새 List 컴포넌트 불러오기

const Lists = memo(({ listObject, handleClick }) => {
  return (
    <div>
      {listObject.map((data) => (
        <List key={data.id} data={data} handleClick={handleClick} /> // List 컴포넌트 사용
      ))}
    </div>
  );
});

export default Lists;
