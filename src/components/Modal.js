import styled from "styled-components";
import Button from "./Button";
import loadingImg from "../assets/loading.svg";
import successImg from "../assets/success.svg";
import failImg from "../assets/fail.svg";

function ModalContent({ status, onClose }) {
	let imgSrc;
	let stateText;
	let message;

	switch (status) {
		case "success":
			imgSrc = successImg;
			stateText = "챌린지 인증 성공!";
			message = "오늘도 멋져요 ☺️";
			break;
		case "fail":
			imgSrc = failImg;
			stateText = "챌린지 인증 실패 🥲";
			message = "다시 시도해볼까요?";
			break;
		default:
			imgSrc = loadingImg;
			stateText = "AI로 검증 중입니다";
			message = "잠시만 기다려주세요";
			break;
	}

	return (
		<ModalContentDiv>
			<img src={imgSrc} width="100px" alt="loading" />
			<div className="state-text">{stateText}</div>
			<div className="message">{message}</div>
			<Button
				children={status === "loading" ? "취소" : "확인"}
				onClick={onClose}
				width="70"
				height="40"
				fontSize="18"
			/>
		</ModalContentDiv>
	);
}

export default function Modal({ isLoading, isSuccess, onClose }) {
	return (
		<ModalWrapper>
			{isLoading ? (
				<ModalContent status="loading" />
			) : (
				<div>
					{isSuccess ? (
						<ModalContent status="success" onClose={onClose} />
					) : (
						<ModalContent status="fail" onClose={onClose} />
					)}
				</div>
			)}
		</ModalWrapper>
	);
}

const ModalWrapper = styled.div`
	position: fixed;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

	width: 240px;
	height: 300px;
	background: var(--color-main);

	z-index: 2;
`;

const ModalContentDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 20px auto;
	gap: 25px;

	.state-text {
		color: #fff;
		font-size: 24px;
		font-weight: 800;
	}

	.message {
		color: #fff;
		font-size: 18px;
		font-weight: 500;
		margin-top: -15px;
	}
`;
