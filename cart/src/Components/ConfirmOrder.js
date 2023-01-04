//import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ConfirmOrder(props) {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow  = () => setShow(true);
  let navigate = useNavigate(); 
  const routeChangeToHome = () =>{ 
    let path = `/`; 
    navigate(path, {replace: true});
  }

  let {onHandleCloseForm} = props;
  let show=useSelector((state)=> state.showFormRedux.showForm);
  let onHandleClickClose = () =>{
    onHandleCloseForm();
  }

  return (
    <>
    {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={onHandleCloseForm}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận đặt hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có muốn đặt hàng</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHandleClickClose}>
            HỦY
          </Button>
          <Button variant="primary" onClick={routeChangeToHome}>
            XÁC NHẬN
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmOrder;