import {ProfileInfoContainer} from './profile.style';
import Text from '../../../components/Text/'
const ProfileInfo = ({user})=>{
	return <ProfileInfoContainer>
		<div className="header">
			<Text type="h5" mg="0" layer={2}>
				Basic Info
			</Text>
		</div>
		<div className="body">
		  <div className="body__img"><img src={user.imgURL} alt={user.username} /></div>
		  <div className="body__info">
		  	<Text type="h4">
		  		{user.username}
		  	</Text>
		  </div>
		</div>
		<div className="footer">
		<Text type="h5" mg="0" layer="2">
		  		{user.email}
		 </Text>
		 </div>
	</ProfileInfoContainer>
}

export default ProfileInfo;