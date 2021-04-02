import MonacoEditor /*,{EditorDidMount}*/ from "@monaco-editor/react";
import prettier from "prettier";
import { useRef } from "react";
import styled from "styled-components";
import Button from "../button";
import parser from "prettier/parser-babel";

import { ICQ, ArrowDown2 } from "../../assets/icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, memo } from "react";
import { TextArea } from "../form";
import Text from "../Text";
//import Message from '../Text'
import { updateCodePlayGround, useCodePlayGround,useRunCode,useSubmitCode } from "../../hooks/problems";
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
let mounted = false;
const Results = () => {
  return (
    <div className="results">
      <Text type="p" color="red" layer={3}>
        You must run your code first
      </Text>
    </div>
  );
};
let testCaseTimer;
const TestCase = ({ defaultTestCase = 0 }) => {
  const [testCase, setTestCase] = useState(defaultTestCase);
  useEffect(() => {
    if (testCaseTimer) {
      clearTimeout(testCaseTimer);
    }
    testCaseTimer = setTimeout(() => {
      updateCodePlayGround({ testCase });
    }, 500);
  }, [testCase]);
  return (
    <TextArea
      flex
      value={testCase}
      onChange={(e) => setTestCase(e.target.value)}
    ></TextArea>
  );
};
const Console = ({ tab = 1, closeConsole }) => {
  const [currentTab, setCurrentTab] = useState(tab);
  const handleTabChange = (idx) => {
    if (idx !== currentTab) setCurrentTab(idx);
  };

  useEffect(() => {
    if (!mounted) {
      mounted = true;
      return;
    }
    if (tab !== currentTab || currentTab === 0) setCurrentTab(tab);
  }, [tab, setCurrentTab, currentTab]);
  return (
    <AnimatePresence>
      {currentTab && (
        <div className="console">
          <ConsoleContainer
            initial={{ y: -350, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="tabs">
              <div
                className="tabs__list"
                as="button"
                onClick={() => handleTabChange(1)}
              >
                <div className={`tabs__item ${currentTab === 1 && "active"}`}>
                  <span>Test Case</span>
                </div>
                <div
                  className={`tabs__item ${currentTab === 2 && "active"}`}
                  as="button"
                  onClick={() => handleTabChange(2)}
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
                onClick={closeConsole}
              >
                <ArrowDown2 />
              </Button>
            </div>
            <div className="body">
              {currentTab === 1 ? <TestCase /> : <Results />}
            </div>
          </ConsoleContainer>
        </div>
      )}
    </AnimatePresence>
  );
};

const SubmitCode = ({id}) => {
  const { data  , isLoading } = useCodePlayGround(id);
  const {mutate, data:res} = useRunCode();
  const {mutate:submitCode , data:submitCodeRes } = useSubmitCode();
  const handleRunCode = () => {
      mutate({
        sourceCode:data.code,
        input:data.testCase,
        lang:'C++',
        timeLimit:2
      });
  }
  const  handleSubmitCode = () => {
      submitCode({
        problem:id,
        code:{
          sourceCode:data.code,
          language:'C++'
         }
      })
  }
  return (
    <div className="submit">
      <Button onClick={handleRunCode} theme="light" mg="0 .8rem 0 0" small>
        Run Code
      </Button>
      <Button theme="primary" small onClick={handleSubmitCode}>
        Submit Code
      </Button>
    </div>
  );
};
const EditorFooter = memo(({ id }) => {
  const [isConsoleOpen, setIsConsoleOpen] = useState(0);
  return (
    <div className="foot">
      <Console tab={isConsoleOpen} closeConsole={() => setIsConsoleOpen(0)} />

      <div className="editor-footer">
        <div className="open-console">
          <Button
            theme="dark"
            layer={1}
            small
            onClick={() => setIsConsoleOpen((e) => (e === 1 ? 0 : 1))}
          >
            Console
          </Button>
        </div>
        <SubmitCode id={id} />
      </div>
    </div>
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
  const onFormatClick = () => {
    const code = editorRef.current.getModel().getValue();
    const formatedCode = prettier
      .format(code, {
        parser: "babel",
        plugins: [parser],
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: false,
        quoteProps: "as-needed",
        jsxSingleQuote: false,
        trailingComma: "none",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: "always",
      })
      .replace(/\n$/, "");
    // chnage
    editorRef.current.setValue(formatedCode);
  };
  return (
    <EditorContainer>
      <div>
        <div className="editor-header">
          <Button
            theme="light"
            onClick={onFormatClick}
            ghost
            icon
            small
            title="Format the code"
          >
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
