import New from "./elements/create-article";
import Preview from "./elements/preview-article";
import Hint from "./elements/markdown-hint";
import styled from "styled-components";
import Button from "../../components/button/";
import { useState } from "react";
const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 7.4rem);
`;

const NavContainer = styled.div`
  min-height: 5rem;
  display: flex;
  align-items: center;
  padding: 2rem 0;
`;

//const bar
const NewPost = () => {
  const [isNew, setNew] = useState(true);
  return (
    <div className="wrapper">
      <NavContainer>
        <Button
          type={isNew ? "primary" : "light"}
          onClick={() => setNew(true)}
          mg="0 .6rem 0 0"
        >
          New
        </Button>
        <Button
          type={!isNew ? "primary" : "light"}
          onClick={() => setNew(false)}
        >
          Preview
        </Button>
      </NavContainer>
      <Container>{isNew ? <PostForm /> : <Preview />}</Container>
    </div>
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

export default NewPost;
