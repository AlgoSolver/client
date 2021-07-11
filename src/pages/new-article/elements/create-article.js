import styled from "styled-components";
import Button from "../../../components/button/";
import { useForm } from "react-hook-form";
import ErrorModal from "../../../components/error-modal/";
import Message from "../../../components/message/";
import {useNavigate} from 'react-router-dom'
import {useCallback,useState} from 'react';
import {useMutation} from '../../../hooks';
import toast from "react-hot-toast";
import Text from '../../../components/Text/'
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
    localStorage.setItem("9753-content", e);
  }, 500);
};

const resetInputs = ()=>{
   localStorage.removeItem("9753-content");
   localStorage.removeItem("9753-tags");
   localStorage.removeItem("9753-header");
}
const createNewPostErrors = (errors)=>{
  let returnedErrors=[];
  if(errors?.header){
    returnedErrors.push( errors.header.type === "required" ? "Header is Required." : "Header Must't contain special characters.")
  }
  if(errors?.tags){
    returnedErrors.push( "Provide at least one tag.");
  }
  if(errors?.content){
    returnedErrors.push( errors.content.type === "required" ? "Post Content is Required." : "the Length of the content must be more 250 and less than 3000.")
  }
  return returnedErrors;
}
const NewPost = ({ data }) => {
  const {isLoading,isError,error,mutate} = useMutation('/blog',"post")
  const { register, handleSubmit,errors } = useForm();
  const navigate = useNavigate();
  const [isOpen,setIsOpen] = useState(false);
  const hideModal = useCallback(()=>{
    setIsOpen(false);
  },[setIsOpen]);
  const onSubmit = (e) => {

    let { tags } = e;
    tags = tags.split(",").map((item) => item.replace(/\s/g, ""));
      mutate({...e,tags},{
        onSuccess:(data)=>{
          console.log(data);
          resetInputs();
          toast.success(<Text type="h4">The article has Published successfully</Text>);
          navigate('/blog/'+data.id);
        }
      });
  };
  const onError=()=>{
      setIsOpen(true);
  }
  let isThereError = errors?.tags || errors?.content || errors?.header;
  return (
    <>
    <Container>
    <ErrorModal show={isOpen} close={hideModal} list={isThereError ? createNewPostErrors(errors) : []}/>
      <form className="form" onSubmit={handleSubmit(onSubmit,onError)}>
      {isError ? <Message type="red" subTitle={error.message} /> : null }
        <div className="header">
          <TitleField
            onChange={(e) => handleHeaderChange(e.target.value)}
            ref={register({
              required: true,
              pattern: /^[A-Za-z0-9_.+-, ]/i,
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
              maxLength: 3000,
              minLength: 250,
            })}
            name="content"
            className="content"
            onChange={(e) => handleContentChange(e.target.value)}
            placeholder="write your post here, in markedown"
            defaultValue={data && data.content ? data.content : null}
          />
        </div>
        <Footer>
          <Button loading={isLoading}>Publish</Button>
        </Footer>
      </form>
    </Container>
    </>
  );
};

export default NewPost;
