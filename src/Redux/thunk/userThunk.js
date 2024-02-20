import * as typeAction from '../../constants/constant'
import { UserService } from '../../Services/userService';
// LOGIN
export const getLoginInfo = (data,navigate) => async (dispatch) => {
    try {
        dispatch({
            type:typeAction.ON_LOADING_PAGE
        })
        const res = await UserService.signIn(data);
        await dispatch({
            type:typeAction.SIGN_IN,
            payload:res.data.data
        })
        
        setTimeout(()=>{
            dispatch({
                type:typeAction.OFF_LOADING_PAGE
            })
            navigate('/')
        },1000)
       
       
    } catch (err) {
        console.log(err);
    }
} 
