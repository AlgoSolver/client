import MonacoEditor from "@monaco-editor/react";
import { useRef } from "react";
import styled from "styled-components";

const EditorContainer = styled.div`
	 flex:1;
	 background:red;		
	 background: ${({ theme }) => theme.colors.light[4]};
    .monaco-editor {
      .margin {
        background: ${({ theme }) => theme.colors.light[1]} !important;
      }
    }
    .view-lines.monaco-mouse-cursor-text {
    padding-left: 10px;
  }
`
const initialValueCode = `#include <iostream>;
using namespace std;
int main(){
}`;
const Editor = ()=>{
  const editorRef = useRef();
  const onEditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => {
      //update('code',showFunc + getValue());
      console.log(getValue());
    });

    monacoEditor.getModel()?.updateOptions({ tabSize: 4 });
  };
	return <EditorContainer>
        <MonacoEditor
          editorDidMount={onEditorDidMount}
          value={initialValueCode}
          language="cpp"
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
}

export default Editor;