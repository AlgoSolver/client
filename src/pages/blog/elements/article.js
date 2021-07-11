import styled from "styled-components";
import { Divider } from "../../../components/divider";
import Text from "../../../components/Text/";
import {Tags} from '../../../components/article-previewer/';
import {Link} from 'react-router-dom'
const StyledBlogItem = styled.div`
  background: ${({ theme }) => theme.colors.light[4]};
  width: 100%;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: ${({ theme }) => theme.elevation[2].shadow};
  .blog {
    &__header {
      display: inline-flex;
      align-items: center;
    }
    &__img {
      width: 5rem;
      height: 5rem;
      border-radius: 2.5rem;
      background: ${({ theme }) => theme.colors.purple[1]};
      margin-right: 1rem;
      overflow:hidden;
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

const BlogItem = ({data}) => {
  return (
    <StyledBlogItem className="blog">
      <Link className="blog__header" to={`/${data?.author?.username}`}>
        <div className="blog__img">
          <img src={data?.author?.imgURL} alt={data?.author?.username} />
        </div>
        <div className="blog__author">
          <span className="name">{data?.author?.username}</span>
          <span className="date">{new Date(data?.createdAt).toLocaleString()}</span>
        </div>
      </Link>
      <Divider mg="1.2rem 0" />
      <div className="blog__body">
        <div className="blog__title">
        <Link to={`/blog/${data._id}`}>
          <Text bold type="h3" size="3rem" mg="0">
            {data?.header}
          </Text>
          </Link>
        </div>
        
        <Divider mg=".5rem 0" />
        <div className="blog__tags">
          <Tags tags={data?.tags || []} />
        </div>
       {/* <div className="blog__tail">
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
        </div>*/}
      </div>
    </StyledBlogItem>
  );
};

export default BlogItem;
