import { Fragment } from "react";
import styled from "styled-components";
import Text from "../../components/Text/";
import Article from "./elements/article";
import ContributeBox from "./elements/contribute-box";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import BlogHeader from "./elements/blog-header";
import { useQuery } from "../../hooks/";
import { Spinner } from "../../components/spinner/";
import Messgae from "../../components/message/";
import NewArticle from "../new-article";
import {ROLES} from '../../navigations/utils.js'
import ProtectedRoute from '../../navigations/protected-route'

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

const BlogRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Blog />} />
      <ProtectedRoute path="new-article" element={<NewArticle />} includedRoutes={
        [ROLES.STUDENT, ROLES.CONTENT_CREATOR, ROLES.ADMIN]
        } /> 
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  );
};

const BlogLoader = ({ search }) => {
  const { data, isLoading, error, isError } = useQuery(
    "articles",
    `/blog${search}`,
    { cacheTime: 0 }
  );
  console.log(data);
  if (isLoading) return <Spinner />;
  if (isError) return <Messgae subTitle={error?.message} />;
  return (
    <Fragment>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </Fragment>
  );
};
const Blog = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Fragment>
      <BlogHeader />
      <BlogContainer>
        <div className="row">
          <div className="row__board">
            <Text type="h3" size="2.7rem" bold>
              Articles
            </Text>
            <div className="row__board__container">
              <BlogLoader search={location.search} />
            </div>
          </div>
          <div className="row__sidebar">
            <ContributeBox />
          </div>
        </div>
      </BlogContainer>
    </Fragment>
  );
};

export default BlogRoutes;