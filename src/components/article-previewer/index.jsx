import styled from "styled-components";
import Text from "../Text/";
import { Divider } from "../divider/";
import Button from "../button/";
import { Link } from "react-router-dom";
import { Facebook1, Linkedin, Twitter1 } from "../../assets/icons/";

import { useAuth } from "../../hooks/user";
let marked = require("marked");

const Container = styled.div`
	display: flex;
	width: 100%;
	padding-top: 2rem;
	min-height: calc(100vh - 6.4rem);
	margin-bottom: 5rem;
	.preview {
		&__body {
			width: 100%;
			background: ${({ theme }) => theme.colors.light[4]};
			border-radius: 1.5rem;
			box-shadow: ${({ theme }) => theme.elevation[3]};
			padding: 2rem;
			font-size: 1.6rem;

			.content {
				max-width: 80rem;
				width: 100%;
				margin: 0 auto;
				padding: 0 2rem;
				font-family: Droid;
			}
			img {
				max-width: 100%;
				width: 100%;
			}
			h1 {
				font-size: 5.3rem;
				line-height: 1.15em;
				margin: 1rem 0;
			}
			h2 {
				font-size: 3.6rem;
				line-height: 1.5em;
				margin: 1rem 0;
			}
			h3 {
				font-size: 2.5rem;
				line-height: 1.5em;
				margin: 1rem 0;
			}
			h4 {
				font-size: 1.8rem;
				line-height: 1.5em;
				margin: 1rem 0;
			}
			b,
			strong {
				font-weight: 700;
			}
			h5 {
				font-size: 1.7rem;
				line-height: 1.55em;
				margin: 1rem 0;
			}
			h6 {
				font-size: 1.3rem;
				line-height: 1.5em;
				font-weight: 500;
				margin: 1rem 0;
			}
			p {
				font-style: normal;
				font-size: 1.6rem;
				line-height: 2.4rem;
				margin: 1em 0;
			}
			ul {
				list-style-type: disc;
			}
			ul,
			ol {
				padding-left: 2.5rem;
				margin: 1rem 0;
			}
			li {
				margin-bottom: 5px;
			}
			code {
				background: rgba(0, 0, 0, 0.1);
				color: ${({ theme }) => theme.colors.dark[1]};
				border-radius: 0.4rem;
				max-width: 100%;
				overflow-wrap: break-word;
				padding: 0.2rem 0.25rem;
			}
			a {
				color: ${({ theme }) => theme.colors.blue[1]};
			}
			pre {
				display: block;
				code {
					display: block;
					background: ${({ theme }) => theme.colors.dark[1]};
					color: ${({ theme }) => theme.colors.light[1]};
					padding: 1rem;
					border-radius: 0.6rem;
					margin: 1rem 0;
				}
			}
		}
	}
`;
const Tag = styled.div`
	display: flex;
	flex-wrap: flex;	
`;
const TagItem = styled.div`
	font-size:15px;
	font-weight: 400;
	border-radius: 3px;
	color: #656565 !important;
	background: #f8f8f8;
	border: 1px solid #ccc;
	box-shadow: 0 1px 0 rgb(0 0 0 / 8%);
	text-shadow: none;
	line-height: 23px;
	padding: 1px 8px 0 5px;
	margin: 0.4rem;
`;
const ShareRowContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	.user-info {
		display: flex;
		align-items: center;
		img {
			width: 3.5rem;
			height: 3.5rem;
			border-radius: 9999px;
			margin-right: 0.6rem;
		}
	}
	.share-buttons {
		display: flex;
		align-items: center;
		svg {
			width: 2rem;
			height: 2rem;
		}
	}
`;
const ShareRow = ({author}) => {
	
	return (
		<ShareRowContainer>
			<div className="user-info">
				<img
					src={author?.imgURL || "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"}
					alt={author?.username}
				/>{" "}
				<Text pd="0 0 0 .6rem" type="p">
					{author?.username}
				</Text>
			</div>
			<div className="share-buttons">
				<Button icon small type="light" fill>
					<Facebook1 />
				</Button>
				<Button icon type="light" small fill>
					<Twitter1 />
				</Button>
				<Button icon type="light" small fill>
					<Linkedin />
				</Button>
			</div>
		</ShareRowContainer>
	);
};

export const Tags = ({tags})=>{
	return tags.map((item, idx) => (
			<Link to={`/blog/tags/${item}`}>
				<TagItem key={idx} no={idx % 7} className="tag__item">
					#{item.trim()}
				</TagItem>
			</Link>
		));
}
const Preview = ({ data, live = false }) => {
	const auth = useAuth();
	const renderTags = (tags) => {
		return tags.split(",").map((item, idx) => (
			<TagItem key={idx} no={idx % 7} className="tag__item">
				#{item.trim()}
			</TagItem>
		));
	};
	return (
		<Container>
			<div className="preview__body">
				<div className="content">
					{data.header && (
						<Text type="h1" center family="Droid" bold>
							{data.header}
						</Text>
					)}
					<Text
						type="p"
						family="Droid"
						size="1.4rem;"
						mg="0"
						color="dark"
						layer={2}
					>
						{data?.createdAt? new Date(data.createdAt).toDateString() : new Date().toDateString()}
					</Text>
					<ShareRow  author={live ? data.author : auth?.data}/>
					<Divider mg="1rem 0" />

					{data?.content && (
						<div
							dangerouslySetInnerHTML={{
								__html: marked(data.content),
							}}
						></div>
					)}
					<Divider />
					{data?.tags && (
						<Tag>
							{live
								? <Tags tags={data.tags} />
								: renderTags(data.tags)}
						</Tag>
					)}
				</div>
			</div>
		</Container>
	);
};

export default Preview;