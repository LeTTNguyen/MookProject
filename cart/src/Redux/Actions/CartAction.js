import { createNewCart, deleteAllProductAPI, deleteProductAPI, getlistCartAPI, updateQuantityAPI } from "../../API/CartApi";
import { GET_LIST_PRODUCT, UPDATE_QUANTITY } from "../Contants/ActionType";

export let actionCreateNewCartAPI = (cartNew) =>{
    return(dispath)=>{
        return createNewCart(cartNew).then((response)=>{
            //dispath action get cart API 
        })
    }
}

export let actionGetListProductAPI = (id) =>{
    return(dispath) => {
        return getlistCartAPI(id).then((response) =>{
            console.log('List Cart: ', response);
            dispath(actionListProductRedux(response));
        })
    }
}

export let actionListProductRedux = (listProductAPIParam) =>{
    return {type: GET_LIST_PRODUCT, payload: listProductAPIParam};
}

export let actionDeleteProductAPI =  (idProductDelete) =>{
    return(dispatch) =>{
        return deleteProductAPI(idProductDelete).then((response)=>{
            dispatch(actionGetListProductAPI("1"));//userId là 1
        })
    }
}


export let actionDeleteAllProduct = (userId_delete) =>{
    return (dispatch)=>{
        return deleteAllProductAPI(userId_delete).then((response)=>{
            dispatch(actionGetListProductAPI("1"));
        })
    }
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