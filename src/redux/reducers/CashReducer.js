import { REG_SUCCED } from "../../constantStore/constants";

const initialState ={
   user:[]
}

export const RegReducer = (state = initialState,action) =>{
    switch(action.payload){
        case REG_SUCCED:{
            const reg = action.payload.data 
            return{
                ...state,
                user,
            }  
        }
        default:{
           return state
        }
    }
}