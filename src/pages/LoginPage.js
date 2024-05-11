import { useState } from "react";
import { InputField, Button } from "../components";
import logoImg from "../assets/logo.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
	let [id, setId] = useState("");
	let [password, setPassword] = useState("");
	let navigate = useNavigate();

	return (
		<Div className="container">
			<img src={logoImg} width="95px" height="95px" alt="start" />
			<div
				className="title righteous-regular"
				style={{ marginLeft: "25px" }}
			>
				Cool World
			</div>
			<form className="input">
				<InputField
					children="아이디"
					type="text"
					value={id}
					onChange={(e) => {
						setId(e.target.value);
					}}
					placeholder="아이디를 입력하세요"
				/>
				<InputField
					children="비밀번호"
					type="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					placeholder="비밀번호를 입력하세요"
				/>
				<Button
					children="로그인"
					onClick={() => {
						navigate("/survey");
					}}
					width="250"
				/>
			</form>
			<div className="p">
				계정이 없으신가요?{" "}
				<a href="/" className="signup">
					회원가입
				</a>
			</div>
		</Div>
	);
}

const Div = styled.div`
	.input {
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.input > * + * {
		margin-top: 20px; /* InputField 사이의 갭 설정 */
	}

	.input > :last-child {
		margin-top: 40px; /* InputField와 Button 사이의 갭 설정 */
	}

	.p {
		margin-top: -35px;
	}

	.signup {
		color: var(--color-main);
		font-weight: bold;
	}
`;
