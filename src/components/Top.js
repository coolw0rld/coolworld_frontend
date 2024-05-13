import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logoImg from "../assets/logo.svg";

export default function Top({ isHome }) {
	const [points, setPoints] = useState(30);
	let navigate = useNavigate();

	const isConfirmed = useSelector((state) => state.confirmation.isConfirmed);

	useEffect(() => {
		if (isConfirmed) {
			setPoints((prevPoints) => prevPoints + 5);
		}
	}, [isConfirmed]);

	return (
		<MyTop>
			<div
				style={{ marginLeft: "16px", display: "flex" }}
				onClick={() => {
					navigate("/");
				}}
			>
				<img src={logoImg} height="45px" alt="logo" />
				<div
					className="righteous-regular"
					style={{
						color: "#fff",
						marginLeft: "10px",
						fontSize: "20px",
						letterSpacing: "0.2rem",
					}}
				>
					Cool <div style={{ width: "10px" }} />
					World
				</div>
			</div>
			{isHome ? (
				<PointDiv>
					<img src={logoImg} height="32px" alt="logo" />
					<span>{points}</span>
				</PointDiv>
			) : (
				""
			)}
		</MyTop>
	);
}

const MyTop = styled.div`
	position: fixed;
	top: 0;
	width: 100%;

	height: 65px;
	background-color: var(--color-main);

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const PointDiv = styled.div`
	min-width: 80px;
	height: 45px;
	margin-right: 12px;
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: #fff;
	border-radius: 20px;
	padding-left: 10px;

	span {
		color: var(--color-main);
		margin-left: 5px;
		margin-right: 9px;
		font-size: 20px;
		font-weight: bold;
	}
`;
