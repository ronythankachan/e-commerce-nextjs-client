export const showSuccessAlert = (dispatch:Function,message:string)=>{

    dispatch({
        type: "SHOW_SUCCESS_ALERT",
        payload: { message},   
    })
}

export const showErrorAlert = (dispatch:Function,message:string)=>{
    dispatch({
        type:"SHOW_ERROR_ALERT",
        payload:{message}
    })
}

export const showDissapearingSuccessAlert = (dispatch:Function,message:string)=>{
    dispatch({
        type: "SHOW_SUCCESS_ALERT",
        payload: { message},   
    })
    setTimeout(()=>{
        removeAlert(dispatch)
    },3000)
}

export const showDissapearingErrorAlert = (dispatch:Function,message:string)=>{
    dispatch({
        type: "SHOW_SUCCESS_ALERT",
        payload: { message},   
    })
    setTimeout(()=>{
        removeAlert(dispatch)
    },3000)
}
export const removeAlert = (dispatch:Function)=>{
    dispatch({
        type:"REMOVE_ALERT"
    })
}