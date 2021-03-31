import Table from "../../components/table";

let columns = [
  {
    Header: "Name",
    accessor: "show.name",
  },
  {
    Header: "Type",
    accessor: "show.type",
  },
];

let data = [
  {
    show: {
      name: 44813,
      type: "http://www.tvmaze.com/shows/44813/the-snow-spider",
    },
  },
  {
    show: {
      name: 44813,
      type: "http://www.tvmaze.com/shows/44813/the-snow-spider",
    },
  },
];
const UserSubmissions = () => {
  return (
    <div>
      hello
      <Table columns={columns} data={data} />
    </div>
  );
};

export default UserSubmissions;
