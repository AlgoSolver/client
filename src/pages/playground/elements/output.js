import styled from "styled-components";
import Text from "../../../components/Text";
import Button from "../../../components/button/";
import { TextArea } from "../../../components/form/";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const OutputContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	.header {
		background: ${({ theme }) => theme.colors.light[4]};
		padding: 1.2rem 1rem;
		border-bottom: 1px solid ${({ theme }) => theme.colors.light[1]};
	}
	.console {
		flex: 1;
	}
	.input {
		background: ${({ theme }) => theme.colors.light[4]};
		padding: 1rem;
		position: relative;
		.open-box {
			position: absolute;
			padding: 1rem;
			background: ${({ theme }) => theme.colors.light[4]};
			top: 0;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 2;
			height: 5rem;
			width: auto;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 2.5rem;
		}
		&__text {
			padding-top: 2rem;
			height: 20rem;
		}
	}
`;
const OutputHeader = () => {
	return (
		<div className="header">
			<Text type="h5" mg="0">
				Output Status:
			</Text>
		</div>
	);
};
const OutputConsole = () => {
	return <div className="console"></div>;
};
const variants = {
	open: { y: 0 },
	closed: { y: 200 },
};
const Input = () => {
	const [show, setShow] = useState(false);
	return (
		<div className="input">
			<AnimatePresence>
				<div className="open-box">
					<Button
						onClick={() => setShow((e) => !e)}
						small
						type="dark"
						circle
					>
						Input
					</Button>
				</div>
				{show && (
					<motion.div
						initial={variants.closed}
						animate={variants.open}
						exit={variants.closed}
						transition={{ duration: 0.5 }}
						className="input__text"
					>
						<TextArea name="input" flex />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
const EditorFooter = () => {
	return (
		<OutputContainer>
			<OutputHeader />
			<OutputConsole />
			<Input />
		</OutputContainer>
	);
};

export default EditorFooter;