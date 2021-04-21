import styled from 'styled-components';
import Button from '../../../components/button';
import Text from '../../../components/Text';
import LottieAnimation from "../../../shared/lottie";
import code from "../../../assets/animations/playground.json";
import { useMediaQuery } from "react-responsive";
import {Plus} from "../../../assets/icons";
import Modal from '../../../components/modal';
import {useState} from 'react';
import {TextInput} from '../../../components/form'
import {useForm} from 'react-hook-form'
import { checkErrors } from "../../../shared/libs/error-messages";

const Container = styled.div`
  background: ${({theme})=>theme.gradients[5]};
  padding: 2rem;
`

const ModalContent = ({open,close,show})=>{
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (e) => {
    console.log(e);
  };
  return <Modal show={show} onHide={close}>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Modal.Title>
      <Text type="h3" bold mg="0">
        Create New Playground
      </Text>
    </Modal.Title>
    <Modal.Body>
      <TextInput
        placeholder="Enter the name for your playground"
        type="text"
        name="name"
        register={register({
          required: true,
          maxLength:32,
          minLength:6
        })}
        error={checkErrors("name", errors)}
      />
    </Modal.Body>
    <Modal.Footer>
      <Button small  mg="0 1rem 0 0">
        Confirm
      </Button>
      <Button small buttonType="button" type="light" onClick={close}>
        Cancel
      </Button>
    </Modal.Footer>
  </form>
  </Modal>
}
const CreatePlayGroundModel = ({children})=>{
  const [show, setSow] = useState(false);
  const open = () => setSow(true);
  const close = () => setSow(false);
  return <div>
    <div onClick={open} style={{display:"inline-block"}}>
      {children}
    </div>
    <ModalContent close={close} show={show} open={open} />
  </div>
}
const Header = ()=>{
    const isBigPhone = useMediaQuery({ query: "(max-width: 767px)" });
  return <Container>
    <div className="wrapper">
        <Text center type="h1" bold color="light" mg="0">
          My Playgrounds
        </Text>
        <LottieAnimation lotti={code}  width={isBigPhone ? "20rem" : "40rem"} />
      <div className="center">
        <CreatePlayGroundModel>
          <Button iconLeft type="light" circle withIcon={()=><Plus />} big>
            New Plaground
          </Button>
        </CreatePlayGroundModel>
      </div>
    </div>
  </Container>
}

export default Header;
