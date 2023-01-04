import { deleteAllProductAPI, deleteProductAPI, getlistCartAPI, updateQuantityAPI } from "../../API/CartApi";
import { DELETE_CART_TEMP, DELETE_PRODUCT, GET_LIST_PRODUCT, UPDATE_QUANTITY } from "../Contants/ActionType";



export let actionGetListProductAPI = (id) =>{
    return(dispath) => {
        return getlistCartAPI(id).then((response) =>{
            console.log('hihjff', response);
            dispath(actionListProductRedux(response));
        })
    }
}

export let actionListProductRedux = (listProductAPIParam) =>{
    return {type: GET_LIST_PRODUCT, payload: listProductAPIParam};
}

export let actionDeleteProductAPI =  (idDelete) =>{
    return(dispatch) =>{
        return deleteProductAPI(idDelete).then((response)=>{
            dispatch(actionDeleteProductRedux(idDelete));
        })
    }
}
export let actionDeleteProductRedux = (idDelete) =>{
    return {type: DELETE_PRODUCT, payload: idDelete};
}

export let actionDeleteAllProduct = (userId_delete) =>{
    return (dispatch)=>{
        return deleteAllProductAPI(userId_delete).then((response)=>{
            dispatch(actionDeleteAllProductRedux(userId_delete));
        })
    }
}
export let actionDeleteAllProductRedux = (userId_delete) =>{
    return {type: DELETE_CART_TEMP, payload: userId_delete};
}

export let actionUpdateQuantityAPI = (productId, userId,quantityNew)=>{
    return (dispatch) =>{
        return updateQuantityAPI(productId, userId,quantityNew).then((response)=>{
            dispatch(actionUpdateQuantityRedux(productId,quantityNew));
        })
    }

}

export let actionUpdateQuantityRedux = (productId,quantity) =>{
    return {type: UPDATE_QUANTITY, payload: {
        productId, quantity
    }};
}