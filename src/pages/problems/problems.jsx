import styled from "styled-components";
import Text from "../../components/Text";
import { useProblems } from "../../hooks/problems";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../../shared/loading";
import Table from "../../components/table";
import Paginator from "../../components/paginator";
import Head from '../../components/head'
const Wrapper = styled.div`
  display: flex;
  .problems {
    flex: 1;
    margin-bottom: 1rem;
  }
`;
const Control = styled.div``;
const Sidebar = styled.div`
  width: 30rem;
`;

let columns = [
  {
    Header: "Title",
    accessor: "title",
    Cell: (x) => {
      return (
        <Text
          mg="0"
          pd="0"
          size="1.4rem"
          layer={2}
          style={{ display: "inline-block" }}
          type="h5"
        >
          <Link
            className="link"
            to={`/problems/${x.rowsById[x.cell.row.id]?.original?._id}`}
          >
            {x.cell.value}
          </Link>
        </Text>
      );
    },
  },
  // {
  //   Header: "Title",
  //   accessor: "problem.title",
  //   Cell: (x) => (
  //     <Problem
  //       values={x.cell.value}
  //       id={x.rowsById[x.cell.row.id]?.original?.problem._id}
  //       cell={x}
  //     />
  //   ),
  // },
  // {
  //   Header: "Status",
  //   accessor: "status",
  //   Cell: (x) => (
  //     <Status
  //       values={x.cell.value}
  //       id={x.rowsById[x.cell.row.id].original._id}
  //       cell={x}
  //     />
  //   ),
  // },
  {
    Header: "Time Limit",
    accessor: "timeLimit",
    Cell: (x) => {
      return (
        <Text
          mg="0"
          pd="0"
          size="1.4rem"
          layer={2}
          style={{ display: "inline-block" }}
          type="h5"
        >
          {x.cell.value}s
        </Text>
      );
    },
  },
];
const Problems = () => {
  const navigate = useNavigate();
  const loc = useLocation();
  let initialPage = +loc?.search?.split("=")[1];
  const { data, isLoading } = useProblems(initialPage || 1);
  //console.log(loc.search,data, isLoading, isError, error);
  const handlePageClick = (data) => {
    if (data?.selected >= 0)
      navigate(`/problems?page=${+data.selected + 1}`);
  };

  useEffect(() => {
    console.log(loc.search);
  }, [loc.search]);
  if (isLoading) return <Loading />;
  if (data?.docs)
    return (
      <>
        <Control>
          <Text type="h3">Control</Text>
        </Control>
        <Table columns={columns} data={data.docs} />
        <Paginator
          totalPages={data.totalPages}
          initialPage={initialPage - 1}
          onPageChange={handlePageClick}
        />
      </>
    );
  else return null;
};
const Main = () => {
  return (
    <Wrapper className="wrapper">
    <Head title="Problems" />
      <div className="problems">
        <Problems />
      </div>
      <Sidebar>
       
      </Sidebar>
    </Wrapper>
  );
};

export default Main;
