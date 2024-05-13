import { Bottom, Button, Participants, Top } from "../components";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMission } from "../api";

export default function HomePage() {
	let navigate = useNavigate();

	const isConfirmed = useSelector((state) => state.confirmation.isConfirmed);
	console.log(isConfirmed);

	const surveyAnswers = useSelector((state) => state.surveyAnswers);

	const [mission, setMission] = useState("");
	const [percent, setPercent] = useState(2);
	//const mission = "텀블러를\n사용해보세요!";

	const getPercentByCategory = (category) => {
		const percentMap = {
			category1: 2,
			category2: 5,
			category3: 3,
		};
		return percentMap[category] || 2;
	};

	useEffect(() => {
		const fetchMission = async () => {
			try {
				const { mission, category } = await getMission(surveyAnswers);
				setMission(mission);
				const percent = getPercentByCategory(category);
				setPercent(percent);
			} catch (error) {
				console.log(error);
			}
		};
		fetchMission();
	}, [surveyAnswers]);

	return (
		<div>
			<Top isHome={true} />
			<Container>
				<ChallengeDiv>
					<div className="challenge">
						<div className="challenge-today">오늘의 챌린지</div>
						<div className="challenge-text">{mission}</div>
					</div>
					<div className="challenge-description">
						오늘의 챌린지 인증 시 <span>{percent}</span>%의 환경
						보호 효과가 있어요!
					</div>
				</ChallengeDiv>
				<Participants />
				<Button
					children={isConfirmed ? "인증 완료" : "인증하러 가기"}
					onClick={() => navigate("/confirm")}
					disabled={isConfirmed}
					width="180"
					height="50"
					fontSize="20"
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

const ChallengeDiv = styled.div`
	width: 300px;
	height: 350px;
	border-radius: 20px;
	background: var(--color-main);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.challenge {
		margin-top: 20px;
		width: 250px;
		height: 200px;
		border-radius: 10px;
		background: #fff;
	}

	.challenge-today {
		margin-top: 20px;
		margin-left: 20px;
		padding: 10px;
		width: 90px;
		height: 18px;
		border-radius: 20px;
		background: var(--color-main);
		font-size: 16px;
		font-weight: bold;
		color: #fff;
	}

	.challenge-text {
		margin: 20px;
		width: 250px;
		height: 220px;
		color: var(--color-main);
		font-size: 35px;
		font-weight: bold;
		white-space: pre-line;
	}

	.challenge-description {
		margin: 30px;
		margin-top: 25px;
		color: #fff;
		font-size: 20px;
		font-weight: bold;
	}
`;
