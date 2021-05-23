import styled from "styled-components";
import Text from "../../../components/Text";

const ProblemSolutionContainer = styled.div`
  background: ${({ theme }) => theme.colors.light[4]};
  position: relative;
  height: 100%;
  padding: 2rem;
`;

export const ProblemSolution = () => {
  return (
    <ProblemSolutionContainer>
      <Text type="h3" center>
        Solution
      </Text>
    </ProblemSolutionContainer>
  );
};
