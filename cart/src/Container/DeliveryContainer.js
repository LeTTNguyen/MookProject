import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeaderCart from '../Components/HeaderCart';
import UserInfo from '../Components/UserInfo';
import { useDispatch } from "react-redux";
import { actionCloseShowForm, actionShowForm } from '../Redux/Actions/FormAction';
import ConfirmOrder from '../Components/ConfirmOrder';


function DeliveryContainer(props) {
  let dispatchRedux = useDispatch();
  let onHandleCloseForm = () => {
    dispatchRedux(actionCloseShowForm());
  }
  let onHandleShowForm =()=>{
    dispatchRedux(actionShowForm());
  }
  

    return (
        <div>
      <Container>
        <HeaderCart></HeaderCart>
        <Row>
          <Col sm={8}>
            <UserInfo onHandleShowForm={onHandleShowForm} />
          </Col>
          <Col sm={4}>
          
          </Col>
        </Row>
        <ConfirmOrder
        onHandleCloseForm = {onHandleCloseForm}
        onHandleShowForm={onHandleShowForm}
        />
      </Container>
    </div>
    );
}

export default DeliveryContainer;