import styled from "styled-components";
import Text from "../../components/Text/";
import Modal from "../../components/modal/";
import Button from "../../components/button/";
import { useState } from "react";
const Container = styled.div`
  padding: 2rem;
  .body {
    padding: 2rem;
    background: #f2f2f2;
    border-radius: 20px;
  }
`;

const ModalExample = () => {
  const [show, setSow] = useState(false);
  const open = () => setSow(true);
  const close = () => setSow(false);
  return (
    <div>
      <Button onClick={open}>Open Modal</Button>
      <Modal show={show} onHide={close}>
        <Modal.Title>
          <Text type="h3" bold mg="0">
            Modal Title
          </Text>
        </Modal.Title>
        <Modal.Body>
          <Text type="p" bold mg="0" layer={2}>
            Lorem ipsum, dolor, sit amet consectetur adipisicing elit. At
            commodi saepe excepturi iste et, qui, blanditiis praesentium minima
            dolores obcaecati dolorem. Eius quaerat laboriosam, sunt adipisci
            vitae libero vero minima.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button small type="green" onClick={close} mg="0 1rem 0 0">
            Confirm
          </Button>
          <Button small type="light" onClick={close}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
const Modals = () => {
  return (
    <Container>
      <Text type="h1">Modals</Text>
      <div className="body">
        <ModalExample />
      </div>
    </Container>
  );
};

export default Modals;
