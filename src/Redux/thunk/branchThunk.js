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