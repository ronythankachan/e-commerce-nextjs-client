import React, { createContext, useReducer } from "react";
import { AlertCategories, AlertType } from "../../../types";
import { alertReducer } from "./alertReducer";

const intialState: AlertType = {
  message: "",
  loading: false,
  type: AlertCategories.NONE,
};

export const AlertContext = createContext(intialState);

const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(alertReducer, intialState);
  const value: any = [state, dispatch];
  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

export default AlertProvider;
