import styled from "styled-components";
import Button from "../../../components/button";
import Text from "../../../components/Text";
import LottieAnimation from "../../../shared/lottie";
import code from "../../../assets/animations/playground.json";
import { useMediaQuery } from "react-responsive";
import { Plus } from "../../../assets/icons";
import { useState } from "react";
import PlaygroundModal from "../../../components/playground-modal";



const Container = styled.div`
  background: ${({ theme }) => theme.gradients[5]};
  padding: 2rem;
`;


const CreatePlayGroundModel = ({ children }) => {
  const [show, setSow] = useState(false);
  const open = () => setSow(true);
  const close = () => setSow(false);
  return (
    <div>
      <div onClick={open} style={{ display: "inline-block" }}>
        {children}
      </div>
      <PlaygroundModal method="post" path="/code" close={close} show={show} message="Playground Created successfully" />
    </div>
  );
};
const Header = () => {
  const isBigPhone = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <Container>
      <div className="wrapper">
        <Text center type="h1" bold color="light" mg="0">
          My Playgrounds
        </Text>
        <LottieAnimation lotti={code} width={isBigPhone ? "20rem" : "40rem"} />
        <div className="center">
          <CreatePlayGroundModel>
            <Button iconLeft type="light" circle withIcon={() => <Plus />} big>
              New Plaground
            </Button>
          </CreatePlayGroundModel>
        </div>
      </div>
    </Container>
  );
};

export default Header;
