import { AlertType } from "../../../pages/_app"

export const alertReducer =(state:AlertType,action:any)=>{
    switch(action.type){
        case 'SHOW_ALERT':
            return {
                ...state,
                content:action.payload.content,
                visible:true,
            }
        case 'HIDE_ALERT':
            return {
                ...state,
                content:"",
                visible:false
            }
        default:
            return state
    }
}