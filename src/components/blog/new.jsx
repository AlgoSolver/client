import styled from "styled-components";
import Button from "../button/";
import { useForm } from "react-hook-form";

const TitleField = styled.textarea`
  width: 100%;
  box-shadow: ${({ theme }) => theme.elevation[2].shadow};
  border-radius: 0.6rem;
  border: none;
  font-size: 4rem;
  font-family: "Avenir-bold";
  height: 10rem;
  padding: 2rem;
  resize: none;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.dark[3]};
  }
`;
const ContentField = styled.textarea`
  width: 100%;
  box-shadow: ${({ theme }) => theme.elevation[2].shadow};
  border-radius: 0.6rem;
  border: none;
  font-size: 1.7rem;
  height: 100%;
  padding: 2rem;
  font-family: "Linotte-bold";
  resize: none;
  color: ${({ theme }) => theme.colors.dark[1]};
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.dark[3]};
  }
`;
const TagsFiled = styled.input`
  width: 100%;
  box-shadow: ${({ theme }) => theme.elevation[2].shadow};
  border-radius: 0.6rem;
  border: none;
  font-size: 1.6rem;
  margin: 1rem 0;
  padding: 2rem;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.dark[3]};
  }
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  .form {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .content {
    flex: 1;
  }
`;
const Footer = styled.div`
  padding: 2rem;
`;
let headerTimer, tagsTimer, contentTimer;

const handleHeaderChange = (e) => {
  if (headerTimer) {
    clearTimeout(headerTimer);
  }
  headerTimer = setTimeout(() => {
    console.log("9753-header", e);
    localStorage.setItem("9753-header", e);
  }, 500);
};
const handleTagsChange = (e) => {
  if (tagsTimer) {
    clearTimeout(tagsTimer);
  }
  tagsTimer = setTimeout(() => {
    console.log("9753-tags", e);
    localStorage.setItem("9753-tags", e);
  }, 500);
};
const handleContentChange = (e) => {
  if (contentTimer) {
    clearTimeout(contentTimer);
  }
  contentTimer = setTimeout(() => {
    console.log("9753-content", e);
    localStorage.setItem("9753-content", e);
  }, 500);
};
const NewPost = ({ data }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (e) => console.log(e);
  return (
    <Container>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="header">
          <TitleField
            onChange={(e) => handleHeaderChange(e.target.value)}
            ref={register({
              required: true,
            })}
            name="header"
            placeholder="Write The Header Here..."
            defaultValue={data && data.header ? data.header : null}
          ></TitleField>
        </div>
        <div className="tags">
          <TagsFiled
            type="text"
            defaultValue={data && data.tags ? data.tags : null}
            onChange={(e) => handleTagsChange(e.target.value)}
            ref={register({
              required: true,
            })}
            name="tags"
            placeholder="add the tags, e.g : dp, math, linkedlist"
          />
        </div>
        <div className="content">
          <ContentField
            ref={register({
              required: true,
            })}
            name="content"
            className="content"
            onChange={(e) => handleContentChange(e.target.value)}
            placeholder="write your post here, in markedown"
            defaultValue={data && data.content ? data.content : null}
          />
        </div>
        <Footer>
          <Button>Publish</Button>
        </Footer>
      </form>
    </Container>
  );
};

export default NewPost;
