import MonacoEditor /*,{EditorDidMount}*/ from "@monaco-editor/react";
//import prettier from "prettier";
import styled from "styled-components";
import Button from "../button";
//import parser from "prettier/parser-babel";

import { ICQ, ArrowDown2 } from "../../assets/icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, memo ,useRef, useContext,createContext} from "react";
import { TextArea } from "../form";
import Text from "../Text";
import {Spinner} from '../spinner'
//import Message from '../Text'
import {
  updateCodePlayGround,
  useCodePlayGround,
  useRunCode,
  useSubmitCode,
  useListen,
} from "../../hooks/problems";
import { setLocalStorage, getLocalStorage } from "../../utils/local-storage";
const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  overflow: hidden;
  .editor-monaco {
    flex: 1;
    display: flex;
    & > section {
    }
  }
  .editor-container {
    position: relative;
    width: 100%;
    flex: 1;
    overflow: hidden;

    .monaco-editor .margin {
      background-color: #fffffe;
      border-top: 1px solid ${({ theme }) => theme.colors.light[1]};
    }
    .view-lines.monaco-mouse-cursor-text {
      padding-left: 10px;
    }
  }
  .editor-header {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    background: ${({ theme }) => theme.colors.light[0]};
    padding: 1rem;
    box-shadow: ${({ theme }) => theme.elevation[8].shadow};
  }
  .foot {
    position: relative;
    .console {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 100%;
    }
  }
  .editor-footer {
    position: relative;
    z-index: 15;
    display: flex;
    width: 100%;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.light[0]};
    padding: 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.light[1]};
    .submit {
      display: flex;
    }
  }
`;
const ConsoleContainer = styled(motion.div)`
  border-top: 1px solid ${({ theme }) => theme.colors.light[1]};
  height: 35vh;
  background: ${({ theme }) => theme.colors.light[4]};
  display: flex;
  flex-direction: column;
  .tabs {
    background: ${({ theme }) => theme.colors.light[0]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__list {
      display: flex;
      align-items: center;
    }
    &__item {
      padding: 1rem;
      cursor: pointer;
      user-select: none;
      transition: background 0.2s;
      span {
        font-size: 1.4rem;
        font-weight: 300;
        color: ${({ theme }) => theme.colors.dark[2]};
      }
      &.active {
        background: ${({ theme }) => theme.colors.light[4]};
      }
    }
  }
  .body {
    flex: 1;
    padding: 1rem;
    .results {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
const initialValueCode = `#include "bits/stdc++.h";
using namespace std;
int main(){
}`;

const OutPutResultContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ConsoleContext = createContext();

const OutPutResult = ({ results }) => {
  return (
    <OutPutResultContainer>
      <div >
        <Text
          type="p"
          color={results.codeStatus === "Accepted" ? "green" : "red"}
        >
          {results.codeStatus}
        </Text>
        <Text type="p" layer={2}>
          Runtime : {results.usedTime}
        </Text>
      </div>
    </OutPutResultContainer>
  );
};
const Results = () => {
  const { data: results } = useListen("runCodeResults");
  if(results?.isLoading) return <Spinner size="4rem" />
  if(results?.codeStatus){
    return <OutPutResult results={results} />
  }
  return <div className="results">
    <Text type="p" color="red" layer={3}>
      You must run your code first
    </Text>
    </div>
};
let testCaseTimer;
const TestCase = ({ handleChange, value }) => {
  return (
    <TextArea
      flex
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    ></TextArea>
  );
};

const WindowBody = memo(() => {
  const {currentWindow} = useContext(ConsoleContext);
  console.log("Body")
  const [testCase, setTestCase] = useState();
  const textAreaRef = useRef(null);
  useEffect(() => {
    if (!textAreaRef?.current) {
      textAreaRef.current = true;
      return;
    }
    if (testCaseTimer) {
      clearTimeout(testCaseTimer);
    }
    testCaseTimer = setTimeout(() => {
      updateCodePlayGround({ testCase });
    }, 500);
    return () => (testCaseTimer ? clearTimeout(testCaseTimer) : null);
  }, [testCase]);
  return currentWindow === 0 ? (
    <TestCase value={testCase} handleChange={(e) => setTestCase(e)} />
  ) : (
    <Results />
  );
});

const WindowHead = ()=>{
  const {currentWindow,setCurrentWindow,setIsWindowOpen} = useContext(ConsoleContext);
  return <div className="tabs">
    <div
      className="tabs__list"
      as="button"
    >
      <div className={`tabs__item ${currentWindow === 0 && "active"}`} onClick={()=>{
        if(currentWindow === 1) setCurrentWindow(0)
      }
      }>
        <span>Test Case</span>
      </div>
      <div
        className={`tabs__item ${currentWindow === 1 && "active"}`}
        as="button"
        onClick={()=>{
          if(currentWindow === 0) setCurrentWindow(1)
        }
        }
      >
        <span>Results</span>
      </div>
    </div>
    <Button
      theme="light"
      ghost
      icon
      small
      title="close"
      onClick={()=>setIsWindowOpen(false)}
    >
      <ArrowDown2 />
    </Button>
  </div>
}
const Console = () => {
  const {isWindowOpen} = useContext(ConsoleContext);
  return (
    <AnimatePresence>
      {isWindowOpen && (
        <div className="console">
          <ConsoleContainer
            initial={{ y: -350, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <WindowHead />
            <div className="body">
              <WindowBody  />
            </div>
          </ConsoleContainer>
        </div>
      )}
    </AnimatePresence>
  );
};

const SubmitCode = memo(({ id  }) => {
  const {setCurrentWindow,setIsWindowOpen} = useContext(ConsoleContext)

  const { data } = useCodePlayGround(id);
  const {
    mutate: runCode,
    data: runCodeRes,
    isLoading: isRunCodeLoading,
  } = useRunCode();
  const {
    mutate: submitCode,
    data: submitCodeRes,
    isLoading: isRunSubmitLoading,
  } = useSubmitCode();
  const handleRunCode = () => {
    setCurrentWindow(1)
    setIsWindowOpen(true)
    runCode({
      sourceCode: data.code,
      input: data.testCase,
      lang: "C++",
      timeLimit: 2,
    },{
      onSuccess:(data)=>{
        console.log(data)
      },
      onError:(err)=>{
        console.log(err)
      }
    });
  };
  const handleSubmitCode = () => {
    console.log(id, data.code);
    submitCode({
      problem: id,
      sourceCode: data.code,
    });
  };
  if (submitCodeRes) console.log(submitCodeRes, runCodeRes);
  return (
    <div className="submit">
      <Button
        onClick={handleRunCode}
        disabled={isRunCodeLoading || isRunSubmitLoading}
        theme="light"
        mg="0 .8rem 0 0"
        small
      >
        Run Code
      </Button>
      <Button
        theme="primary"
        disabled={isRunCodeLoading || isRunSubmitLoading}
        small
        onClick={handleSubmitCode}
      >
        Submit Code
      </Button>
    </div>
  );
});
const EditorFooter = memo(({ id }) => {
  const [currentWindow,setCurrentWindow] = useState(0);
  const [isWindowOpen,setIsWindowOpen] = useState(false)
  return (
    <ConsoleContext.Provider value={{currentWindow,setCurrentWindow,isWindowOpen,setIsWindowOpen}}>
    <div className="foot">
      <Console />
      <div className="editor-footer">
        <div className="open-console">
          <Button
            theme="dark"
            layer={1}
            small
            onClick={()=>setIsWindowOpen(e=>!e)}
            >
            Console
          </Button>
        </div>
        <SubmitCode  id={id} />
      </div>
    </div>
    </ConsoleContext.Provider>
  );
});
let timer;
const Editor = ({ initialValue = "", light, id }) => {
  const code = getLocalStorage(`problem-code-${id}`);
  const editorRef = useRef();
  const onEditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.getModel()?.updateOptions({ tabSize: 4 });
  };
  function handleEditorChange(value, event) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      updateCodePlayGround({ code: value });
      setLocalStorage(`problem-code-${id}`, value);
    }, 750);
  }
  return (
    <EditorContainer>
      <div>
        <div className="editor-header">
          <Button theme="light" ghost icon small title="Format the code">
            <ICQ />
          </Button>
        </div>
      </div>
      <div class="editor-monaco">
        <MonacoEditor
          editorDidMount={onEditorDidMount}
          onChange={handleEditorChange}
          value={code || initialValueCode}
          language="cpp"
          theme={light ? "light" : "dark"}
          height="100%"
          options={{
            wordWrap: "on",
            minimap: { enabled: false },
            showUnused: false,
            folding: false,
            lineNumbersMinChars: 3,
            fontSize: 14,
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>
      <EditorFooter id={id} />
    </EditorContainer>
  );
};

export default Editor;
