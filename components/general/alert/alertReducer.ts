export const alertReducer =(state:any,action:any)=>{
    switch(action.type){
        case 'SHOW_ALERT':
            return {
                ...state,
                visible:true,
            }
        case 'HIDE_ALERT':
            return {
                ...state,
                visible:false
            }
        default:
            return state
    }
}