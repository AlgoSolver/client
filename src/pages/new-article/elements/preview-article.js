import styled from "styled-components";
import Text from "../../../components/Text/";
import { Divider } from "../../../components/divider/";
import Button from "../../../components/button/";

import { Facebook1, Linkedin, Twitter1 } from "../../../assets/icons/";

import { useAuth } from "../../../hooks/user";
let marked = require("marked");

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 2rem;
  min-height: calc(100vh - 6.4rem);
  margin-bottom: 5rem;
  .preview {
    &__body {
      width: 100%;
      background: ${({ theme }) => theme.colors.light[4]};
      border-radius: 1.5rem;
      box-shadow: ${({ theme }) => theme.elevation[3]};
      padding: 2rem;
      font-size: 1.6rem;

      .content {
        max-width: 60.2rem;
        width: 100%;
        margin: 0 auto;
        font-family: Droid;
      }
      img {
        max-width: 100%;
        width: 100%;
      }
      h1 {
        font-size: 5.3rem;
        line-height: 1.15em;
        margin: 1rem 0;
      }
      h2 {
        font-size: 3.6rem;
        line-height: 1.5em;
        margin: 1rem 0;
      }
      h3 {
        font-size: 2.5rem;
        line-height: 1.5em;
        margin: 1rem 0;
      }
      h4 {
        font-size: 1.8rem;
        line-height: 1.5em;
        margin: 1rem 0;
      }
      b,
      strong {
        font-weight: 700;
      }
      h5 {
        font-size: 1.7rem;
        line-height: 1.55em;
        margin: 1rem 0;
      }
      h6 {
        font-size: 1.3rem;
        line-height: 1.5em;
        font-weight: 500;
        margin: 1rem 0;
      }
      p {
        font-style: normal;
        font-size: 1.6rem;
        line-height: 2.4rem;
        margin: 1em 0;
      }
      ul {
        list-style-type: disc;
      }
      ul,
      ol {
        padding-left: 2.5rem;
        margin: 1rem 0;
      }
      li {
        margin-bottom: 5px;
      }
      code {
        background: rgba(0, 0, 0, 0.1);
        color: ${({ theme }) => theme.colors.dark[1]};
        border-radius: 0.4rem;
        max-width: 100%;
        overflow-wrap: break-word;
        padding: 0.2rem 0.25rem;
      }
      a {
        color: ${({ theme }) => theme.colors.blue[1]};
      }
      pre {
        display: block;
        code {
          display: block;
          background: ${({ theme }) => theme.colors.dark[1]};
          color: ${({ theme }) => theme.colors.light[1]};
          padding: 1rem;
          border-radius: 0.6rem;
          margin: 1rem 0;
        }
      }
    }
  }
`;
const Tag = styled.div`
  display: flex;
  flex-wrap: flex;
  .tag__item {
    background: ${({ theme, no }) => theme.gradients[no]};
    color: #fff;
    padding: 0.4rem;
    border-radius: 0.4rem;
    font-size: 1.6rem;
    margin: 0.4rem;
  }
`;
const TagItem = styled.div`
  background: ${({ theme, no }) => theme.gradients[no]};
  color: #fff;
  padding: 0.4rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  margin: 0.4rem;
`;
const ShareRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .user-info {
    display: flex;
    align-items: center;
    img {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 9999px;
      margin-right: 0.6rem;
    }
  }
  .share-buttons {
    display: flex;
    align-items: center;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;
const ShareRow = () => {
  const user = useAuth();
  return (
    <ShareRowContainer>
      <div className="user-info">
        <img
          src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
          alt={user?.data?.username}
        />{" "}
        <Text pd="0 0 0 .6rem" type="p">
          {user?.data?.username}
        </Text>
      </div>
      <div className="share-buttons">
        <Button icon small type="light" fill>
          <Facebook1 />
        </Button>
        <Button icon type="light" small fill>
          <Twitter1 />
        </Button>
        <Button icon type="light" small fill>
          <Linkedin />
        </Button>
      </div>
    </ShareRowContainer>
  );
};
const Preview = () => {
  const header = localStorage.getItem("9753-header");
  const tags = localStorage.getItem("9753-tags");
  const content = localStorage.getItem("9753-content");
  const renderTags = () => {
    console.log(tags);
    return tags.split(",").map((item, idx) => (
      <TagItem key={idx} no={idx % 7} className="tag__item">
        #{item.trim()}
      </TagItem>
    ));
  };
  return (
    <Container>
      <div className="preview__body">
        <div className="content">
          {header && (
            <Text type="h1" center family="Droid" bold>
              {header}
            </Text>
          )}
          <Text
            type="p"
            family="Droid"
            size="1.4rem;"
            mg="0"
            color="dark"
            layer={2}
          >
            {new Date().toDateString()}
          </Text>
          <ShareRow />
          <Divider mg="1rem 0" />

          {content && (
            <div
              dangerouslySetInnerHTML={{
                __html: marked(content),
              }}
            ></div>
          )}
          {tags && <Tag>{renderTags()}</Tag>}
        </div>
      </div>
    </Container>
  );
};

export default Preview;