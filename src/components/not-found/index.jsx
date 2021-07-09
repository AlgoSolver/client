import styled from 'styled-components';
import Text from '../Text/';


const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - ${({ theme }) => theme.sizes.nav});
  background: ${({ theme }) => theme.colors.dark[0]};
`;

const NotFound = ({title}) => {
  console.log('hello')
  return (
    <NotFoundContainer>
      <Text color="light" type="h1" size="8rem" layer={4}>
        404 Not Found
      </Text>
      <Text color="light" type="p" layer={2}>
        {title}
      </Text>
    </NotFoundContainer>
  );
};

export default NotFound;