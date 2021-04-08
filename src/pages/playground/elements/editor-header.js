import styled from "styled-components";
import Button from "../../../components/button/";
import { Play, EditSquare, Setting } from "../../../assets/icons/";
import Modal from "../../../components/modal";
import { useState } from "react";
import Text from "../../../components/Text";
import { Toggle } from "../../../components/form/";
import { useListen, useRunCodeOnPlayground } from "../../../hooks/problems";
import { updateState } from "../../../hooks/";

const EditorHeaderContainer = styled.div`
	background: ${({ theme }) => theme.colors.light[4]};
	padding: 1rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.light[1]};
	display: flex;
	justify-content: space-between;
	align-items: center;
	.left {
		display: flex;
		> :not(:last-child) {
			margin-right: 0.8rem;
		}
	}
`;
const Settings = () => {
	const [show, setSow] = useState(false);
	const open = () => setSow(true);
	const close = () => setSow(false);
	return (
		<div>
			<Button onClick={open} small icon type="light">
				<Setting />
			</Button>
			<Modal show={show} onHide={close}>
				<Modal.Title>
					<Text type="h3" bold mg="0">
						Code Editor Settings
					</Text>
				</Modal.Title>
				<Modal.Body>
					<Toggle name="theme" big>
						<Text type="p" layer={1} mg="0">
							Activate the dark theme
						</Text>
					</Toggle>
				</Modal.Body>
				<Modal.Footer>
					<Button small onClick={close} mg="0 1rem 0 0">
						Confirm
					</Button>
					<Button small type="light" onClick={close}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
const ControllButtons = () => {
	const code = useListen("playground-code");
	const input = useListen("playground-input");
	const { mutate, isLoading } = useRunCodeOnPlayground();
	const runCode = () => {
		updateState("playground-console", {
			codeStatus: "Compiling Program..",
		});
		mutate({
			sourceCode: code.data,
			input: input.data || "0",
			lang: "C++",
			timeLimit: 2,
		});
	};

	return (
		<div className="left">
			<Button icon small disabled={isLoading} onClick={runCode}>
				Run &nbsp; <Play />
			</Button>
			<Button small icon disabled={isLoading} type="light">
				Save &nbsp; <EditSquare />
			</Button>
		</div>
	);
};
const EditorHeader = () => {
	return (
		<EditorHeaderContainer>
			<ControllButtons />
			<div className="right">
				<Settings />
			</div>
		</EditorHeaderContainer>
	);
};

export default EditorHeader;