import React from "react";
import { Card, Container, ListGroup, Navbar, Table } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";

function Bill(props) {
  const dispatch = useDispatch();
  let stateRedux = useSelector((state) => state);
  console.log("stateRedux:", stateRedux);
  let listProduct = useSelector(
    (state) => stateRedux.listProductRedux.listProduct
  );

  // tổng đơn hàng
  let total1 = useSelector((state) => state.listProductRedux.total);
  // tổng số lượng
  let totalQ = useSelector((state) => state.listProductRedux.totalQuantity);

  return (
    <Card style={{ width: "auto" }}>
      <ListGroup>
        <ListGroup.Item>
          <Navbar>
            <Container>
              <Navbar.Brand>
                {listProduct &&
                  listProduct.content &&
                  listProduct.content.map((product) => (
                    <Table key={product.productId}>
                      <thead>
                        <tr>
                          <th>Sản phẩm</th>
                          <th>size</th>
                          <th>SL</th>
                          <th>Giá</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{product.productName}</td>
                          <td>L</td>
                          <td>{totalQ} x </td>
                          <td>
                            <CurrencyFormat
                              thousandSeparator={true}
                              displayType={"text"}
                              value={
                                product.productSalePrice
                                  ? product.productSalePrice
                                  : product.productPrice
                              }
                              decimalSeparator={"."}
                              suffix={"  VND"}
                              thousandSpacing={"3"}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  ))}
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text></Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </ListGroup.Item>
        <ListGroup.Item>
          <Navbar>
            <Container>
              <Navbar.Brand>Tổng tiền </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text style={{ color: "red", fontSize: 20 }}>
                  <CurrencyFormat
                    thousandSeparator={true}
                    displayType={"text"}
                    value={total1}
                    decimalSeparator={"."}
                    suffix={"  VND"}
                    thousandSpacing={"3"}
                  />
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Bill;
