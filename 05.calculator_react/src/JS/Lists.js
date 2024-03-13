import React, { memo } from "react";
import List from "./List"; // 새 List 컴포넌트 불러오기

const Lists = memo(({ listObject, handleClick, handleUpdate }) => {
  return (
    <div>
      {listObject.map((data) => (
        <List
          key={data.id}
          data={data}
          handleClick={handleClick}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
});

export default Lists;
