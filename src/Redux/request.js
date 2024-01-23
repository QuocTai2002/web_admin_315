import { https } from "../Services/config"

//########## LẤY DANH SÁCH ĐỊA CHỈ MAP ############
export const getDataMapNhi = (id) => async (dispatch) =>{
    console.log(id);
    const dataNhi = await https.get(`/?id=${id}`)
    dispatch({
        type: 'DATA_MAP',
        payload: dataNhi.data[0].ChiNhanhHCM
    })
    console.log(dataNhi.data);
}
//########### UP DANH SÁCH ĐỊA CHỈ ################
export const postdatamapNhi = async (data) =>{

//  console.log(newDataNhi.data);
}
//############# MỞ MODAL DELETE ######################3

export const openModalDelete = async (dispatch) =>{
    dispatch({
        type: 'OPEN_MODAL_DELETE'
    })
}
//############# ĐÓNG MODAL DELETE ######################3

export const closeModalDelete = async (dispatch) =>{
    dispatch({
        type: 'CLOSE_MODAL_DELETE'
    })
}
//############ XÓA DANH SÁCH #####################3
// export const deletedataMap = async () =>{
//     await https.delete('/5')
// }