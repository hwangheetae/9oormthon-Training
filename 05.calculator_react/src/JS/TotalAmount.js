import React from "react";

function TotalAmount({ totalAmount }) {
  return (
    <div className="text-center my-5 text-2xl color text-right mx-40 font-bold">
      총 지출: {totalAmount}
    </div>
  );
}

export default TotalAmount;
