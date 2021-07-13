import { useQuery } from "../../../hooks/";
import Messgae from "../../../components/message/";
import { Spinner } from "../../../components/spinner/";
import Article from "./article";
import ContributeBox from "./contribute-box";
import Text from "../../../components/Text/";
import {useEffect,useRef} from 'react';
const BlogLoader = ({ search }) => {
	const isMounted = useRef(false);
	const { data, isLoading, error, isError,isFetching,refetch } = useQuery(
		"articles",
		`/blog${search}`,
		{ cacheTime: 0 }
	);
	useEffect(()=>{
		if(!isMounted.current){
			isMounted.current = true;
			return;
		}
		refetch();
		// eslint-disable-next-line
	},[search])
	if (isLoading || isFetching) return <Spinner size="5rem" />;
	if (isError) return <Messgae subTitle={error?.message} />;
	if (data?.Blogs)
		return data?.Blogs.map((item) => (
			<Article key={item._id} data={item} />
		));
};

const BlogContainer = ({search}) => {
	return (
		<div className="row">
			<div className="row__board">
				<Text type="h3" size="2.7rem" bold>
					Articles
				</Text>
				<div className="row__board__container">
					<BlogLoader search={search} />
				</div>
			</div>
			<div className="row__sidebar">
				<ContributeBox />
			</div>
		</div>
	);
};

export default BlogContainer;