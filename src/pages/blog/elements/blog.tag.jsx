import { useQuery } from "../../../hooks/";
import { useParams } from "react-router-dom";
import Messgae from "../../../components/message/";
import { Spinner } from "../../../components/spinner/";
import Article from "./article";
import Text from "../../../components/Text/";
import {useRef,useEffect} from 'react';

const Tags = () => {
	const { tag } = useParams();
	const isMounted = useRef(false);
	const { data, isLoading, isError, error,isFetching,refetch } = useQuery(
		"tags",
		`/tag/articles/${tag}`,
		{ cacheTime: 0 }
	);
	useEffect(()=>{
		if(!isMounted.current){
			isMounted.current = true;
			return;
		}
		refetch();
		// eslint-disable-next-line
	},[tag])
	console.log(data);
	if (isLoading || isFetching) return <Spinner size="5rem" />;
	if (isError) return <Messgae subTitle={error?.message} />;
	if (data?.articles)
		return (
			<div className="row">
				<div className="row__board">
					<Text type="h3" size="3rem" bold>
						{tag}
					</Text>
					<div className="row__board__container">
						{data.articles.map((item) => (
							<Article key={item._id} data={item} />
						))}
					</div>
				</div>
			</div>
		);

	return null;
};

export default Tags;