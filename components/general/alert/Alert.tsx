import React, { useContext } from "react";
import { AlertCategories } from "../../../types";
import { AlertContext } from "./AlertProvider";

const Alert = () => {
  const value: any = useContext(AlertContext);
  const [state, dispatch] = value;

  if (state.type === AlertCategories.SUCCESS) {
    return (
      <div className="fixed right-4 bottom-4 bg-green-300 px-4 py-2 rounded-md">
        <p>{state.message}</p>
      </div>
    );
  } else if (state.type === AlertCategories.ERROR) {
    return (
      <div className="fixed right-4 bottom-4 bg-red-300 px-4 py-2 rounded-md">
        <p>{state.message}</p>
      </div>
    );
  }
  return null;
};

export default Alert;
