import styled from "styled-components";
import Editor from "../../components/editor";
import Resizable from "../../components/resizable";
import { useProblem } from "../../hooks/problems";
import Message from "../../components/message";
import Loading from "../../shared/loading";
import client, { request } from "../../hooks/";
import { useAuth } from "../../hooks/user";
import Head from '../../components/head/'
import {
  ProblemSolution,
  ProblemSubmissions,
  ProblemDescription,
  Tabs,
} from "./elements";
import {
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import { useEffect, useCallback } from "react";
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
  return (
    <ProblemContainer>
      <Tabs />
      <Routes>
        <Route path="solution" element={<ProblemSolution />} />
        <Route path="description" element={<ProblemDescription content={description} />} />
        <Route path="submissions" element={<ProblemSubmissions />} />
        <Route path="*" element={<Navigate to="description" />} />
      </Routes>
    </ProblemContainer>
  );
};
const Problem = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useProblem(id);
  const auth = useAuth();

  const fetchSubmission = useCallback(async () => {
    try {
      await client.fetchQuery(
        [id, "submissions"],
        () => request(`/submissions/${id}/${auth?.data?._id}`, "get"),
        {
          cacheTime: 100000,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, [id, auth?.data?._id]);
  useEffect(() => {
    if(auth?.data?._id) fetchSubmission();
  }, [ fetchSubmission, auth?.data?._id]);
  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="wrapper">
        <Message subTitle={error?.message} type="red" />
      </div>
    );
  return (
    <PlaygroungWrapper>
      <Head title={data?.title} />
      <Resizable direction="horizontal">
        <ProblemRoutes description={data.description} />
      </Resizable>
      <Editor id={id} />
    </PlaygroungWrapper>
  );
};
export default Problem;
