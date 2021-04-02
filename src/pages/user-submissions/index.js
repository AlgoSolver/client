import Table from "../../components/table";
import styled from 'styled-components'
import Text from '../../components/Text'
import {useTemp} from '../../hooks/problems';
import {useAuth} from '../../hooks/user'
import Loading from '../../shared/loading'
import {Link} from 'react-router-dom'
const Container = styled.div`

`
// Custom component to render Genres
const Status = ({ values,id }) => {
  return (
    <Link to={`/submission/${id}`}>
     <span>
     <Text style={{display:"inline-block"}} type="h5" color={values === 'Accepted' ? "green": "red"}>
        {values}
     </Text>
     </span>
     </Link>
  );
}
const FormatDate = ({ value }) => {
  return (
     <span>
        {new Date(value).toLocaleString()}
     </span>
  );
}
const Problem = ({ values,id }) => {
  return (
    <Link to={`/problems/${id}`}>
     <span>
     <Text style={{display:"inline-block"}}  type="h5">
        {values}
     </Text>
     </span>
     </Link>
  );
}
let columns = [
  {
    Header: "Time Submitted",
    accessor: "createdAt",
    Cell:({cell:{value}})=><FormatDate value={value} />
  },
  {
    Header: "Title",
    accessor: "problem.title",
    Cell: (x) => <Problem values={x.cell.value} id={x.rowsById[x.cell.row.id]?.original?.problem._id} cell={x} />
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: (x) => <Status values={x.cell.value} id={x.rowsById[x.cell.row.id].original._id} cell={x} />
  },
  {
    Header: "Expected Complexity",
    accessor: "expectedComplexity",
  },
];



const UserSubmissions = () => {
  const {data:user} = useAuth();
  let id=0;
  if(user && user._id) id = user._id
  const {data:submissions, isLoading} = useTemp('submissions',"/submissions/user/" + id);
  console.log(submissions)
  if(isLoading) return <Loading />
  return (
    <Container className="wrapper">
      <Text type="h2">
           Submissions
      </Text>
      <Table columns={columns} data={submissions} />
    </Container>
  );
};

export default UserSubmissions;
