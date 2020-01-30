import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Payment from './Payment'
import { NavLink } from 'react-router-dom';
import Cart from './cart'


const CartButton = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button style={{color : "black"}} onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
      <Cart/>
        </ModalBody>
        <ModalFooter>
        <NavLink to="/payment"><Button style ={{backgroundColor: "black"}} onClick={toggle}>Checkout </Button>{' '}</NavLink>
          <Button color="secondary" onClick={toggle}>Return</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CartButton;