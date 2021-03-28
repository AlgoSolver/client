import styled from "styled-components";
import Text from "../../components/Text";
import { useProblems } from "../../hooks/problems";
import ReactPaginate from "react-paginate";
import { Link, useLocation,useHistory } from "react-router-dom";
import {useEffect} from 'react'
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
const ProblemsTable = styled.div`
  background: ${({ theme }) => theme.colors.light[4]};
  padding: 2rem;
  border-radius: 1.6rem;
  .table {
    display: table;
    width: 100%;
    &__row {
      display: table-row;
      vertical-align: baseline;
      transition: background 0.3s;
      &:nth-child(even) {
        background: ${({ theme }) => theme.colors.light[0]};
      }
      &:hover {
        background: ${({ theme }) => theme.colors.light[1]};
      }
    }
    &__cell {
      display: table-cell;
      vertical-align: middle;
      padding: 1rem;
      color: ${({ theme }) => theme.colors.dark[2]};
      font-size: 1.5rem;
      &:nth-child(2) {
        width: 100%;
        a {
          color: ${({ theme }) => theme.colors.blue[1]};
          transition: color 0.2s;
          &:hover {
            color: ${({ theme }) => theme.colors.blue[0]};
          }
        }
      }
    }
    .table__row_head {
      box-shadow: ${({ theme }) => theme.elevation[8].shadow};
      .table__cell {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.dark[1]};
      }
    }
  }
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

const Problems = () => {

  const history = useHistory();
  const loc = useLocation();
  let initialPage =+(loc?.search?.split('=')[1])
  const { data, isLoading } = useProblems(initialPage || 1 );
  //console.log(loc.search,data, isLoading, isError, error);
  const handlePageClick = (data) => {
    if(data?.selected >= 0 ) history.push(`/problems?page=${+data.selected +1}`)
  };
  useEffect(()=>{
    console.log(loc.search)
  },[loc.search])
  if (isLoading)
    return (
      <Text type="h3" center>
        Loading...
      </Text>
    );
  return (
    <>
      <Control>
        <Text type="h3">Control</Text>
      </Control>
      <ProblemsTable>
      <div className="table">
        <div className="table__row table__row_head">
          <div className="table__cell">#</div>
          <div className="table__cell">Title</div>
          <div className="table__cell">Difficulty</div>
          <div className="table__cell">Solution</div>
        </div>
        {data.docs.map((item, idx) => (
          <div className="table__row" key={item._id}>
            <div className="table__cell">{idx}</div>
            <div className="table__cell">
              <Link to={`/problems/${item._id}`}>{item.title}</Link>
            </div>
            <div className="table__cell">difficulty</div>
            <div className="table__cell">solution</div>
          </div>
        ))}
      </div>
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
          initialPage={initialPage -1 }
        />
      </Paginator>
    </ProblemsTable>
    </>
  );
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
