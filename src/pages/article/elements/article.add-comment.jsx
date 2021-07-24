import {useRef} from 'react'
import {TextArea} from '../../../components/form';
import styled from 'styled-components';
import Button from '../../../components/button';
import { useMutation } from '../../../hooks';
import Messgae from '../../../components/message';
import { useQueryClient } from 'react-query';

const AddCommentContainer = styled.div`
   padding: 3rem 0;
    background: ${({theme})=>theme.colors.light[4]};
`
const AddComment = ({id,user={}})=>{
    const queryClient = useQueryClient();
    const {isLoading, isError, error, mutate} = useMutation("/comments","post",{
        onMutate: async newComment => {
            const previousComments = queryClient.getQueryData(['comments',id]) || [];
            console.log(previousComments)
            try{
                 queryClient.setQueryData(['comments',id], (old=[]) => [...old, {
                     ...newComment,
                     _id:Math.random(),
                     createdAt:new Date(),
                     author:{
                         ...user
                     }
                    }])
            }catch(err){}
           
            return { previousComments }
          },
          // If the mutation fails, use the context returned from onMutate to roll back
          onError: (err, newComment, context) => {
            queryClient.setQueryData(['comments',id], context.previousComments)
          },
          // Always refetch after error or success:
          onSettled: () => {
            queryClient.invalidateQueries(['comments',id]);
          },
    });
    const commentRef = useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(commentRef.current?.value?.trim().length > 0 && !isLoading){
            mutate({
                body:commentRef.current.value.trim(),
                id
            });
            commentRef.current.value ="";         
        }
    }
    return <AddCommentContainer>
        <div className="wrapper">
        <form onSubmit={handleSubmit}>
            <TextArea register={commentRef} placeholder="write something here." />
            <Button mg="0" loading={isLoading}>
                 Add Comment
            </Button>
        </form>
        {isError ? <Messgae subTitle={error?.message} type="red" /> : null}
        </div>
    </AddCommentContainer>
}

export default AddComment;