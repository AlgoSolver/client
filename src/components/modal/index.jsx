import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";
import { Close } from "../../assets/icons/";
const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
	background: rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;
const ModalBody = styled(motion.div)`
	background: ${({ theme }) => theme.colors.light[4]};
	box-shadow: ${({ theme }) => theme.elevation[7].shadow};
	padding: 3rem;
	border-radius: 0.8rem;
	margin: 1.5rem;
	position: relative;
	.modal {
		&__title {
		}
		&__body {
			margin: 2rem 0;
		}
		&__footer {
			display: flex;
			justify-content: flex-end;
		}
		&__close {
			position: absolute;
			top: 0;
			right: 0;
			width: 4rem;
			height: 4rem;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			z-index: 1;
			border-radius: 2rem;
		}
	}

	&.xsmall {
		max-width: 40rem;
		width: 100%;
	}
	&.small {
		max-width: 60rem;
		width: 100%;
	}
	&.medium {
		max-width: 80rem;
		width: 100%;
	}
	&.large {
		max-width: 96.8rem;
		width: 100%;
	}
`;

const Title = ({ children }) => {
	return <div className="modal__title">{children}</div>;
};
const Body = ({ children }) => {
	return <div className="modal__body">{children}</div>;
};
const Footer = ({ children }) => {
	return <div className="modal__footer">{children}</div>;
};
const Modal = ({
	children,
	size = "small",
	show = false,
	onHide = () => {},
}) => {
	const classes = classNames(size);
	return (
		<AnimatePresence>
			{show && (
				<ModalContainer
					onClick={onHide}
					className="modal__wrapper"
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					exit={{
						opacity: 0,
					}}
					transition={{ duration: 0.3 }}
				>
					<ModalBody
						initial={{
							scale: 0,
							opacity: 0,
						}}
						animate={{
							scale: 1,
							opacity: 1,
						}}
						exit={{
							scale: 0,
							opacity: 0,
						}}
						transition={{ duration: 0.3 }}
						onClick={(e) => {
							e.stopPropagation();
						}}
						className={classes}
					>
						<div onClick={onHide} className="modal__close">
							<Close width="2rem"  />
						</div>
						{children}
					</ModalBody>
				</ModalContainer>
			)}
		</AnimatePresence>
	);
};
Modal.Title = Title;
Modal.Footer = Footer;
Modal.Body = Body;

export default Modal;