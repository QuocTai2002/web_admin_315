import * as typeAction from '../../constants/constant'
import { branchService } from '../../Services/branchService'
import { UserService } from '../../Services/userService';

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
//getAllbranch
export const fetchBranch = ()  => async (dispatch) =>{
    try{
        const res = await UserService.getAllbranch();
        console.log(res)
        dispatch({
            type: 'branch',
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