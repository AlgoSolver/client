import styled from "styled-components";
import ReactPaginate from "react-paginate";

const PaginatorContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.light[4]};
  border-radius: 0.8rem;
  box-shadow: ${({ theme }) => theme.elevation[9].shadow};
  margin-bottom: 4rem;
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    width: 100%;
    padding: 0.6rem 1rem;
    > li {
      color: ${({ theme }) => theme.colors.dark[2]};
      &.previous,
      &.next {
        flex: 1;
        a {
          width: auto;
          padding: 1rem;
          min-width: 8rem;
          border: none;
          background: ${({ theme }) => theme.colors.primary[0]};
          cursor: pointer;
          margin: 0 1rem;
          color: ${({ theme }) => theme.colors.light[4]};
          display: inline-flex;
        }
        &.disabled {
          a {
            background: ${({ theme }) => theme.colors.primary[3]};
            user-select: none;
          }
        }
      }
      &.next {
        text-align: right;
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
          color: ${({ theme }) => theme.colors.dark[0]};
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

const Paginator = ({ totalPages, onPageChange, initialPage }) => {
  return (
    <PaginatorContainer>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
        initialPage={initialPage}
      />
    </PaginatorContainer>
  );
};
export default Paginator;
