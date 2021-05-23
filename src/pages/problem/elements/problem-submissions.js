import styled from "styled-components";
import { Spinner } from "../../../components/spinner";
import { useQuery } from "../../../hooks";
import { useAuth } from "../../../hooks/user";
import Message from "../../../components/message";
import { useParams } from "react-router-dom";
import { SubmissionsTable } from "../../user-submissions";
const ProblemSubmissionsContainer = styled.div`
  background: ${({ theme }) => theme.colors.light[4]};
  position: relative;
  height: 100%;
  padding: 2rem;
`;

const ProblemSubmissionsLogic = ({ pid, uid }) => {
  const { data, isLoading, isError, error } = useQuery(
    [pid, "submissions"],
    `/submissions/${pid}/${uid}`
  );
  console.log(data, pid, isLoading);
  if (isLoading) return <Spinner size="5rem" layer={0} />;
  if (isError) return <Message type="red" subTitle={error?.message} />;
  return <SubmissionsTable data={data} exclude={1} />;
};
export const ProblemSubmissions = () => {
  const { id } = useParams();
  const auth = useAuth();
  console.log(auth.data);
  return (
    <ProblemSubmissionsContainer>
      {!auth?.data?._id ? (
        <Message
          type="yellow"
          subTitle="you have to login to see your submission for this problemd"
        />
      ) : (
        <ProblemSubmissionsLogic pid={id} uid={auth?.data?._id} />
      )}
    </ProblemSubmissionsContainer>
  );
};
