import styled from 'styled-components';
import Text from '../../components/Text';
import Header from './elements/header'
const Container = styled.div`

`
const Playgrounds = ()=>{
  return <Container>
    <Header />
    <Text>
      My Playgrounds
    </Text>
  </Container>
}

export default Playgrounds;
