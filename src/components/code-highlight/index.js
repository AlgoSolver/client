import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";

const CodeContianer = styled.div`
  font-size: 1.6rem;
  font-family: MonoLisa;
`;
const CodeHighlight = ({ children }) => {
  return (
    <CodeContianer>
      <SyntaxHighlighter language="c" style={atomDark}>
        {children}
      </SyntaxHighlighter>
    </CodeContianer>
  );
};

export default CodeHighlight;
