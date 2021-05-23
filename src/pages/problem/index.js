import styled from "styled-components";
import Editor from "../../components/editor";
import Resizable from "../../components/resizable";
import { useProblem } from "../../hooks/problems";
import Message from "../../components/message";
import Loading from "../../shared/loading";
import {
  ProblemSolution,
  ProblemSubmissions,
  ProblemDescription,
  Tabs,
} from "./elements";
import {
  Switch,
  Route,
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
    background: ${({ theme }) => theme.colors.gray[1]};
    border: 1px solid ${({ theme }) => theme.colors.gray[2]};
    transition: background 0.2s ease;
    &:hover {
      background: ${({ theme }) => theme.colors.gray[0]};
    }
  }
`;
const ProblemContainer = styled.div`
  background: ${({ theme }) => theme.colors.light[4]};
  position: relative;
  height: 100%;
  width: calc(100% - 10px);
  overflow: auto;
`;

const ProblemRoutes = ({ description }) => {
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
const Problem = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useProblem(id);
  console.log(error);
  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="wrapper">
        <Message subTitle={error?.message} type="red" />
      </div>
    );
  return (
    <PlaygroungWrapper>
      <Resizable direction="horizontal">
        <ProblemRoutes description={data.description} />
      </Resizable>
      <Editor id={id} />
    </PlaygroungWrapper>
  );
};
export default Problem;
