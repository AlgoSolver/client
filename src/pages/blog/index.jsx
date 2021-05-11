import styled from "styled-components";
import Text from "../../components/Text/";
import Article from "./elements/article";
import ContributeBox from "./elements/contribute-box";

const BlogContainer = styled.div`
  width: 97rem;
  margin: 3rem auto;
  .row {
    display: flex;
    width: 100%;
    &__board {
      flex: 0 1 ${(8 / 12) * 100}%;
      flex-direction: column;
      &__container {
        display: flex;
        flex-direction: column;
        padding-right: 1rem;
        > :not(:last-child) {
          margin-bottom: 1.2rem;
        }
      }
    }
    &__sidebar {
      display: flex;
      flex: 1;
      flex-direction: column;
    }
  }
`;

const Blog = () => {
  return (
    <BlogContainer>
      <div className="row">
        <div className="row__board">
          <Text type="h3" size="2.7rem">
            Posts
          </Text>
          <div className="row__board__container">
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
        </div>
        <div className="row__sidebar">
          <ContributeBox />
        </div>
      </div>
    </BlogContainer>
  );
};

export default Blog;
