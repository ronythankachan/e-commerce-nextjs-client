import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";
import React, { useContext } from "react";
import { BallTriangle } from "react-loading-icons";
import { AlertCategories } from "../../../types";
import { AlertContext } from "./AlertProvider";

const Alert = () => {
  const value: any = useContext(AlertContext);
  const [state] = value;

  if (state.type === AlertCategories.SUCCESS) {
    return (
      <div className="fixed right-4 bottom-4 bg-green-500 px-4 py-2 rounded-md flex items-center text-sm text-white gap-x-2 z-40">
        {state.loading ? (
          <BallTriangle className="w-5 h-5" stroke="#fff" />
        ) : (
          <CheckCircleIcon className="w-5 h-5" />
        )}
        <p>{state.message}</p>
      </div>
    );
  } else if (state.type === AlertCategories.ERROR) {
    return (
      <div className="fixed right-4 bottom-4 bg-red-500 px-4 py-2 rounded-md flex items-center text-sm text-white gap-x-2 z-40">
        <ExclamationCircleIcon className="w-5 h-5" />
        <p>{state.message}</p>
      </div>
    );
  }
  return null;
};
export default Alert;
