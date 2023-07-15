import React, { useContext, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import MedContext from "../Store/MedStore/MedContext";

function MedicoFrom() {
  const MedCtx = useContext(MedContext);
  const medName = useRef();
  const medDescription = useRef();
  const medQuantity = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const name = medName.current.value;
    const des = medDescription.current.value;
    const quantity = medQuantity.current.value;
    const medData = {
      name,
      des,
      quantity,
    };
    MedCtx.addItem(medData);
    console.log(medData);
  };
  return (
    <Accordion className="mt-5">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="">
          <p className=" ms-5 fs-3 text-info fw-bold p-0 m-0">
            Add Product to store
          </p>
        </Accordion.Header>
        <Accordion.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Medicen</Form.Label>
              <Form.Control
                type="text"
                ref={medName}
                placeholder="Medicen Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                ref={medDescription}
                placeholder="description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label className="text-center">Quantity</Form.Label>
              <Form.Control
                type="number"
                ref={medQuantity}
                placeholder="Quantity"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MedicoFrom;
