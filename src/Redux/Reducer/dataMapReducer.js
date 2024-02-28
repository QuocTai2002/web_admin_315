import { produce } from 'immer'
import * as typeAction from '../../constants/constant'
const initialState ={
    infoBranch:null,
    chiNhanh:null
}
export const dataMapReducer = (state = initialState,{type,payload}) =>{
    return produce (state, draft =>{
        if(type === typeAction.DATA_BRANCH){
            draft.chiNhanh = payload
        }
        if(type === typeAction.INFO_BRANCH){
            draft.infoBranch = payload
        }
    })
}