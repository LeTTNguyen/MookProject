import { DELETE_CART_TEMP, DELETE_PRODUCT, GET_LIST_PRODUCT, UPDATE_QUANTITY } from "../Contants/ActionType";

let initialState = {
    listProduct: [],
    total: 0,
    totalQuantity: 0
    
  };
let CartReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST_PRODUCT:
            console.log(action.payload);
            const listProduct = action.payload;
            const sum = listProduct.content.reduce((a, c) => 
         a + (c.productSalePrice ? c.productSalePrice * c.quantity : c.productPrice * c.quantity)
      , 0 )
            const sumQuantity = listProduct.content.reduce((a,c)=> a + c.quantity,0)

            return{
                ...state,
                listProduct: action.payload,
                total: sum,
                totalQuantity: sumQuantity 

            }
        case DELETE_PRODUCT:
            console.log("productId: ", action.payload);
            let idDelete = action.payload;
            let listProduct_delete = state.listProduct;
            let indexDelete = listProduct_delete.findIndex((product) => action.productId === idDelete);
            listProduct_delete.splice(indexDelete,1);
            return{
                ...state,
                listProduct: listProduct_delete,
            }
        case DELETE_CART_TEMP:
                console.log("userId: ", action.payload);
                let userId_delete = action.payload; // xóa cart temp theo userId
                userId_delete.splice(userId_delete);
                return{
                    ...state,
                    listProduct: userId_delete,
                }
        case UPDATE_QUANTITY:
            let listUpdateQuantity = [...state.listProduct.content];
            console.log(listUpdateQuantity);
            
            let product = listUpdateQuantity.find((product) =>
                product.productId === action.payload.productId
            );
            console.log(product);
            console.log(action.payload);
            product.quantity = action.payload.quantity;
            console.log(product);
            console.log(state.listProduct.content);
            const s = listUpdateQuantity.reduce((a, c) => 
         a + (c.productSalePrice ? c.productSalePrice * c.quantity : c.productPrice * c.quantity)
      , 0 )
    console.log(s)
            return {
                ...state,
                listProduct: {
                    ...state.listProduct,
                    content: [...listUpdateQuantity]
                },
                total: s
                
            }
        default:
            return { ...state };
    }
}
export default CartReducer;