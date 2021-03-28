import styled from 'styled-components'
import MonacoEditor,{EditorDidMount} from "@monaco-editor/react";
// import prettier from 'prettier';
import {useRef} from 'react'
const EditorContainer=styled.div`
  position: relative;
  height:calc(100vh - 6.4rem);
  width: 100%;
  overflow: hidden;
  display:flex;
  flex-direction:column;
  .editor{
    flex:1;
    background:${({ theme }) => theme.colors.light[4]};
    .monaco-editor{
      .margin{
        background:${({ theme }) => theme.colors.light[1]} !important;
      }
    }
  }
  .header{
    height:4rem;
    border-bottom:1px solid ${({ theme }) => theme.colors.light[1]};
    background:#fff;
  }
  .footer{
    height:4rem;
    border-top:1px solid ${({ theme }) => theme.colors.light[1]};
    background:${({ theme }) => theme.colors.light[1]};
  }
 .button-format {
  font-size: 1.6rem;
  line-height: 1.6;
  background: #fff;
  border-radius: 0.6rem;
  padding: 0 1.6rem 0;
  height: 3.8rem;
  min-width: 8rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: all 200ms ease-in-out;
  font-family: "Avenir";
  letter-spacing: 0.02rem;
  cursor: pointer;
  outline:none;
   &:hover {
      background: #f8f8f8 ;
    }
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 20;
  opacity: 0;
  transition: opacity 0.3s;
}
&:hover .button-format {
  opacity: 1;
}
	.view-lines.monaco-mouse-cursor-text{
    padding-left: 10px;

  }

`


const Editor= ({ initialValue='',light }) => {
   // const isSync = useListen('save');
   // const isMiniMap = useListen('minimap');
	 const editorRef = useRef();
  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => {
      //update('code',showFunc + getValue());
      console.log( getValue())
    });

    monacoEditor.getModel()?.updateOptions({ tabSize: 4 });
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
	return (
		<EditorContainer>
    <div className="header">

    </div>
    <div className="editor">
		<MonacoEditor
			editorDidMount={onEditorDidMount}
			value={initialValue}
			language="cpp"
			theme={light ? 'light' : 'dark'}
			height="100%"
			options={{
				wordWrap: "on",
				minimap:{enabled:false},
				showUnused: false,
				folding: false,
				lineNumbersMinChars: 3,
				fontSize: 14,
				scrollBeyondLastLine: false,
				automaticLayout: true,
			}}
		/>
</div>
     <div className="footer">

    </div>
		</EditorContainer>
	);
};

export default Editor;
