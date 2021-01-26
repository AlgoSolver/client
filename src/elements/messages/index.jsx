import Text from '../../components/Text/';
import styled from 'styled-components';
import Message from  '../../components/message/'
import { motion, AnimatePresence } from "framer-motion"

const TypographyContainer = styled.div`
	padding:2rem;
    .body{
    	padding: 2rem;
    	padding-left: 4rem;
    	background: #fff;
    	border-radius: 2rem;
    	width: 100%;
    }
`
/* Body / 16pt */


const Typography = ()=>{
	return <TypographyContainer>
		<Text type="h1">
			Typography
		</Text>
		<div className="body">
			<AnimatePresence>
           <Message closeble title="Informational" subTitle="Additional description and informations about copywriting."/>
           <Message type="green" title={"Success"} />
           <Message hooked type="red" subTitle="heloo there an error" />
           <Message type="orange" title="Warning" subTitle="AAdditional description and informations about copywriting." />
		</AnimatePresence>
		</div>
	</TypographyContainer>
}

export default Typography;