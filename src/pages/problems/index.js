import styled from "styled-components";
import Text from "../../components/Text";
import { useProblems } from "../../hooks/problems";
import ReactPaginate from "react-paginate";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../../shared/loading";
import Table from "../../components/table";

const Wrapper = styled.div`
  display: flex;
  .problems {
    flex: 1;
  }
`;
const Control = styled.div``;
const Sidebar = styled.div`
  width: 30rem;
`;

const Paginator = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.light[1]};
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    width: 100%;
    padding: 1rem;
    > li {
      &.previous,
      &.next {
        a {
          width: auto;
          padding: 1rem;
          min-width: 8rem;
          border: none;
          background: ${({ theme }) => theme.colors.primary[0]};
          cursor: pointer;
          margin: 0 1rem;
          color: ${({ theme }) => theme.colors.light[4]};
        }
        &.disabled {
          a {
            background: ${({ theme }) => theme.colors.primary[3]};
            user-select: none;
          }
        }
      }
      a {
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1.5rem;
        margin: 0 0.2rem;
        font-size: 1.4rem;
        border: 2px solid transparent;
        transition: border-color 0.3s ease;
        cursor: pointer;
        &:hover {
          border-color: ${({ theme }) => theme.colors.primary[0]};
        }
      }
      &.active {
        a {
          border-color: ${({ theme }) => theme.colors.primary[0]};
        }
      }
      &.break-me {
        a {
          width: auto;
          font-size: 1.6rem;
          letter-spacing: 0.4rem;
          border: none;
          user-select: none;
        }
      }
    }
  }
`;
let columns = [
  {
    Header: "Title",
    accessor: "title",
    Cell: (x) => {
      return <Text mg="0"
        pd="0"
        size="1.4rem"
        layer={2}
         style={{ display: "inline-block" }} type="h5">
           <Link className="link" to={`/problems/${x.rowsById[x.cell.row.id]?.original?._id}`}>
          {x.cell.value}
        </Link>
        </Text>
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
      return <Text mg="0"
        pd="0"
        size="1.4rem"
        layer={2}
         style={{ display: "inline-block" }} type="h5">
          {x.cell.value}s
        </Text>
  },
  },
];
const Problems = () => {
  const history = useHistory();
  const loc = useLocation();
  let initialPage = +loc?.search?.split("=")[1];
  const { data, isLoading } = useProblems(initialPage || 1);
  //console.log(loc.search,data, isLoading, isError, error);
  const handlePageClick = (data) => {
    if (data?.selected >= 0)
      history.push(`/problems?page=${+data.selected + 1}`);
  };
  console.log(data)
  useEffect(() => {
    console.log(loc.search);
  }, [loc.search]);
  if (isLoading)
    return <Loading />
  if (data?.docs)
    return (
      <>
        <Control>
          <Text type="h3">Control</Text>
        </Control>
        <Table columns={columns} data={data.docs} />
          <Paginator>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={data.totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
              initialPage={initialPage - 1}
            />
          </Paginator>
      </>
    );
  else return null;
};
const Main = () => {
  return (
    <Wrapper className="wrapper">
      <div className="problems">
        <Problems />
      </div>
      <Sidebar>
        <Text type="h3">Sidebar</Text>
      </Sidebar>
    </Wrapper>
  );
};

export default Main;
