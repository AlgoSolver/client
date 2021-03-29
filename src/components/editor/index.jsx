import MonacoEditor,{EditorDidMount} from "@monaco-editor/react";
import prettier from 'prettier';
import {useRef} from 'react';
import styled from 'styled-components'
import Button from '../button'

const EditorContainer=styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    width: 100%;
    flex:1;
    overflow: hidden;
  .editor-container{
    position: relative;
    width: 100%;
    flex:1;
    overflow: hidden;
    box-shadow:${({theme})=>theme.elevation[8].shadow};
    .view-lines.monaco-mouse-cursor-text{
      padding-left: 10px;
    }
  }
  .editor-footer{
    display: flex;
    width: 100%;
    justify-content: space-between;
    background:${({theme})=>theme.colors.light[0]};
    padding:1rem;
    .submit{
      display: flex;
    }
  }

`

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
      <div className="editor-footer">
        <Button  theme="light" mg="0 .8rem 0 0" small>
          Run Code
        </Button>
        <Button theme="dark" small>
            Submit Code
        </Button>
      </div>
    </div>
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
  <div>
    <div className="editor-footer">
      <div className="open-console">
        <Button theme="dark"  layer={1} small>
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
