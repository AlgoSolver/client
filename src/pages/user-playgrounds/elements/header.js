import styled from "styled-components";
import Button from "../../../components/button";
import Text from "../../../components/Text";
import { Plus } from "../../../assets/icons";
import { useState } from "react";
import PlaygroundModal from "../../../components/playground-modal";

const Container = styled.div`
  background: ${({ theme }) => theme.gradients[5]};
  padding: 4rem 2rem;
  min-height:40vh;
  margin-bottom:2rem;
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
      <PlaygroundModal
        method="post"
        path="/code"
        close={close}
        show={show}
        message="Playground Created successfully"
      />
    </div>
  );
};
const Header = () => {
  return (
    <Container>
      <div className="wrapper">
        <Text center type="h1" bold color="light" mg="0 0 2rem 0">
          My Playgrounds
        </Text>
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
