import {ProfileMostRecentContainer} from './profile.style';
import {useQuery} from '../../../hooks/';
import Messgae from "../../../components/message/";
import {Spinner} from '../../../components/spinner/';
import {SubmissionsTable} from '../../user-submissions/';
import {Link} from 'react-router-dom';
import Text from '../../../components/Text/';
import {ArrowRight} from '../../../assets/icons/'
const ProfileMostRecent = ({uid})=>{
		const { data, isLoading, isError, error } = useQuery("most-recent-submissions",
		`/submissions/user/${uid}?page=0&limit=12`,
		{
			cacheTime:0
		}
	);
	if (isLoading) return <Spinner size="4rem" />;
	if (isError) return <Messgae subTitle={error?.message} />;
	return <ProfileMostRecentContainer>
		<Link to="submissions" className="header">
			<Text type="h4" mg="0">Most Recent Submissions</Text>
			<div> <ArrowRight /> </div>
		</Link>
		<SubmissionsTable data={data} />
	</ProfileMostRecentContainer>
}

export default ProfileMostRecent;