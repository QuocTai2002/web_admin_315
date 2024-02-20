import { produce } from 'immer'
import * as typeAction from '../../constants/constant'
const initialState ={
    infoUser: null
}
export const userReducer = (state = initialState,{type,payload}) =>{
    return produce (state, draft =>{
        if(type === typeAction.SIGN_IN){
            draft.infoUser = payload
        };
       
    })
}