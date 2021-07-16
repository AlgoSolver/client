import { ProfileMostRecentContainer } from "./profile.style";
import { useQuery } from "../../../hooks/";
import Messgae from "../../../components/message/";
import { Spinner } from "../../../components/spinner/";
import { Link, useParams } from "react-router-dom";
import Text from "../../../components/Text/";
import { ArrowRight } from "../../../assets/icons/";
import Table from "../../../components/table";

let columns = [
	{
		Header: "Name",
		accessor: "name",
		Cell: (x) => {
			return (
				<Link
					className="link"
					to={`/playground/${
						x.rowsById[x.cell.row.id]?.original._id
					}`}
				>
					<Text mg="0" size="1.6rem" color="blue" type="h5">
						{x.cell.value}
					</Text>
				</Link>
			);
		},
	},
	{
		Header: "Last Updated",
		accessor: "updatedAt",
		Cell: ({ cell: { value } }) => (
			<Text mg="0" type="h6" size="1.6rem">
				{new Date(value).toLocaleDateString()}
			</Text>
		),
	},
];
const ProfileMostRecent = () => {
	const { username } = useParams();
	const { data, isLoading, isError, error } = useQuery(
		"most-recent-playground",
		`/code/user/${username}?page=1&limit=10`,
		{
			cacheTime: 0,
		}
	);
	if (isLoading) return <Spinner size="4rem" />;
	if (isError) return <Messgae subTitle={error?.message} />;
	if (data?.docs)
		return (
			<ProfileMostRecentContainer>
				<Link to="playgrounds" className="header">
					<Text type="h4" mg="0">
						Most Recent Codes
					</Text>
					<div>
						<ArrowRight />
					</div>
				</Link>
				<Table columns={columns} data={data?.docs || []} />
			</ProfileMostRecentContainer>
		);
	return null;
};

export default ProfileMostRecent;