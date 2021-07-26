import styled from "styled-components";
import { RenderedMarkdown } from "../../../components/markdown-previewer";

const ProblemDescriptionContainer = styled.div`
  background: ${({ theme }) => theme.colors.light[4]};
  position: relative;
  height: 100%;
  padding: 2rem;
`;

export const ProblemDescription = ({ content }) => {
  return (
    <ProblemDescriptionContainer>
      <RenderedMarkdown content={content} />
    </ProblemDescriptionContainer>
  );
};
