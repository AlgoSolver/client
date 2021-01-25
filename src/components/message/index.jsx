import styled from 'styled-components';
import {motion,AnimatePresence} from 'framer-motion';
import Text from '../Text/'
import {useState,useEffect} from 'react';
const MessageContainer = styled(motion.div)`
	&.hooked{
		position: fixed;
		top:3rem;
		left:50%;
		transform:translateX(-50%);
		min-width:80rem;	
		z-index: 100;
		box-shadow:${({theme})=>theme.elevation[7].shadow};
		margin:0 2rem;
        .container{
        	margin:0;
        }
	}
	transition:all .2 ease;
	.container{
		margin:.8rem 0;
		position: relative;
		padding:2rem;
		border-radius:.6rem;
		background:${({theme,type,layer})=>theme.colors[type][layer]};
    	color:${({theme,color,type})=>theme.colors[type][0]} !important;
	}
	.close{
		position: absolute;
		top:.5rem;
		right:.5rem;
		width:24px;
		height:24px;
		z-index: 3;
		cursor: pointer;
		display:flex;
		align-items:center;
		text-align:center;
	}

`
let timer;
const Messgae = ({
	type="blue",
	color="dark",
	layer=4,
	title,
	subTitle,
	closeble,
	hooked
})=>{
   const [open,setOpen] = useState(true);
   const handleClose=()=>{
   	if(timer){
   		clearTimeout(timer);
   	}
   	setOpen(false)
   }
   useEffect(()=>{
   	if(hooked && open){
   		timer = setTimeout(()=>{
           setOpen(false);
   		},5000)
   	}
   	return ()=>{
   			if(timer){
   		clearTimeout(timer);
   	}
   	}
   },[]);	
   return <AnimatePresence> 
           { open? <MessageContainer 
           className={`${hooked ? "hooked": null}`}
           exit={{opacity:0}}
           initial={{opacity:0}}
           animate={{ opacity:1 }}
           type={type} 
           color={color} 
           layer={layer}>
           <div className="container">
           	<div className="close" onClick={()=>setOpen(false)}>
           		X
           	</div>
		   	{title && <Text type="h5" mg="0" bold color={type} layer={2}>
		   		{title}
		   	</Text>}
		   	{subTitle && <Text type="p" color="dark" layer={2} mg="0">
		   		{subTitle}
		   	</Text>}
		   	</div>
		   </MessageContainer>:null
		   }
   </AnimatePresence>
}
export default Messgae;