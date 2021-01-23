import styled from "styled-components";
import Text from "../Text";

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
      border-radius: 0.6rem;
      box-shadow: ${({ theme }) => theme.elevation[2]};
      padding: 2rem;
      font-size: 1.6rem;
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
      }
      ul {
        list-style-type: disc;
      }
      ul,
      ol {
        padding-left: 2.5rem;
        margin: 1rem 0;
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
        {header && (
          <Text type="h1" size="6rem" bold>
            {header}
          </Text>
        )}
        {tags && <Tag>{renderTags()}</Tag>}
        <div
          dangerouslySetInnerHTML={{
            __html: marked(content),
          }}
        ></div>
      </div>
    </Container>
  );
};

export default Preview;
