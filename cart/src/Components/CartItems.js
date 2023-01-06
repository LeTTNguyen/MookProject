import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Form,
  Image,
  Navbar,
  Row,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actionDeleteProductAPI, actionGetListProductAPI, actionUpdateQuantityAPI } from "../Redux/Actions/CartAction";
import { updateQuantityAPI } from "../API/CartApi";
import { AiFillDelete } from "react-icons/ai";

function CartItems(props) {
  //const { products } = data; // data tạm thời demo => lấy data từ bảng order detail
  
  
  const dispatch = useDispatch();
  // const [total, setTotal] = useState();
  let stateRedux = useSelector((state) => state);
  console.log("stateRedux:", stateRedux);
  let listProduct = useSelector(
    (state) => stateRedux.listProductRedux.listProduct
  );
   

  console.log(listProduct);
  // usbeEffect(() => {
  //   setTotal(
  //     listProduct.reduce((prev, current) => listProduct.productSalePrice? listProduct.productSalePrice: listProduct.productPrice * listProduct.quantity, 0)
  //   );
  // }, [total]);

  let handleClickDelete = (idProduct) => {
      dispatch(actionDeleteProductAPI(idProduct));
  }
  let onChangeQuantity = (event,productId)=>{
    console.log(event.target.value);
    console.log(event);
    console.log(productId);
    let quantity = event.target.value;
    dispatch(actionUpdateQuantityAPI(productId,"1",quantity));//userId 1
    
  }

  useEffect(() => {
    dispatch(actionGetListProductAPI("1"));// truyền userId vào
    console.log("hj");
  }, []);
  return (
    <>
      {listProduct &&
        listProduct.content &&
        listProduct.content.map((product) => (
        <Table key={product.productId}>
              <tbody>
                <tr>
                  <td>
                  <Image
                      // src="/images/jpgoods_61_345589.webp"
                      src={product.image1}
                      alt={product.productName}
                      class="float-left"
                      height="200px"
                    />
                  </td>
                  <td colSpan={2}>
                  <p className="text-sm-start fw-bold">
                          {product.productName}
                        </p>
                        <p className="text-sm-start">Size: L</p>
                        <p className="text-sm-start">
                          Giá:{" "}
                          {product.productSalePrice
                            ? product.productSalePrice
                            : product.productPrice}
                        </p>
                        <p className="text-sm-start">
                          {" "}
                          Số lượng
                          <Form.Select
                            size="sm"
                            onChange={(e) => {
                              onChangeQuantity(e, product.productId)
                            }}
                          >
                            
                            <option >{product.quantity ? product.quantity : 1}</option>
                            <option  value="1" >1</option>
                            <option  value="2">2</option>
                            <option  value="3">3</option>
                            <option  value="4">4</option>
                            <option  value="5">5</option>
                            <option  value="6">6</option>
                            <option  value="7">7</option>
                            <option  value="8">8</option>
                            <option  value="9">9</option>
                            <option  value="10">10</option>
                          </Form.Select>
                        </p>

                        <p className="text-sm-start " ><AiFillDelete onClick={()=> handleClickDelete(product.productId)}/></p>
                  </td>
                </tr>
              </tbody>
            </Table>
        ))}
    </>

    
  );
}

export default CartItems;
