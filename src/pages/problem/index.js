import styled from "styled-components";
import { useParams } from "react-router-dom";
import Editor from "../../components/editor";
import Resizable from "../../components/resizable";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 6.4rem);
`;
const PlaygroungWrapper = styled.div`
  flex: 1;
  width: 100%;
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
    background: ${({theme})=>theme.colors.dark[2]};
  }
`;
const ProblemContainer = styled.div`
  background: ${({theme})=>theme.colors.light[0]};
  position: relative;
  height: 100%;
  width: calc(100% - 10px);
`;
const Problem = () => {
  const { id } = useParams();

  return (
    <Container>
      <PlaygroungWrapper>
        <Resizable direction="horizontal">
        <ProblemContainer>
          sfnjksdfsd
        </ProblemContainer>
        </Resizable>
          <Editor initialValue="// use show() instead of console.log();" />
      </PlaygroungWrapper>
    </Container>
  );
};
export default Problem;
