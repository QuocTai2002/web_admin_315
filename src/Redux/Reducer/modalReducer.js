import { produce } from 'immer'
import * as typeAction from '../../constants/constant'
const initialState ={
    modalDelete: null,
    loadingPage:false
}
export const modalReducer = (state = initialState,{type,payload}) =>{
    return produce (state, draft =>{
        if(type === typeAction.ON_LOADING_PAGE){
            draft.loadingPage = true
        };
        if(type === typeAction.OFF_LOADING_PAGE){
            draft.loadingPage = false
        }
    })
}