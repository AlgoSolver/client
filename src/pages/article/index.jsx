import { useQuery } from "../../hooks/";
import { useParams } from "react-router-dom";
import ArticlePreviewer from "../../components/article-previewer/";
import Loading from "../../shared/loading/";
import Message from "../../components/message/";
import NotFound from "../../components/not-found/";
import AddComment from './elements/article.add-comment';
import { useAuth } from "../../hooks/user";
import Comments from "./elements/article.comments";

const Article = () => {
	const { id } = useParams();
	const auth = useAuth(false);
	const { data, isLoading, isError, error } = useQuery(
		["article", id],
		`/blog/${id}`
	);
	console.log(data);
	if (isLoading) return <Loading />;
	if (isError) return <Message type="red" subTitle={error.message} />;
	if (data?.found === true) return <>
	<ArticlePreviewer live={true} data={data.blog} />
	<Comments  id={id} />
	{auth?.data?._id ? <AddComment id={id} user={auth.data} /> : null}
	</>
	if (data?.found === false)
		return <NotFound title="There is no article with id, may be it was deleted" />;
	return null;
};


export default Article;