import styled from "styled-components";
import { Divider } from "../divider";
import Text from "../Text";
import Button from "../button/";
const StyledBlogItem = styled.div`
  background: ${({ theme }) => theme.colors.light[4]};
  width: 100%;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: ${({ theme }) => theme.elevation[2].shadow};
  .blog {
    &__header {
      display: flex;
      align-items: center;
    }
    &__img {
      width: 5rem;
      height: 5rem;
      border-radius: 2.5rem;
      background: ${({ theme }) => theme.colors.purple[1]};
      margin-right: 1rem;
    }
    &__author {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        display: inline-block;
      }
      .name {
        font-size: 1.6rem;
        font-family: "Linotte";
        font-weight: 700;
      }
      .date {
        font-size: 1.4rem;
        font-family: "Linotte-Light";
        font-weight: 300;
        color: ${({ theme }) => theme.text3};
      }
    }
    &__tags {
      display: flex;
      flex-wrap: wrap;
    }
    &__tail {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const BlogItem = () => {
  return (
    <StyledBlogItem className="blog">
      <div className="blog__header">
        <div className="blog__img"></div>
        <div className="blog__author">
          <span className="name">username</span>
          <span className="date">date</span>
        </div>
      </div>
      <Divider mg="1.2rem 0" />
      <div className="blog__body">
        <div className="blog__title">
          <Text bold type="h3" size="2rem" mg="0">
            A Simple Approach To Using Console.log For Debugging
          </Text>
        </div>
        <div className="blog__tags">
          <Button link scale={false}>
            #javascript
          </Button>
          <Button link scale={false}>
            #console
          </Button>
          <Button link scale={false}>
            #debuggin
          </Button>
        </div>
        <Divider mg="1.2rem 0" />
        <div className="blog__tail">
          <div className="blog__comment">
            <Button scale={false} small>
              add Comment
            </Button>
          </div>
          <div className="blog__button">
            <Button scale={false} small>
              save
            </Button>
          </div>
        </div>
      </div>
    </StyledBlogItem>
  );
};

export default BlogItem;
