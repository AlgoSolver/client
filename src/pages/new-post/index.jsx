import New from "../../components/blog/new";
import Preview from "../../components/blog/preview";

import styled from "styled-components";
import Button from "../../components/button/";
import { Divider } from "../../components/divider/";
import Text from "../../components/Text/";
import { useState } from "react";
const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 7.4rem);
`;
const HintContainer = styled.div`
  margin: 0 1rem;
  .hint {
    &__board {
      min-width: 30rem;
      background: ${({ theme }) => theme.colors.dark[2]};
      box-shadow: ${({ theme }) => theme.elevation[2].shadow};
      border-radius: 0.6rem;
      padding: 1rem;
      color: ${({ theme }) => theme.colors.light[4]};
    }
    &__row {
      display: flex;
      justify-content: space-between;
      margin: 0.4rem 0;
      font-size: 1.4rem;
    }
  }
`;
const NavContainer = styled.div`
  min-height: 5rem;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  button {
    margin: 0 1rem;
  }
`;

//const bar
const NewPost = () => {
  const [isNew, setNew] = useState(true);
  return (
    <>
      <NavContainer>
        <Button
          theme={isNew ? "primary" : "light"}
          text={!isNew}
          onClick={() => setNew(true)}
        >
          New
        </Button>
        <Button
          theme={!isNew ? "primary" : "light"}
          onClick={() => setNew(false)}
          text={isNew}
        >
          Preview
        </Button>
      </NavContainer>
      <Container>{isNew ? <PostForm /> : <Preview />}</Container>
    </>
  );
};

const PostForm = () => {
  const header = localStorage.getItem("9753-header");
  const tags = localStorage.getItem("9753-tags");
  const content = localStorage.getItem("9753-content");
  const data = { header, tags, content };
  return (
    <>
      <New data={data} />
      <Hint />
    </>
  );
};
const Hint = () => {
  return (
    <HintContainer>
      <Text center type="h4" bold>
        Markedown nutshell
      </Text>
      <div className="hint__board">
        <div className="hint__row">
          <div className="hint__column"># Header</div>
          <div className="hint__column2">H1 Header</div>
        </div>
        <div className="hint__row">
          <div className="hint__column">...</div>
          <div className="hint__column2">...</div>
        </div>
        <div className="hint__row">
          <div className="hint__column">###### Header </div>
          <div className="hint__column2">H6 Header</div>
        </div>
        <Divider mg="1rem" />
        <div className="hint__row">
          <div className="hint__column">*italics* or _italics_</div>
          <div className="hint__column2">
            <i>italics</i>
          </div>
        </div>
        <Divider mg="1rem" />
        <div className="hint__row">
          <div className="hint__column">**bold**</div>
          <div className="hint__column2">
            <strong>Bold</strong>
          </div>
        </div>
        <Divider mg="1rem" />
        <div className="hint__row">
          <div className="hint__column">[Link](https://...) </div>
          <div className="hint__column2">Link</div>
        </div>
        <Divider mg="1rem" />
        <div className="hint__row">
          <div className="hint__column">
            * item 1 <br />* item 2
          </div>
          <div className="hint__column2">
            <ul>
              <li>item 1</li>
              <li>item 2</li>
            </ul>
          </div>
        </div>
        <Divider mg="1rem" />
        <div className="hint__row">
          <div className="hint__column">
            1. item 1 <br />
            2. item 2
          </div>
          <div className="hint__column2">
            1. item 1 <br />
            2. item 2
          </div>
        </div>
        <Divider mg="1rem" />
        <div className="hint__row">
          <div className="hint__column"> > quoted text </div>
          <div className="hint__column2">quoted text</div>
        </div>
        <Divider mg="1rem" />
        <div className="hint__row">
          <div className="hint__column">`inline code` </div>
          <div className="hint__column2">inline code</div>
        </div>{" "}
        <Divider mg="1rem" />
        <div className="hint__row">
          <div className="hint__column">
            ```
            <br />
            code block
            <br />
            ```
          </div>
          <div className="hint__column2">code block</div>
        </div>
      </div>
    </HintContainer>
  );
};
export default NewPost;
