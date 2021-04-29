import styled from "styled-components";
import Editor from "./elements/editor";
import EditorHeader from "./elements/editor-header";
import Output from "./elements/output";
import EditorFooter from "./elements/editor-footer";
import Resizable from "../../components/resizable/";
import { useEffect } from "react";
import { updateState,useQuery } from "../../hooks/";
import {useParams} from 'react-router-dom';
import Loading from '../../shared/loading'
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
    background: ${({ theme }) => theme.colors.dark[2]};
  }
  .controller {
    flex: 1;
    background: ${({ theme }) => theme.colors.light[1]};
  }
`;

const Playground = () => {
  const {id} = useParams();
  const {isLoading,data} = useQuery('play-code','/code/'+id,{cacheTime:0});
  useEffect(() => {
    if(data?.code){
      	updateState("playground-code", data.code);
    }
    return () => {
      updateState("playground-input", "");
      updateState("playground-code", "");
      updateState("playground-console", "");
    };
  }, [data?.code]);
  console.log(data)
  if(isLoading){
    return <Loading />
  }
  return (
    <EditorContainer>
      <Resizable direction="horizontal">
        <div className="editor">
          <EditorHeader id={id} name={data.name} />
          <Editor initialValue={data.code} />
          <EditorFooter />
        </div>
      </Resizable>
      <div className="controller">
        <Output />
      </div>
    </EditorContainer>
  );
};

export default Playground;
