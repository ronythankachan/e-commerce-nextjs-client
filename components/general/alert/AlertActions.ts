export const showSuccessAlert = (dispatch: Function, message: string) => {
  dispatch({
    type: "SHOW_SUCCESS_ALERT",
    loading: true,
    payload: { message, loading: true },
  });
};

export const showErrorAlert = (dispatch: Function, message: string) => {
  dispatch({
    type: "SHOW_ERROR_ALERT",
    loading: false,
    payload: { message, loading: false },
  });
};

export const showDissapearingSuccessAlert = (
  dispatch: Function,
  message: string
) => {
  dispatch({
    type: "SHOW_SUCCESS_ALERT",
    payload: { message, loading: false },
  });
  setTimeout(() => {
    removeAlert(dispatch);
  }, 3000);
};

export const showDissapearingErrorAlert = (
  dispatch: Function,
  message: string
) => {
  dispatch({
    type: "SHOW_ERROR_ALERT",
    payload: { message, loading: false },
  });
  setTimeout(() => {
    removeAlert(dispatch);
  }, 3000);
};

export const removeAlert = (dispatch: Function) => {
  dispatch({
    type: "REMOVE_ALERT",
  });
};
