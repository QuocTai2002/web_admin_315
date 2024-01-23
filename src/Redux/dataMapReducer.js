import { produce } from 'immer'

const initialState ={
    chiNhanh:null
}
export const dataMapReducer = (state = initialState,{type,payload}) =>{
    return produce (state, draft =>{
        if(type === 'DATA_MAP'){
            draft.chiNhanh = payload
        }
    })
}