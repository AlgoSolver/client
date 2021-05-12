import styled from "styled-components";
import { useTemp } from "../../hooks/problems";
import Text from "../../components/Text";
import { Link, useParams } from "react-router-dom";
import Loading from "../../shared/loading";
import { TextArea } from "../../components/form";
const SubmissionHeader = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.light[4]};
  box-shadow: ${({ theme }) => theme.elevation[2].shadow};
  border-radius: 1.2rem;
  .row {
    display: flex;
    justify-content: space-between;
    > div {
      margin: 0.2rem 0;
    }
  }
`;
const Submission = () => {
  const { id } = useParams();
  const { data, isLoading } = useTemp(
    ["submission", id],
    `/submissions/${id}`,
    { cacheTime: 1000 }
  );
  console.log(data);
  if (isLoading) return <Loading />;
  if (!data) return null;
  return (
    <div className="wrapper">
      <div className="line">
        <Link>
          <Text mg="1rem" type="h2" color="blue">
            {data.problem.title}
          </Text>
        </Link>{" "}
        <Text layer={1} type="h2">
          Submission
        </Text>
      </div>
      <SubmissionHeader>
        <div className="row">
          <div>
            <Text type="p" layer={2} inline>
              Status:
            </Text>
            <Text
              type="p"
              mg="0 0  0 0.8rem"
              inline
              color={data.status === "Accepted" ? "green" : "red"}
            >
              {data.status}
            </Text>
          </div>
          <div>
            <Text type="p" layer={2} inline>
              Run Time:
            </Text>
            <Text type="p" mg="0 0  0 0.8rem" inline>
              {data.usedTime} (ms)
            </Text>
          </div>
        </div>
        <div className="row">
          <div>
            <Text type="p" layer={2} inline>
              Submitted:
            </Text>
            <Text type="p" mg="0 0  0 0.8rem" inline>
              {new Date(data.createdAt).toLocaleString()}
            </Text>
          </div>
          <div>
            <Text type="p" layer={2} inline>
              Memroy Usage:
            </Text>
            <Text type="p" mg="0 0  0 0.8rem" inline>
              {data.usedMemory} (mg)
            </Text>
          </div>
        </div>
        <div className="row">
          <div>
            <Text type="p" layer={2} inline>
              Expected Complexity:
            </Text>
            <Text type="p" mg="0 0  0 0.8rem" inline>
              {data.expectedComplexity}
            </Text>
          </div>
          <div>
            <Text type="p" layer={2} inline>
              Language:
            </Text>
            <Text type="p" mg="0 0  0 0.8rem" inline>
              {data.language}
            </Text>
          </div>
        </div>
      </SubmissionHeader>
      <Text mg="1rem" type="h2">
        Code
      </Text>
      <TextArea value={data.sourceCode} big readOnly></TextArea>
    {data?.errorMessage && <Text type="p"><pre>{data.errorMessage}</pre></Text>}
    </div>
  );
};
export default Submission;
