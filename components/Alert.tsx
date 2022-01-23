import React, { useEffect } from "react";
import { BallTriangle } from "react-loading-icons";
import classname from "classnames";
const Alert = ({
  content,
  loading,
  type,
  visible,
}: {
  content: string;
  loading: boolean;
  type: string;
  visible: boolean;
}) => {
  if (!visible) return null;
  return (
    <div
      className={classname(
        "fixed",
        "bottom-2",
        "right-2",
        "p-4",
        "rounded-md",
        "flex gap-x-3",
        {
          "bg-green-500": type === "success",
          "bg-red-500": type === "error",
        }
      )}
    >
      {loading ? <BallTriangle className="w-5 h-5" /> : null}
      <p className="text-sm text-white font-bold">{content}</p>
    </div>
  );
};

export default Alert;
