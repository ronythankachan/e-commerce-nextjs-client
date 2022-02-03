import React from "react";
import Bars from "react-loading-icons/dist/components/bars";

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <Bars className="w-16 h-16" stroke="#000" fill="#000" />
    </div>
  );
};

export default Loading;
