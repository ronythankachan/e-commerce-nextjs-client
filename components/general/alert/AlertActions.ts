export const showSuccessAlert = (message:string)=>{
    return {
        type: "SHOW_SUCCESS_ALERT",
        payload: { message},   
    }
}

export const showErrorAlert = (message:string)=>{
    return {
        type:"SHOW_ERROR_ALERT",
        payload:{message}
    }
}
export const removeAlert = ()=>{
    return {
        type:"REMOVE_ALERT",
    }
}