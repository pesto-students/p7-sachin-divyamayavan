
import * as actionTypes from "./action-type"

export const increaseValue=()=>{
    return{
        type: actionTypes.INCREMENT
    }
}

export const decreaseValue=()=>{
    return{
        type: actionTypes.DECREMENT
    }
}