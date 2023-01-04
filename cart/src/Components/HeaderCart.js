import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import data from '../DataDEMO';


const HeaderCart = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  return (
    <Navbar bg="White" variant="light" style={{height:80}}>
    <Container>
    <Navbar.Brand href="#home" >THÔNG TIN GIỎ HÀNG</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
        <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              type="search"
              placeholder="Tìm kiếm sản phẩm..."
              className="m-auto"
              aria-label="Search"
              
            />
          </Navbar.Text>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login">Mark Otto</a>{/* Hiển thị tên đăng nhập */}
          </Navbar.Text>
        <NavbarCollapse> </NavbarCollapse>
          <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="light">
              <FaShoppingCart color="black" fontSize="25px" />
              <Badge>0</Badge>{/* đếm sản phẩm trong giỏ hàng */}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              
                <span style={{ padding: 10 }}>Giỏ hàng đang trống</span>

            </Dropdown.Menu>
          </Dropdown>
          </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default HeaderCart;