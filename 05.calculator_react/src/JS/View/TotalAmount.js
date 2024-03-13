import React, { memo } from "react";

const TotalAmount = memo(({ totalAmount }) => {
  return (
    <div className=" my-5 text-2xl color text-right mx-56 font-bold">
      총 지출: {totalAmount} 원
    </div>
  );
});

export default TotalAmount;
