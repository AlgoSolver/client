import MonacoEditor from "@monaco-editor/react";
import styled from "styled-components";
import { updateState } from "../../../hooks/";
const EditorContainer = styled.div`
	flex: 1;
	background: red;
	background: ${({ theme }) => theme.colors.light[4]};
	.monaco-editor {
		.margin {
			background: ${({ theme }) => theme.colors.light[1]} !important;
		}
	}
	.view-lines.monaco-mouse-cursor-text {
		padding-left: 10px;
	}
`;
const initialValueCode = `#include <iostream>;
using namespace std;
int main(){
}`;
let timer;
const Editor = () => {
	function handleEditorChange(value, event) {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			updateState("playground-code", value);
		}, 750);
	}
	return (
		<EditorContainer>
			<MonacoEditor
				value={initialValueCode}
				onChange={handleEditorChange}
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
	);
};

export default Editor;