import styled from 'styled-components';

export const ProfileContainer = styled.div` 
	display:flex;
	padding:2rem 0;
	gap:1rem;
	.profile__most-recent{
		flex:1
	}
`

export const ProfileInfoContainer = styled.div` 
	background:${({theme})=>theme.colors.light[4]};
	border-radius:1rem;
	min-width:300px;
	border-radius:1rem;
	box-shadow:${({theme})=>theme.elevation[10].shadow};
	margin-bottom:2rem;
	.header{
		padding:1rem 2rem;
		box-shadow:${({theme})=>theme.elevation[8].shadow};
	}
	.footer{
		padding:1rem 2rem;
	}
	.body{
		padding:1rem 2rem;
		box-shadow:${({theme})=>theme.elevation[8].shadow};
		display:flex;
		align-items:center;
		gap:.8rem;
		img{
			width:8rem;
			height:8rem;
			object-fit:cover;
			border-radius:9999px;
		}
	}
`
export const ProfileMostRecentContainer  =styled.div` 
	background:${({theme})=>theme.colors.light[4]};
	flex:1;
	.header{
		display:flex;
		padding:1rem;
		justify-content:space-between;
		align-items:center;
		box-shadow:${({theme})=>theme.elevation[8].shadow};
		&:hover{
			& > *{
				color:${({theme})=>theme.colors.blue[0]};
				fill:${({theme})=>theme.colors.blue[0]};
			}
		}
	}
 `