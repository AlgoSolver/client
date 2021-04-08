import styled from "styled-components";
import Button from "../../../components/button/";
import { Play, EditSquare, Setting } from "../../../assets/icons/";
import Modal from "../../../components/modal";
import {useState} from 'react'
import Text from "../../../components/Text";
import {Toggle} from '../../../components/form/'
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
const EditorHeader = () => {
	return (
		<EditorHeaderContainer>
			<div className="left">
				<Button icon small>
					Run &nbsp; <Play />
				</Button>
				<Button small icon type="light">
					Save &nbsp; <EditSquare />
				</Button>
			</div>
			<div className="right">
				<Settings />
			</div>
		</EditorHeaderContainer>
	);
};

export default EditorHeader;