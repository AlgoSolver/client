import Table from "../../components/table";
import styled from "styled-components";
import Text from "../../components/Text";
import { useTemp } from "../../hooks/problems";
import { useAuth } from "../../hooks/user";
import Loading from "../../shared/loading";
import { Link } from "react-router-dom";

const Container = styled.div``;
// Custom component to render Genres
const Status = ({ values, id }) => {
  return (
    <Link to={`/submission/${id}`}>
      <span>
        <Text
          style={{ display: "inline-block" }}
          type="h5"
          size="1.4rem"
          color={values === "Accepted" ? "green" : "red"}
          mg="0"
          pd="0"
        >
          {values}
        </Text>
      </span>
    </Link>
  );
};
const FormatDate = ({ value }) => {
  return <span>{new Date(value).toLocaleString()}</span>;
};
const Problem = ({ values, id }) => {
  return (
    <Text
      mg="0"
      pd="0"
      size="1.4rem"
      layer={2}
      style={{ display: "inline-block" }}
      type="h5"
    >
      <Link className="link" to={`/problems/${id}`}>
        {values}
      </Link>
    </Text>
  );
};
let columns = [
  {
    Header: "Time Submitted",
    accessor: "createdAt",
    Cell: ({ cell: { value } }) => <FormatDate value={value} />,
  },
  {
    Header: "Title",
    accessor: "problem.title",
    Cell: (x) => (
      <Problem
        values={x.cell.value}
        id={x.rowsById[x.cell.row.id]?.original?.problem._id}
        cell={x}
      />
    ),
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: (x) => (
      <Status
        values={x.cell.value}
        id={x.rowsById[x.cell.row.id].original._id}
        cell={x}
      />
    ),
  },
  {
    Header: "Expected Complexity",
    accessor: "expectedComplexity",
  },
];

let timer;
const UserSubmissions = () => {
  const { data: user } = useAuth();
  let id = 0;
  if (user && user._id) id = user._id;

  const { data: submissions, isLoading, refetch } = useTemp(
    "submissions",
    "/submissions/user/" + id
  );
  console.log(submissions);
  if (submissions && submissions[0]?.status === "Pending") {
    if (timer) {
      clearTimeout(timer);
    }
    if (submissions && submissions[0]?.status === "Pending") {
      timer = setTimeout(() => refetch(), 5000);
    }
  } else {
    if (timer) {
      clearTimeout(timer);
    }
  }
  if (isLoading) return <Loading />;
  return (
    <Container className="wrapper">
      <Text type="h2">Submissions</Text>
      <Table columns={columns} data={submissions} />
    </Container>
  );
};

export default UserSubmissions;
