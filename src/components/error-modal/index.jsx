import Modal from '../modal';
import Button from '../button';
import Text from '../Text';
import styled from 'styled-components';

const ErrorList = styled.ul`
    margin-left:3rem;
    li{
      font-size:16px;
      text-transform:capitalize;
      &::marker{
        color:${({theme})=>theme.colors.red[0]};
      }
    }
`
const ErrorModal = ({show,close,list}) => {
  return (
      <Modal show={show} onHide={close}>
        <Modal.Title>
          <Text type="h3" bold mg="0" color="red">
            Error
          </Text>
        </Modal.Title>
        <Modal.Body>
         <ErrorList>
           {
             list?.length ? list.map(error=><li key={error}>{error}</li>) : null
           }
         </ErrorList>
        </Modal.Body>
        <Modal.Footer>
          <Button small type="light" onClick={close}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default ErrorModal;
