import styled from 'styled-components';
import {useCodes} from '../../../hooks/codes';
import Button from '../../../components/button';
import {InlineLoading} from '../../../shared/loading'

const Container = styled.div`
  padding:4rem 0 ;
`
const Code = ({data})=>{
   let pages = data.map(item=>item.docs).flat();
   console.log(pages)
  console.log(  )
  return 'hello'
}
const Codes = ()=>{
  const {
    status,
    data,
    isFetching,
  //  isFetchingNextPage,
    fetchNextPage,
  //  hasNextPage,
  } = useCodes({
    getNextPageParam:(oldPage)=>{
      return oldPage.nextPage;
    }
  });
  console.log(data?.pages)
  return <Container>
   {status === "loading" && <InlineLoading  />}
   {data?.pages && <Code data={data.pages} />}
  <Button disabled={isFetching || status === "loading" }   onClick={()=>fetchNextPage()}>
    load more
  </Button>
  </Container>
}

export default Codes;
