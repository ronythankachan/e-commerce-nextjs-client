import React from "react";
import Oval from "react-loading-icons/dist/components/oval";

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <Oval className="w-10 h-10" stroke="#000" fill="#000" />
    </div>
  );
};

export default Loading;
