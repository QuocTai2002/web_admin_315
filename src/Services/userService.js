import { https } from "./config";

export const UserService = {
    signIn: (data) => {
        return https.post('/loginUser',data)
    },

};