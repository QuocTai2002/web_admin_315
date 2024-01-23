import { produce } from 'immer'

const initialState ={
    modalDelete: false
}
export const modalReducer = (state = initialState,{type,payload}) =>{
    return produce (state, draft =>{
        if(type === 'OPEN_MODAL_DELETE'){
            draft.modalDelete = true
        };
        if(type === 'CLOSE_MODAL_DELETE'){
            draft.modalDelete = false
        }
    })
}