import styled from 'styled-components';
import {useCodes} from '../../../hooks/codes';
import Button from '../../../components/button';
import {InlineLoading} from '../../../shared/loading'
import Text from '../../../components/Text'
import {Delete,Edit} from '../../../assets/icons'

const Container = styled.div`
  padding:4rem 0 ;
`
const CodeContainer = styled.div`
  padding:2rem;
  margin:  0 auto;
  background: ${({theme})=>theme.colors.light[4]};
  margin-bottom: 1.5rem;
  border-radius: 1.5rem;
  box-shadow: ${({theme})=>theme.elevation[3].shadow};
  max-width:70rem;
  transition: transform .2s;
  &:hover{
    transform: translateY(-.3rem);
  }
  .right{
    display: flex;
    gap:.8rem;
    justify-content: flex-end;
  }

`
const Code = ({code})=>{
  return <CodeContainer>
    <Text type="h4">{code.name || "Untitled"}</Text>
    <div className="right">
      <Button type="light" circle icon>
        <Delete />
      </Button>
      <Button type="light" circle icon>
        <Edit />
      </Button>
    </div>
  </CodeContainer>
}
const CodeList = ({data})=>{
   //let pages = data.map(item=>item.docs).flat();
  return data.docs.map(item=><Code code={item} />)
}
const Codes = ()=>{
  const {
    status,
    data,
    isFetching,
  //  isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useCodes({
    getNextPageParam:(oldPage)=>{
      return oldPage.nextPage;
    }
  });
  console.log(data)
  if(status==='loading') return <Container className="wrapper">
  <InlineLoading />
  </Container>

  return <Container className="wrapper">
   {data?.pages && <CodeList data={data.pages} />}
   {!data?.pages?.length || data?.pages[0]?.docs?.length === 0 ? <Text center layer={2} color="red">
     You Don't have any playgrounds yet..
   </Text> :null}
  <div className="center">
  {hasNextPage && <Button type="purple" big disabled={isFetching || status === "loading" }   onClick={()=>fetchNextPage()}>
      load more
    </Button>}
  </div>
  </Container>
}

export default Codes;
