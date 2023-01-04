import { api } from "./api"
// lấy thông tin product theo orderId để lấy giá, tổng, số lượng
let getlistCartAPI = (userId) => {
    return api("GET","carts/userId/" + userId);
}

// hiển thị thông tin trong form thông tin vận chuyển
let addNewInfoUserToOrderListAPI = (newInfoTemp) =>{
    return api("POST", "carts/userId/",newInfoTemp);
}

// nút xóa sản phẩm
let deleteProductAPI = (productId) =>{
    return api("DELETE", "carts/productId/"+productId,null)
}
// nút xóa tất cả sản phẩm
let deleteAllProductAPI = (userId) =>{
    return api("DELETE", "carts/userId/"+userId,null)
}
// update số lượng
let updateQuantityAPI = (productId, userId, quantity) =>{
    return api("PUT",`carts?productId=${productId}&userId=${userId}`, {quantity});
}
export{getlistCartAPI,addNewInfoUserToOrderListAPI,deleteProductAPI,updateQuantityAPI,deleteAllProductAPI}