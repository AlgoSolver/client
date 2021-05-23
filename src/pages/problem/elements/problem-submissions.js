import styled from "styled-components";
import Text from "../../../components/Text";

const ProblemSubmissionsContainer = styled.div`
  background: ${({ theme }) => theme.colors.light[4]};
  position: relative;
  height: 100%;
  padding: 2rem;
`;

export const ProblemSubmissions = () => {
  return (
    <ProblemSubmissionsContainer>
      <Text type="h3" center>
        Submissions
      </Text>
    </ProblemSubmissionsContainer>
  );
};
