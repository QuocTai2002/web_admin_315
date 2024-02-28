import * as typeAction from '../../constants/constant'
import { branchService } from '../../Services/branchService'

//FETCH BRANCH
export const getBranch = (key)  => async (dispatch) =>{
    try{
        const res = await branchService.fetchBranch(key);
        dispatch({
            type: typeAction.DATA_BRANCH,
            payload: res.data.content
        })
    } catch (err) {
        console.log(err);
    }

} 
//ADD BRANCH
export const addNewBranch = (form) => async (dispatch) => {
    try {
        await branchService.postBranch(form) 
        setTimeout(()=>{
            dispatch(getBranch("")) 
        },100)
         
    } catch (err) {
        console.log(err);
    }
}

//DELETE BRANCH 
export const deleteBranch  = (id) => async (dispatch) =>{
    try {   
        await branchService.deleteBranch(id);
        await dispatch(getBranch(""))
    } catch (err){
        console.log(err);
    }
}