import styled from "styled-components";
import { Link } from "react-router-dom";
import Text from "../../../components/Text/";
import Button from "../../../components/button/";


const BoxContainer = styled.div`
  padding:1.5rem;
  border-radius:1.5rem;
  background: ${({theme})=>theme.colors.light[4]};
  box-shadow: ${({theme})=>theme.elevation[3].shadow}
`

const ContributeBox = ()=>{
  return <BoxContainer>
    <Text type="h4" bold mg="0">
      Want to write an article?
    </Text>
    <Text type="p" size="1.5rem" mg="0rem 0 .8rem">
      Share your Knowlege and write something you good at.
    </Text>
    <div style={{ textAlign: "right"}}>
      <Link to="/new-post">
        <Button style={{display:"inline-flex"}} type="dark">Contribute</Button>
      </Link>
    </div>
  </BoxContainer>
}
export default ContributeBox;
