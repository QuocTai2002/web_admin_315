import { https } from "./config";

export const branchService = {
    fetchBranch : (key) => {
        return https.get(`/getBranch/?keyWord=${key}`)
    },
    postBranch : (formData) => {
        return https.post(`/createBranch`,formData)
    },
    deleteBranch : (id) => {
        return https.delete(`/deleteBranch?id=${id}`)
    }
}