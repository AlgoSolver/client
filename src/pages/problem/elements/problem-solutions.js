import styled from "styled-components";
import { RenderedMarkdown } from "../../../components/markdown-previewer";

const ProblemSolutionContainer = styled.div`
  background: ${({ theme }) => theme.colors.light[4]};
  position: relative;
  height: 100%;
  padding: 2rem;
`;

export const ProblemSolution = ({content}) => {
  return (
    <ProblemSolutionContainer>
      <RenderedMarkdown content={content} />
    </ProblemSolutionContainer>
  );
};
