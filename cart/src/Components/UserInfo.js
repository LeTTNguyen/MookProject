import React from "react";
import { Button, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function UserInfo(props) {
  let {onHandleShowForm}=props;
  let onHandleClickShowForm = () =>{
    onHandleShowForm();
  }

  let navigate = useNavigate(); 
  const routeChangeToCart = () =>{ 
    let path = `/cart`; 
    navigate(path, {replace: true});
  }
  
  return (
    <Form>
      <Form.Label>
        <h2> THÔNG TIN GIAO HÀNG</h2>
      </Form.Label>
      <Form.Group
        as={Row}
        className="mb-3"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label className="text-left">Họ tên người nhận</Form.Label>
        <Col
          sm="15
              "
        >
          <Form.Control type="fullname" placeholder="name" />
        </Col>
        <Col> </Col>
      </Form.Group>

      <Navbar bg="light">
        <Container>
          <Navbar.Brand>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" placeholder="name@example.com" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3 text-left"
              controlId="formBasicPhone"
            >
              <Form.Label column sm="2">
                Điện thoại
              </Form.Label>
              <Col sm="8">
                <Form.Control type="phone" placeholder="phone number" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicAddress">
              <Form.Label column sm="5">
                Địa chỉ giao hàng
              </Form.Label>
              <Col sm="15">
                <Form.Control
                  as="textarea"
                  rows={4}
                  type="address"
                  placeholder="address"
                />
              </Col>
            </Form.Group>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />

      <Navbar>
        <Container>
          <Navbar.Brand>
            <Button variant="primary" type="submit" onClick={routeChangeToCart}>
              QUAY LẠI GIỎ HÀNG
            </Button>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end" >
            {/* <Navbar.Text>4</Navbar.Text> */}
            <Button variant="primary" type="submit" onclick={onHandleClickShowForm}>
              ĐẶT HÀNG
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </Form>
  );
}

export default UserInfo;
