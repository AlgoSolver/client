import styled from "styled-components";
import Editor from "../../components/editor";
import Resizable from "../../components/resizable";
import Text from "../../components/Text";
import { useProblem } from "../../hooks/problems";
import Loading from "../../shared/loading";
import MarkdownPreviewer from "../../components/markdown-previewer";
import {
  Switch,
  Route,
  NavLink,
  Redirect,
  useParams,
  useRouteMatch,
} from "react-router-dom";
const PlaygroungWrapper = styled.div`
  height: calc(100vh - 6.4rem);
  display: flex;
  .react-resizable-handle {
    display: block;
    background-color: #37414b;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  .resize-horizontal {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
  .resize-vertical {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
  }
  .react-resizable-handle-n {
    top: 0;
    left: 0;
    height: 10px;
    width: 100%;
    cursor: row-resize;
    background: transparent;
    position: absolute;
    height: 40px;
  }

  .react-resizable-handle-e {
    width: 10px;
    min-width: 10px;
    height: 100%;
    cursor: col-resize;
    background: ${({ theme }) => theme.colors.dark[2]};
  }
`;
const ProblemContainer = styled.div`
  background: ${({ theme }) => theme.colors.light[4]};
  position: relative;
  height: 100%;
  width: calc(100% - 10px);
  overflow: hidden;
  .tabs {
    background: ${({ theme }) => theme.colors.light[0]};
    display: flex;
    justify-content: space-between;
    box-shadow: ${({ theme }) => theme.elevation[8].shadow};
    align-items: center;
    &__list {
      display: flex;
      align-items: center;
    }
    &__item {
      padding: 1.6rem 1rem;
      cursor: pointer;
      user-select: none;
      transition: background 0.2s;
      span {
        font-size: 1.4rem;
        font-weight: 300;
        color: ${({ theme }) => theme.colors.dark[2]};
      }
      &.active {
        background: ${({ theme }) => theme.colors.light[4]};
      }
    }
  }
`;
const ProblemDescriptionContainer = styled.div`
  background: ${({ theme }) => theme.colors.light[4]};
  position: relative;
  height: 100%;
  padding: 2rem;
`;

const Tabs = () => {
  let { url } = useRouteMatch();
  return (
    <div className="tabs">
      <div className="tabs__list">
        <NavLink
          as="div"
          to={`${url}/description`}
          className="tabs__item"
          activeClassNam="active"
        >
          <span>Description</span>
        </NavLink>
        <NavLink
          as="div"
          to={`${url}/submissions`}
          className="tabs__item"
          activeClassNam="active"
        >
          <span>Submissions</span>
        </NavLink>
        <NavLink
          as="div"
          to={`${url}/solution`}
          className="tabs__item"
          activeClassNam="active"
        >
          <span>Solution</span>
        </NavLink>
      </div>
    </div>
  );
};
const ProblemDescription = ({ content }) => {
  return (
    <ProblemDescriptionContainer>
      <MarkdownPreviewer content={content} />
    </ProblemDescriptionContainer>
  );
};
const ProblemSubmissions = () => {
  return (
    <ProblemDescriptionContainer>
      <Text type="h3" center>
        Submissions
      </Text>
    </ProblemDescriptionContainer>
  );
};
const ProblemSolution = () => {
  return (
    <ProblemDescriptionContainer>
      <Text type="h3" center>
        Solution
      </Text>
    </ProblemDescriptionContainer>
  );
};

const Problem = ({ description }) => {
  let { path } = useRouteMatch();
  return (
    <ProblemContainer>
      <Tabs />
      <Switch>
        <Route exact path={`${path}/solution`}>
          <ProblemSolution />
        </Route>
        <Route exact path={`${path}/description`}>
          <ProblemDescription content={description} />
        </Route>
        <Route exact path={`${path}/submissions`}>
          <ProblemSubmissions />
        </Route>
        <Redirect to={`${path}/description`} />
      </Switch>
    </ProblemContainer>
  );
};
const Main = () => {
  const { id } = useParams();
  const { data, isLoading } = useProblem(id);
  if (isLoading) return <Loading />;
  return (
    <PlaygroungWrapper>
      <Resizable direction="horizontal">
        <Problem description={data.description} />
      </Resizable>
      isLoading
      <Editor
        id={id}
        initialValue='#include "bits/stdc++.h";
using namespace std;
int main(){
}'
      />
    </PlaygroungWrapper>
  );
};
export default Main;
