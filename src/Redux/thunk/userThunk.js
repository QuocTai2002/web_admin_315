import * as typeAction from '../../constants/constant'
import { UserService } from '../../Services/userService';

// LOGIN
export const getLoginInfo = (data) => async (dispatch) => {
    try {
        console.log("demo");
        const res = await UserService.signIn(data);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
} 
