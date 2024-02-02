import { https } from "./config";

export const UserService = {
    signIn: (data) => {
        return https.get('/loginUser',data)
    },

};