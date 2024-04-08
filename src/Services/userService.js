// import Password from "antd/es/input/Password";
import { https } from "./config";


export const UserService = {
    signIn: (data) => {
        return https.post('/loginUser',data)
    },
};


export const loginApi =  (username, password) => {
    return https.post('https://admin315.vercel.app/api/v1/loginUser', {username, password}); 
};

