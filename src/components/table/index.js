import { useTable } from "react-table";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    min-width: 40rem;
    width: 100%;
    overflow: hidden;
    border-radius: .8rem;
    box-shadow: ${({ theme }) => theme.elevation[9].shadow};
    background-color: ${({ theme }) => theme.colors.light[4]};
    margin-bottom: 4rem;
    thead tr {
      color: ${({ theme }) => theme.colors.dark[1]};
      background-color: ${({ theme }) => theme.colors.light[4]};
      text-align: left;
      font-size: 1.6rem !important;
    }
    th,
    td {
      padding: 0.8rem;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.dark[2]};
    }
    tbody tr {
      border-bottom: 1px solid #dddddd;
    }

    tbody tr:nth-of-type(odd) {
      background-color: #f3f3f3;
    }

    tbody tr:last-of-type {
      border-bottom: 2px solid ${({ theme }) => theme.colors.light[4]};
    }
    tbody tr.active-row {
      font-weight: bold;
      color: #009879;
    }
  }
`;
const Table = ({ columns, data }) => {
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data,
  });
  return (
    <Container>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default Table;
