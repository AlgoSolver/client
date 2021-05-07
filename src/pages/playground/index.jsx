import styled from "styled-components";
import Editor from "./elements/editor";
import EditorHeader from "./elements/editor-header";
import Output from "./elements/output";
import EditorFooter from "./elements/editor-footer";
import Resizable from "../../components/resizable/";
import Head from "../../components/head/";
import Text from "../../components/Text/";
import { useEffect } from "react";
import { updateState, useQuery } from "../../hooks/";
import { useParams, useLocation } from "react-router-dom";
import Loading from "../../shared/loading";
const EditorContainer = styled.div`
  height: calc(100vh - 6.4rem);
  display: flex;
  overflow: hidden;
  .editor {
    width: calc(100% - 10px);
    height: calc(100vh - 6.4rem);
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .resize-horizontal {
    height: 100%;
    display: flex;
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
  .controller {
    flex: 1;
    background: ${({ theme }) => theme.colors.light[1]};
  }
`;

const ProblemNotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - ${({ theme }) => theme.sizes.nav});
  background: ${({ theme }) => theme.colors.dark[0]};
`;
const initial = `#include <iostream>;
using namespace std;
int main(){
cout<<"Hello, AlgoSolver!"<<endl;
return 0;
}`;
const ProblemNotFound = () => {
  return (
    <ProblemNotFoundContainer>
      <Text color="light" type="h1" size="8rem" layer={4}>
        404 Not Found
      </Text>
      <Text color="light" type="p" layer={2}>
        No playground found with this ID
      </Text>
    </ProblemNotFoundContainer>
  );
};
const SignedPlayground = ({ isSignedPlayground }) => {
  const { id } = useParams();
  const { isLoading, data } = useQuery("play-code", "/code/" + id, {
    cacheTime: 0,
  });
  useEffect(() => {
    if (data?.code) {
      updateState("playground-code", data.code);
    }
    return () => {
      updateState("playground-input", "");
      updateState("playground-code", "");
      updateState("playground-console", "");
    };
  }, [data?.code]);
  if (isLoading) {
    return <Loading />;
  }
  if (data?.code) {
    return (
      <EditorContainer>
        <Head title={data.name} description="user playground" />
        <Resizable direction="horizontal">
          <div className="editor">
            <EditorHeader
              isSignedPlayground={isSignedPlayground}
              id={id}
              name={data.name}
            />
            <Editor initialValue={data.code} />
            <EditorFooter />
          </div>
        </Resizable>
        <div className="controller">
          <Output />
        </div>
      </EditorContainer>
    );
  }
  return <ProblemNotFound />;
};
const UnSignedPlayground = ({ isSignedPlayground }) => {
  useEffect(() => {
    updateState("playground-code", initial);
    return () => {
      updateState("playground-input", "");
      updateState("playground-code", "");
      updateState("playground-console", "");
    };
  }, []);
  return (
    <EditorContainer>
      <Head title="Empty Playground" description="user playground" />
      <Resizable direction="horizontal">
        <div className="editor">
          <EditorHeader isSignedPlayground={isSignedPlayground} />
          <Editor initialValue={initial} />
          <EditorFooter />
        </div>
      </Resizable>
      <div className="controller">
        <Output />
      </div>
    </EditorContainer>
  );
};
const Playground = () => {
  const { pathname } = useLocation();
  if (pathname === "/playground/new/empty")
    return <UnSignedPlayground isSignedPlayground={false} />;
  return <SignedPlayground isSignedPlayground={true} />;
};

export default Playground;
