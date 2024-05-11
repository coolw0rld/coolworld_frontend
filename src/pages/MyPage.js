import { Bottom, Top } from "../components";
import { styled } from "styled-components";
import profileImg from "../assets/profile.svg";

const profile = {
	profileImg: profileImg,
	name: "정서영",
	userId: "diyung",
};

function Info({ label, children }) {
	return (
		<InfoDiv>
			<label>{label}</label>
			<div className="info-content">{children}</div>
		</InfoDiv>
	);
}

export default function MyPage() {
	return (
		<div>
			<Top isHome={true} />
			<BasicDiv>
				<div className="profileImg">
					<img
						src={profileImg}
						width="95px"
						height="95px"
						alt="profile"
					/>
				</div>
				<div className="InfoContent">
					<Info label="이름" children={profile.name} />
					<Info label="아이디" children={profile.userId} />
				</div>
			</BasicDiv>
			<BasicDiv>
				<div className="InfoContent">
					<Info label="이름" children={profile.name} />
					<Info label="아이디" children={profile.userId} />
					<Info label="이름" children={profile.name} />
					<Info label="아이디" children={profile.userId} />
				</div>
			</BasicDiv>

			<Bottom />
		</div>
	);
}

const BasicDiv = styled.div`
	width: auto;
	min-height: 100px;
	border-radius: 20px;
	border: 1px solid #d9d9d9;

	margin: 20px;
	padding: 30px;

	.profileImg {
		display: flex;
		justify-content: center;
		margin-bottom: 30px;
	}
`;

const InfoDiv = styled.div`
	min-width: 180px;
	height: 75px;
	position: relative;

	label {
		display: inline-block;
		position: absolute;
		top: -15px;
		left: 14px;
		padding: 8px;
		background: white;
		font-size: 14px;
		color: #555;
		font-weight: bold;
	}

	.info-content {
		width: 85%;
		border: 2px solid var(--color-main);
		font-size: 1rem;
		line-height: 2;
		border-radius: 8px;
		padding: 16px;
		margin-top: 10px;
	}
`;
