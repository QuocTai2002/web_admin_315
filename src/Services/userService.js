// import Password from "antd/es/input/Password";
import { https } from "./config";

export const UserService = {
    signIn: (infoUser) =>  https.post('/loginUser',infoUser),
    getAllbranch: () =>  https.get('/getBranch'),
};

// export const loginApi =  (form) => {
//     return https.post('/loginUser', form); 
// };

