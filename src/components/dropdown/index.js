import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import classnames from "classnames";

const Container = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;
const DropDownContainer = styled(motion.ul)`
  background: ${({ theme }) => theme.colors.light[4]};
  box-shadow: ${({ theme }) => theme.elevation[4].shadow};
  z-index: 6;
  position: absolute;
  top: 100%;
  padding: 0.5rem 0;
  border-radius: 0.6rem;
  float: left;
  text-align: left;
  width: max-content;
  margin-top: 0.8rem;
  user-select: none;
  &.left {
    left: 0;
  }
  &.right {
    right: 0;
  }
`;

const Dropdown = ({ body, main, direction = "left", width }) => {
  const classes = classnames(direction);
  const [show, setShow] = useState(false);
  function eventHandler() {
    setShow(false);
  }
  useEffect(() => {
    document.body.addEventListener("click", eventHandler);
    return () => document.body.removeEventListener("click", eventHandler);
  }, []);
  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <div
        style={{ display: "inline-block" }}
        onClick={() => setShow((e) => !e)}
      >
        {body()}
      </div>
      <AnimatePresence>
        {show && (
          <DropDownContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classes}
            width={width}
          >
            <div>{main(eventHandler)}</div>
          </DropDownContainer>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Dropdown;
