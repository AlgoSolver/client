import { Link } from "react-router-dom";
import styled from "styled-components";
import splashes from '../../../assets/images/Saly-11.png'
import Button from "../../../components/button";
import Text from '../../../components/Text';


const EndContainer = styled.div`
    padding:2rem;
    background: ${({theme})=>theme.gradients[0]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        height:80vh;
    }
    .row{
        display: flex;
        align-items: center;
        gap:1.5rem;
    }
`
const End  = () =>{
    return <EndContainer>
        <Text type="h1" bold color="light">
            What you are wating for
        </Text>
        <div className="row">
        <Text type="h4" color="light">
            Create An Account And begin to learn
        </Text>
       <Link to="/accounts/signup"><Button sm circle type="light">
            Begin Now
        </Button>
        </Link>
        </div>
        
        <div className="end__img">
            <img src={splashes} alt="" />
        </div>
    </EndContainer>
}
export default End;