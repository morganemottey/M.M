import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const ModalPayment = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button style= {{backgroundColor :"black"}}  onClick={toggle}>Pay {buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} style={{border : "5px solid black"}}>
        <ModalHeader toggle={toggle}><img src={require("../img/mm.png")} style={{ "border": "2px solid black", "width": "55px" }} id="icon" alt="User Icon" /></ModalHeader>
        <ModalBody>
        <FormGroup>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Input type="card number" name="email" id="exampleEmail" placeholder="Card Number" />
      </FormGroup>
        </ModalBody>

        <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2"></Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="MM/YY" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2"></Label>
        <Input type="CVC" name="CVC" id="examplePassword" placeholder="CVC" />
      </FormGroup>
     
    </Form>

        <img src={require("../img/logos_payment_fr.png")} 
        style = {{margin : "0 auto" , width : "50%", "marginTop" : "5px"}}id="icon" alt="User Icon" />
        <ModalFooter>
          <Button style= {{"backgroundColor": 'black'}} onClick={toggle}>Confirm</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalPayment;