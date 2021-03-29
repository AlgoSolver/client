import MonacoEditor,{EditorDidMount} from "@monaco-editor/react";
import prettier from 'prettier';
import {useRef} from 'react';
import styled from 'styled-components'
import Button from '../button'
import {ICQ,ArrowDown2} from '../../assets/icons'
import { motion, AnimatePresence } from "framer-motion";
import {useState,useEffect} from 'react'
import {TextArea} from '../form'
import Text from '../Text'
import Message from '../Text'

const EditorContainer=styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    width: 100%;
    flex:1;
    overflow: hidden;
    .editor-monaco{
      flex:1;
      display: flex;
      & > section{

      }
    }
  .editor-container{
    position: relative;
    width: 100%;
    flex:1;
    overflow: hidden;

    .monaco-editor .margin {
    background-color: #fffffe;
      border-top:1px solid ${({theme})=>theme.colors.light[1]};
    }
    .view-lines.monaco-mouse-cursor-text{
      padding-left: 10px;
    }
  }
  .editor-header{
    display: flex;
    width: 100%;
    justify-content: flex-end;
    background:${({theme})=>theme.colors.light[0]};
    padding:1rem;
    box-shadow:${({theme})=>theme.elevation[8].shadow};
  }
  .foot{
    position: relative;
    .console{
      position: absolute;
      left:0;
      right:0;
      bottom:100%;
}
  }
  .editor-footer{
    position: relative;
    z-index: 15;
    display: flex;
    width: 100%;
    justify-content: space-between;
    background:${({theme})=>theme.colors.light[0]};
    padding: 1rem;
    border-top:1px solid ${({theme})=>theme.colors.light[1]};
    .submit{
      display: flex;
    }
  }

`
const ConsoleContainer = styled(motion.div)`
  border-top:1px solid ${({theme})=>theme.colors.light[1]};
  height:35vh;
  background:  ${({theme})=>theme.colors.light[4]};
  display: flex;
  flex-direction: column;
  .tabs{
    background: ${({theme})=>theme.colors.light[0]};
    display:flex;
    justify-content: space-between;
    align-items: center;
    &__list{
      display: flex;
      align-items: center;

    }
    &__item{
      padding: 1rem;
      cursor: pointer;
      user-select: none;
      transition: background .2s;
      span{
        font-size:1.4rem;
        font-weight:300;
        color:${({theme})=>theme.colors.dark[2]};
      }
      &.active{
        background: ${({theme})=>theme.colors.light[4]};
      }
    }
  }
  .body{
    flex:1;
    padding:1rem;
    .results{
      height:100%;
      display: flex;
      align-items:center;
      justify-content: center;
    }
  }
`;
let mounted = false
const Results = ()=>{
  return <div className="results">
    <Text type="p" color="red" layer={3}>You must run your code first</Text>
  </div>
}
const Console = ({tab=1,closeConsole})=>{
  const [currentTab,setCurrentTab] = useState(tab)
  const handleTabChange = (idx)=>{
    if(idx !== currentTab) setCurrentTab(idx)
  }
  useEffect(()=>{
    if(!mounted){
      mounted = true;
      return
    }
    if(tab !== currentTab || currentTab==0) setCurrentTab(tab);
  },[tab])
  return <AnimatePresence>
    {currentTab && <div className="console">
      <ConsoleContainer
      initial={{ y: -350, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}>
  <div className="tabs">
    <div className="tabs__list" as="button" onClick={()=>handleTabChange(1)}>
      <div className={`tabs__item ${currentTab===1  && "active"}`}>
        <span>
          Test Case
        </span>
      </div>
      <div className={`tabs__item ${currentTab===2  && "active"}`} as="button" onClick={()=>handleTabChange(2)}>
        <span>
          Results
        </span>
      </div>
    </div>
    <Button theme="light" ghost icon small title="close" onClick={closeConsole}>
        <ArrowDown2 />
    </Button>
  </div>
<div className="body">
  {currentTab===1 ? <TextArea flex></TextArea>:<Results />}
</div>
  </ConsoleContainer>
</div>}
  </AnimatePresence>
}

const EditorFooter = ()=>{
  const [isConsoleOpen,setIsConsoleOpen] =useState(0);
  return <div className="foot">

        <Console tab={isConsoleOpen}  closeConsole={()=>setIsConsoleOpen(0)} />

    <div className="editor-footer">
      <div className="open-console">
        <Button theme="dark"  layer={1} small onClick={()=>setIsConsoleOpen(e=>e==1 ? 0 : 1)}>
            Console
        </Button>
      </div>
      <div className="submit" >
        <Button  theme="light" mg="0 .8rem 0 0" small>
          Run Code
        </Button>
        <Button theme="primary" small>
            Submit Code
        </Button>
      </div>
    </div>
  </div>
}
const Editor = ({ initialValue='',light }) => {

	 const editorRef = useRef();
  const onEditorDidMount = (getValue, monacoEditor) => {
    // editorRef.current = monacoEditor;
    // monacoEditor.onDidChangeModelContent(() => {
    //   // update('code', + getValue());
    // });
    // monacoEditor.getModel()?.updateOptions({ tabSize: 4 });
  };
	// const onFormatClick = ()=>{
  //     const code = editorRef.current.getModel().getValue();
	//   const formatedCode = prettier.format(code,{
	//   	parser:'babel',
	//   	plugins:[parser],
	//   	printWidth: 80,
  //       tabWidth: 2,
  //       useTabs: false,
  //       semi: true,
  //       singleQuote: false,
  //       quoteProps: "as-needed",
  //       jsxSingleQuote: false,
  //       trailingComma: "none",
  //       bracketSpacing: true,
  //       jsxBracketSameLine: false,
  //       arrowParens: "always",
	//   }).replace(/\n$/,'');
	//   // chnage
	//   editorRef.current.setValue(formatedCode)
	// }
  return <EditorContainer>
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
    value={initialValue}
    language="cpp"
    theme={light ? 'light' : 'dark'}
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
   <EditorFooter />
  </EditorContainer>
	return (
		<EditorContainer>
    <div className="editor-container">
		<MonacoEditor
			editorDidMount={onEditorDidMount}
			value={initialValue}
			language="cpp"
			theme={light ? 'light' : 'dark'}
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
    <div className="editor-footer">
      <Button  theme="light" mg="0 .8rem 0 0" small>
        Run Code
      </Button>
      <Button theme="green" small>
          Submit Code
      </Button>
    </div>
		</EditorContainer>
	);
};

export default Editor;
