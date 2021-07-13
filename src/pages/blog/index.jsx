import { Fragment } from "react";
import styled from "styled-components";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import BlogHeader from "./elements/blog-header";
import NewArticle from "../new-article";
import {ROLES} from '../../navigations/utils.js'
import ProtectedRoute from '../../navigations/protected-route'
import BlogArticle from '../article/';
import Tag from './elements/blog.tag';
import Articles from './elements/blog.container'
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
      <Route path=":id" element={<BlogArticle />} />
      <ProtectedRoute path="new-article" element={<NewArticle />} includedRoutes={
        [ROLES.STUDENT, ROLES.CONTENT_CREATOR, ROLES.ADMIN]
        } /> 
       <Route path="*" element={<Blog />} />
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  );
};


const Blog = () => {
  const location = useLocation();
  console.log(location.search);
  return (
    <Fragment>
      <BlogHeader />
      <BlogContainer>
        <Routes>
          <Route path="" element={<Articles search={location.search} />} />
          <Route path="tags/:tag" element={<Tag />} />
          <Route path="*" element={<Navigate to="*" />} />
        </Routes>
      </BlogContainer>
    </Fragment>
  );
};

export default BlogRoutes;