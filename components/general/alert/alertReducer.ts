import { AlertCategories, AlertType } from "../../../types";
export const alertReducer = (state: AlertType, action: any) => {
  switch (action.type) {
    case "SHOW_SUCCESS_ALERT":
      return {
        ...state,
        message: action.payload.message,
        loading: action.payload.loading,
        type: AlertCategories.SUCCESS,
      };
    case "SHOW_ERROR_ALERT":
      return {
        ...state,
        message: action.payload.message,
        loading: action.payload.loading,
        type: AlertCategories.ERROR,
      };
    case "REMOVE_ALERT":
      return {
        ...state,
        message: "",
        loading: false,
        type: AlertCategories.NONE,
      };
    default:
      return state;
  }
};
