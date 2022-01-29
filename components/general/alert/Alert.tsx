import React, { useContext } from "react";
import { AlertContext } from "../../../pages/_app";

const Alert = () => {
  const [state, dispatch] = useContext(AlertContext);
  return state.visible && <div>{state.content}</div>;
};

export default Alert;
