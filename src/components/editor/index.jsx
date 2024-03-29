import MonacoEditor /*,{EditorDidMount}*/ from "@monaco-editor/react";
//import prettier from "prettier";
import styled from "styled-components";
import Button from "../button";
//import parser from "prettier/parser-babel";
import { ICQ, ArrowDown2 } from "../../assets/icons";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  useState,
  useEffect,
  memo,
  useRef,
  useContext,
  createContext,
} from "react";
import { TextArea } from "../form";
import Text from "../Text";
import axios from "../../api";
import { Spinner } from "../spinner";

import {
  updateCodePlayGround,
  useCodePlayGround,
  useRunCode,
  useSubmitCode,
  useListen,
} from "../../hooks/problems";
import client from "../../hooks";
import {useAuth} from "../../hooks/user";
import { setLocalStorage, getLocalStorage } from "../../utils/local-storage";
import { useNavigate, Prompt } from "react-router-dom";
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
  min-height: 35vh;
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
        border: 1px solid ${({ theme }) => theme.colors.light[1]};
        border-bottom: none;
      }
    }
  }
  .body {
    flex: 1;
    padding: 1rem;
    height: 20.2rem;
    .results {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
const initialValueCode = `#include <iostream>;
using namespace std;
int main(){
}`;

const OutPutResultContainer = styled.div`
  .row {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  pre {
    height: 3rem;
    background: ${({ theme }) => theme.colors.light[1]};
    display: flex;
    align-items: center;
    overflow-x: auto;
    border-radius: 0.3rem;
    padding: 0 1rem;
    font-size: 1.4rem;
    font-family: Monolisa;
    box-sizing: content-box;
  }
`;

const ConsoleContext = createContext();
const OutPutResult = ({ results }) => {
  return (
    <OutPutResultContainer>
      <div className="row">
        <Text
          type="h5"
          mg="0"
          color={results.codeStatus === "Accepted" ? "green" : "red"}
        >
          {results.codeStatus}
        </Text>
        <Text type="p" size="1.3rem" layer={2}>
          Runtime : {results.usedTime ? results.usedTime + " ms" : "N/A"}
        </Text>
      </div>
      <div>
        <Text mg="0" type="h5">
          Your Input
        </Text>
        <pre></pre>
      </div>
      <div>
        <Text mg="0" type="h5">
          Your Output
        </Text>
        <pre>{results?.output}</pre>
      </div>
      <div>
        <Text mg="0" type="h5">
          Expected Output
        </Text>
        <pre></pre>
      </div>
    </OutPutResultContainer>
  );
};
const Results = () => {
  const { data: results } = useListen("runCodeResults");
  if (results?.isLoading) return <Spinner size="4rem" />;
  if (results?.codeStatus) {
    return <OutPutResult results={results} />;
  }
  return (
    <div className="results">
      <Text type="p" color="red" layer={3}>
        You must run your code first
      </Text>
    </div>
  );
};
let testCaseTimer;
const TestCase = memo(({ handleChange, defaultTestCases }) => {
  return (
    <TextArea
      flex
      value={defaultTestCases}
      onChange={(e) => handleChange(e.target.value)}
    ></TextArea>
  );
});

const WindowBody = memo(({ id }) => {
  const defaultTestCases = getLocalStorage(`problem-test-${id}`);
  const { currentWindow } = useContext(ConsoleContext);
  const [testCase, setTestCase] = useState(defaultTestCases);
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
      setLocalStorage(`problem-test-${id}`, testCase);
      updateCodePlayGround({ testCase });
    }, 200);
    return () => (testCaseTimer ? clearTimeout(testCaseTimer) : null);
  }, [testCase, id]);
  return currentWindow === 0 ? (
    <TestCase
      defaultTestCases={testCase}
      handleChange={(e) => setTestCase(e)}
    />
  ) : (
    <Results />
  );
});

const WindowHead = () => {
  const { currentWindow, setCurrentWindow, setIsWindowOpen } = useContext(
    ConsoleContext
  );
  return (
    <div className="tabs">
      <div className="tabs__list" as="button">
        <div
          className={`tabs__item ${currentWindow === 0 && "active"}`}
          onClick={() => {
            if (currentWindow === 1) setCurrentWindow(0);
          }}
        >
          <span>Test Case</span>
        </div>
        <div
          className={`tabs__item ${currentWindow === 1 && "active"}`}
          as="button"
          onClick={() => {
            if (currentWindow === 0) setCurrentWindow(1);
          }}
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
        onClick={() => setIsWindowOpen(false)}
      >
        <ArrowDown2 />
      </Button>
    </div>
  );
};
const Console = ({ id }) => {
  const { isWindowOpen } = useContext(ConsoleContext);
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
              <WindowBody id={id} />
            </div>
          </ConsoleContainer>
        </div>
      )}
    </AnimatePresence>
  );
};

let refetchTimer;
const SubmitCode = memo(({ id }) => {
  const { setCurrentWindow, setIsWindowOpen } = useContext(ConsoleContext);
  const [isPending, setIsPending] = useState(false);
  const [lastSubmission, setLastSubmission] = useState(null);
  const navigate = useNavigate();
  const auth = useAuth();
  const { data } = useCodePlayGround(id);
  const { mutate: runCode, isLoading: isRunCodeLoading } = useRunCode();
  const {
    mutate: submitCode,
    data: submitCodeRes,
    isLoading: isRunSubmitLoading,
  } = useSubmitCode();

  const handleRunCode = () => {
    setCurrentWindow(1);
    setIsWindowOpen(true);
    runCode(
      {
        sourceCode: data.code || initialValueCode,
        input: data.testCase,
        lang: "C++",
        timeLimit: 2,
      },
      {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };
  const handleSubmitCode = () => {
    if(auth?.data?._id){
      setLastSubmission(null);
      navigate("/problems/" + id + "/submissions");
      submitCode(
        {
          problem: id,
          sourceCode: data.code,
        },
        {
          onSuccess: (data) => {
            let ff = client.getQueryData([id, "submissions"]);
            let ss = client.getQueryData("submissions");
            if (ff) {
              client.setQueryData([id, "submissions"], (oldData) => {
                if (oldData) {
                  return [data, ...oldData];
                }
                return oldData;
              });
            }
            if (ss) {
              client.setQueryData("submissions", (oldData) => {
                if (oldData) {
                  return [data, ...oldData];
                }
                return oldData;
              });
            }
          },
        }
      );
    }else{
      toast.error(<Text type="h4">You have to log in to be able to submit problems</Text>);
    }
  };
  const fetchStatus = async () => {
    try {
      const res = await axios.get("/submissions/" + submitCodeRes._id);
      setLastSubmission(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  if (isPending) {
    if (refetchTimer) {
      clearTimeout(refetchTimer);
    }
    refetchTimer = setTimeout(() => {
      fetchStatus();
    }, 5000);
  }
  useEffect(() => {
    if (submitCodeRes?.status === "Pending") {
      if (!lastSubmission || lastSubmission.status === "Pending") {
        setIsPending(true);
      } else {
        if (refetchTimer) clearTimeout(refetchTimer);
        let ff = client.getQueryData([id, "submissions"]);
        let ss = client.getQueryData("submissions");
        if (ff) {
          client.setQueryData([id, "submissions"], (oldData) => {
            if (oldData) {
              let x = oldData.slice();
              x[0] = lastSubmission;
              return x;
            }
            return oldData;
          });
        }
        if (ss) {
          client.setQueryData("submissions", (oldData) => {
            if (oldData) {
              return [data, ...oldData];
            }
            return oldData;
          });
        }
        setIsPending(false);
      }
    }
    // eslint-disable-next-line
  }, [submitCodeRes, lastSubmission]);
  useEffect(() => {
    return () => {
      if (refetchTimer) clearTimeout(refetchTimer);
    };
  }, []);
  return (
    <div className="submit">
      <Prompt
        when={isPending}
        message={(location, action) => {
          return location.pathname.startsWith(`/problems/${id}`)
            ? true
            : `Are you sure you want to go to ${location.pathname}?`;
        }}
      />
      <Button
        onClick={handleRunCode}
        disabled={isRunCodeLoading || isRunSubmitLoading || isPending}
        theme="light"
        mg="0 .8rem 0 0"
        small
      >
        Run Code
      </Button>
      <Button
        theme="primary"
        disabled={isRunCodeLoading || isRunSubmitLoading || isPending}
        small
        onClick={handleSubmitCode}
      >
        Submit Code
      </Button>
    </div>
  );
});
const EditorFooter = memo(({ id }) => {
  const [currentWindow, setCurrentWindow] = useState(0);
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  return (
    <ConsoleContext.Provider
      value={{ currentWindow, setCurrentWindow, isWindowOpen, setIsWindowOpen }}
    >
      <div className="foot">
        <Console id={id} />
        <div className="editor-footer">
          <div className="open-console">
            <Button
              theme="dark"
              layer={1}
              small
              onClick={() => setIsWindowOpen((e) => !e)}
            >
              Console
            </Button>
          </div>
          <SubmitCode id={id} />
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
  useEffect(()=>{
    client.setQueryData("runCodeResults", {isLoading:false});
  },[])
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
