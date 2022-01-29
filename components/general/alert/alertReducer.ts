import { AlertCategories, AlertType } from "../../../types"
export const alertReducer =(state:AlertType,action:any)=>{
    switch(action.type){
        case 'SHOW_SUCCESS_ALERT':
            return {
                ...state,
                message:action.payload.message,
                type:AlertCategories.SUCCESS
            }
        case 'SHOW_ERROR_ALERT':
            return {
                ...state,
                message:action.payload.message,
                type:AlertCategories.ERROR
            }
        case 'REMOVE_ALERT':
            return{
                ...state,
                message:"",
                type:AlertCategories.NONE
            }
        default:
            return state
    }
}