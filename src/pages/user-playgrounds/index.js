import styled from 'styled-components';
// eslint-disable-next-line
import Text from '../../components/Text';
import Header from './elements/header'
import Codes from './elements/codes';

const Container = styled.div`

`
const Playgrounds = ()=>{
  return <Container>
    <Header />
    <Codes />
  </Container>
}

export default Playgrounds;
