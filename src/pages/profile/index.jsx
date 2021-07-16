import { useQuery } from "../../hooks/";
import { ProfileContainer } from "./elements/profile.style";
import ProfileInfo from "./elements/profile.info";
import ProfileMostRecent from './elements/profile.most-recent';
import ProfileRecentPlayGround from './elements/profile.playground';
import { useParams } from "react-router-dom";
import Messgae from "../../components/message/";
import Loading from "../../shared/loading/";
const Profile = () => {
	const { username } = useParams();
	const { data, isLoading, isError, error } = useQuery(
		["profile", username],
		"/user/profile/" + username
	);
	if (isLoading) return <Loading />;
	if (isError) return <Messgae subTitle={error?.message} />;
	if (data?._id ) {
		return (
			<div className="wrapper">
				<ProfileContainer>
					<div className="profile__info">
						<ProfileInfo user={data} />
						<ProfileRecentPlayGround />
					</div>
					<div className="profile__most-recent">
						<ProfileMostRecent uid={data?._id} id={data._id}/>
					</div>
				</ProfileContainer>
			</div>
		);
	}
	return null;
};

export default Profile;