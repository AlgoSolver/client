import styled from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion'
import {useState} from 'react';
import classnames from 'classnames';

const Container = styled.div`
     position: relative;
    display: inline-block;
    vertical-align: middle;
`
const DropDownContainer = styled(motion.ul)`
  background: ${({theme})=>theme.colors.light[4]};
  box-shadow: ${({ theme }) => theme.elevation[4].shadow};
  z-index: 6;
  position: absolute;
  top:100%;
  padding:.5rem 0;
  border-radius: .6rem;
  float: left;
  text-align: left;
  width: max-content;
  margin-top: .8rem;
  &.left{
    left:0;
  }
  &.right{
    right: 0;
  }

`

const Dropdown = ({body,children,direction="left",width})=>{
  const classes = classnames(
    direction
  )
  console.log(width)
  const [show,setShow] = useState(false);
      return <Container>
      <div style={{display:"inline-block"}} onClick={()=>setShow(e=>!e)}>
        {body()}
      </div>
      <AnimatePresence>
      { show && <DropDownContainer initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={classes} width={width}>
        <div>
        {children}
      </div>
      </DropDownContainer>
    }
    </AnimatePresence>
    </Container>
}

export default Dropdown;
