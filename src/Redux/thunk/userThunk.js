import * as typeAction from '../../constants/constant'
import { UserService } from '../../Services/userService';
// LOGIN
export const getLoginInfo = (infoUser,navigate) => async (dispatch) => {
    try {
        dispatch({
            type:typeAction.ON_LOADING_PAGE
        })
        const result = await UserService.signIn(infoUser); // gọi api 
        localStorage.setItem("access_Token", result.data.access_Token)
        console.log(result);
        await dispatch({
            type:typeAction.SIGN_IN,
            payload:result.data.data
        })
        // để làm đẹp form đăngj
        navigate('/admin')
        dispatch({
                    type:typeAction.OFF_LOADING_PAGE
                })
        // setTimeout(()=>{
        //     dispatch({
        //         type:typeAction.OFF_LOADING_PAGE
        //     })
        //     navigate('/')
        // },1000)     
       
    } catch (err) {
        dispatch({
            type:typeAction.OFF_LOADING_PAGE
        })
        console.log(err);
    }
} 
