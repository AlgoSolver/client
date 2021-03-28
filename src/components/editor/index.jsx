import MonacoEditor,{EditorDidMount} from "@monaco-editor/react";
import prettier from 'prettier';
import {useRef} from 'react';
import styled from 'styled-components'


const EditorContainer=styled.div`
  position: relative;
  height: 100%;
  flex:1;
  overflow: hidden;
	.view-lines.monaco-mouse-cursor-text{
    padding-left: 10px;

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
	return (
		<EditorContainer>
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
		</EditorContainer>
	);
};

export default Editor;
