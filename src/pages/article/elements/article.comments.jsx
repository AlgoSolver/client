import styled from 'styled-components';
import { useQuery } from '../../../hooks';
import Messgae from '../../../components/message';
import { Spinner } from '../../../components/spinner';
import Text from '../../../components/Text';
import { Link } from 'react-router-dom';

const CommentsContainer = styled.div`
    padding-top:4rem;
    background: ${({theme})=>theme.colors.light[4]};
    .comment{
       box-shadow:${({theme})=>theme.elevation[8].shadow};
       margin-bottom: 1rem;
       &__header{
           display: inline-flex;
           align-items: center;
           &--img{
              margin-right: 1rem;
               img{
                width: 7rem;
                height: 7rem;
                border-radius: 9999rem;
                object-fit: cover;
               }
           }
       }
       &__body{
           padding: 1rem .6rem;
       }
    }
`

const Comment = ({comment})=>{
    return <div className="comment">
        <Link className="comment__header" to={`/${comment?.author?.username}`} title={comment?.author?.username}>
            <div className="comment__header--img">
                <img src={comment?.author?.imgURL} alt={comment?.author?.username} />
            </div>
            <div className="comment__header--info">
                <Text type="h4" bold mg="0">
                    {comment?.author?.username}
                </Text>
                <Text type="span">
                    {comment.createdAt ? new Date(comment.createdAt).toLocaleString() : null}
                </Text>
            </div>
        </Link>
        <div className="comment__body">
            <Text type="p" layer="1">
                {comment.body}
            </Text>
        </div>
    </div>
}
const Comments = ({id})=>{
    const {data,isError,isLoading,error} = useQuery(['comments',id], `/blog/comments/${id}`);
    if(isLoading) return <Spinner size="5rem" />
    if(isError) return <Messgae subTitle={error?.message} type="red" />
    if(data) return <CommentsContainer>
        <div className="wrapper">
            {data.map(item=><Comment  comment={item} key={item._id} />)}
        </div>
    </CommentsContainer>
    return null;
}

export default Comments;