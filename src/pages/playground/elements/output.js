import styled from "styled-components";
import Text from "../../../components/Text";
import Button from "../../../components/button/";
import { TextArea } from "../../../components/form/";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, Fragment } from "react";
import { updateState } from "../../../hooks/";
import { useListen } from "../../../hooks/problems";
const OutputContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    background: ${({ theme }) => theme.colors.light[4]};
    padding: 1.2rem 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.light[1]};
    display: flex;
    align-items: center;
  }
  .console {
    flex: 1;
    padding: 1rem 1rem 2rem;
    overflow: auto;
    pre {
      font-size: 1.5rem;
      white-space: pre-wrap;
    }
  }
  .input {
    background: ${({ theme }) => theme.colors.light[4]};
    padding: 1rem;
    position: relative;
    .open-box {
      position: absolute;
      padding: 1rem;
      background: ${({ theme }) => theme.colors.light[4]};
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      height: 5rem;
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 2.5rem;
    }
    &__text {
      padding-top: 2rem;
      height: 20rem;
    }
  }
`;
const Tag = styled.div`
  background: ${({ theme, color }) => theme.colors[color][0]};
  padding: 0.6rem 1rem;
  border-radius: 1rem;
`;

const OutputHeader = () => {
  const { data } = useListen("playground-console");
  let status, color;
  if (data?.codeStatus) {
    switch (data.codeStatus) {
      case "Accepted": {
        status = "Finished";
        color = "green";
        break;
      }
      case "Time Limit Exceeded": {
        status = "Time Limit Exceeded";
        color = "red";
        break;
      }
      case "Compilation Error": {
        status = "Compilation Error";
        color = "orange";
        break;
      }
      default:
        status = data.codeStatus;
        color = "blue";
        break;
    }
  }
  console.log(data,"ehl")
  return (
    <Fragment>
      <div className="header">
        <div>
          <Text type="h5" inline mg="0">
            Output &nbsp;
          </Text>
        </div>
        {status && (
          <Tag color={color}>
            <Text inline color="light" type="h5" layer={4} mg="0">
              {status}
            </Text>
          </Tag>
        )}
      </div>
      <div className="console">
        {color === "blue" ? (
          <Text color={color} type="h5" mg="0">
            {status}
          </Text>
        ) : status ? (
          <div>
            <Text color={color} type="h4" mg="0">
              {status} in {data?.usedTime ? data.usedTime + " ms" : "N/A"}
            </Text>
            <pre>{data?.output}</pre>
          <pre>{data?.errorMessage}</pre>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

const variants = {
  open: { y: 0 },
  closed: { y: 200 },
};

let timer;

const Input = () => {
  const [show, setShow] = useState(false);
  const [val, setVal] = useState("");
  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      updateState("playground-input", val);
    }, 750);
  }, [val]);
  return (
    <div className="input">
      <AnimatePresence>
        <div className="open-box">
          <Button onClick={() => setShow((e) => !e)} small type="dark" circle>
            Input
          </Button>
        </div>
        {show && (
          <motion.div
            initial={variants.closed}
            animate={variants.open}
            exit={variants.closed}
            transition={{ duration: 0.5 }}
            className="input__text"
          >
            <TextArea
              onChange={(e) => setVal(e.target.value)}
              value={val}
              name="input"
              flex
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
const EditorFooter = () => {
  return (
    <OutputContainer>
      <OutputHeader />
      <Input />
    </OutputContainer>
  );
};

export default EditorFooter;
