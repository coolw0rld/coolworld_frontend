import { useState } from "react";
import { Bottom, Button, Modal, Top } from "../components";
import { styled } from "styled-components";
import { RiImageAddLine } from "react-icons/ri";
import { submitMission } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setConfirmation } from "../store";

export default function ConfirmPage() {
	const [showModal, setShowModal] = useState(false);
	const [isSuccess, setIsSuccess] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	const [postImg, setPostImg] = useState(null); // 서버에 업로드할 파일 데이터
	const [previewImg, setPreviewImg] = useState(""); // 프리뷰에 사용할 파일 데이터 (이미지 URL)

	const isConfirmed = useSelector((state) => state.confirmation.isConfirmed);
	const dispatch = useDispatch();

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onload = (e) => {
			setPreviewImg(e.target.result);
		};

		reader.readAsDataURL(file);
		setPostImg(file);
	};

	const handleFileUpload = () => {
		setIsLoading(true);
		setShowModal(true);
		submitMission(new Date().toISOString(), postImg)
			.then((response) => {
				if (response === "success") {
					setIsSuccess(true);
					dispatch(setConfirmation(true));
				} else {
					setIsSuccess(false);
				}
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div>
			<Top isHome={true} />
			{showModal && (
				<>
					<ModalBackground
						onClick={() => {
							setShowModal(false);
						}}
					/>
					<Modal
						isLoading={isLoading}
						isSuccess={isSuccess}
						onClose={() => {
							setShowModal(false);
						}}
					/>
				</>
			)}
			<Container>
				<ConfirmDiv>
					<div className="confirm-div-top">인증하기</div>
					<input
						accept=".png, .jpeg, .jpg"
						type="file"
						onChange={handleFileChange}
						id="fileInput"
					/>
					{previewImg ? (
						<img
							src={previewImg}
							alt="preview"
							style={{ maxWidth: "220px", marginBottom: "50px" }}
						/>
					) : (
						<label htmlFor="fileInput">
							<RiImageAddLine color="fff" size={115} />
						</label>
					)}
					<Button
						children="AI 검증 받기"
						onClick={() => {
							handleFileUpload();
						}}
						width="250"
					/>
				</ConfirmDiv>
				<Button
					children="저장하기"
					disabled={isConfirmed ? false : true}
					onClick={() => {}}
					width="250"
				/>
			</Container>
			<Bottom />
		</div>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 85vh;
	gap: 30px;
`;

const ConfirmDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 300px;
	height: 480px;
	border-radius: 20px;
	border: 2px solid var(--color-main);
	background: #fff;

	.confirm-div-top {
		font-size: 20px;
		font-weight: bold;
		margin-top: 25px;

		margin-bottom: 50px;
	}

	input[type="file"] {
		display: none;
	}

	label {
		display: inline-block;
		width: 220px;
		height: 220px;
		background: #d9d9d9;
		border: 1px solid #d9d9d9;
		border-radius: 10px;
		cursor: pointer;

		display: flex;
		justify-content: center;
		align-items: center;

		margin-bottom: 50px;
	}
`;

const ModalBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
`;
