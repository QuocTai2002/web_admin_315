import { https } from "./config";

export const branchService = {
    fetchBranch : (key) => {
        return https.get(`/getBranch/?keyWord=${key}`)
    }
}