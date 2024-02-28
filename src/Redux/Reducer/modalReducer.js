import { produce } from 'immer'
import * as typeAction from '../../constants/constant'
const initialState ={
    modalDelete: null,
    modalAddBranch: false,
    loadingPage:false,
    modalDeleteBranch: false
}
export const modalReducer = (state = initialState,{type,payload}) =>{
    return produce (state, draft =>{
        if(type === typeAction.ON_LOADING_PAGE){
            draft.loadingPage = true
        };
        if(type === typeAction.OFF_LOADING_PAGE){
            draft.loadingPage = false
        };
        if(type === typeAction.OPEN_MODAL_ADD_BRANCH){
            draft.modalAddBranch = true
        };
        if(type === typeAction.CLOSE_MODAL_ADD_BRANCH){
            draft.modalAddBranch = false
        };
        if(type === typeAction.OPEN_MODAL_DELETE_BRANCH){
            draft.modalDeleteBranch = true
        };
        if(type === typeAction.CLOSE_MODAL_DELETE_BRANCH){
            draft.modalDeleteBranch = false
        };

    })
}