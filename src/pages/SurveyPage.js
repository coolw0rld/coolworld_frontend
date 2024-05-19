import { Button, Top } from "../components";
import { styled } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSurveyAnswers } from "../store";

const questions = [
	{
		id: 1,
		text: "분리수거를 얼마나 자주 하나요?",
		options: [
			"항상 분리수거한다.",
			"가끔 분리수거한다.",
			"분리수거하지 않는다.",
		],
	},
	{
		id: 2,
		text: "일주일에 자가용을 몇 번 이용하나요?",
		options: ["매일 이용", "4-6일 이용", "1-3일 이용"],
	},
	{
		id: 3,
		text: "사용하지 않는 전자제품의 플러그를 뽑는 습관이 있나요?",
		options: ["항상 뽑는다.", "가끔 뽑는다.", "뽑지 않는다."],
	},
	{
		id: 4,
		text: "샤워 시간을 얼마나 유지하나요?",
		options: ["10분 이하로 한다.", "10-20분 정도 한다.", "20분 이상 한다."],
	},
	{
		id: 5,
		text: "음식을 얼마나 남기는 편인가요?",
		options: ["항상 남기지 않는다.", "가끔 남긴다.", "자주 남긴다."],
	},
];

function Question({ question, onAnswer, selectedAnswer }) {
	const handleAnswerSelection = (answer) => {
		onAnswer(answer);
	};

	return (
		<QuestionDiv>
			<div className="question-text">{question.text}</div>
			{question.options.map((option, idx) => (
				<AnswerOption
					key={idx}
					option={option}
					selected={selectedAnswer === option}
					onSelect={() => handleAnswerSelection(option)}
				/>
			))}
		</QuestionDiv>
	);
}

function AnswerOption({ option, selected, onSelect }) {
	return (
		<AnswerDiv selected={selected} onClick={onSelect}>
			<label>
				<input
					type="radio"
					value={option}
					checked={selected}
					onChange={onSelect}
				/>
				{option}
			</label>
		</AnswerDiv>
	);
}

export default function SurveyPage() {
	const [survey, setSurvey] = useState(false);
	const [QIdx, setQIdx] = useState(0);
	const [answers, setAnswers] = useState([]);
	let navigate = useNavigate();
	const dispatch = useDispatch();

	const handleAnswer = (answer) => {
		const optionIndex = questions[QIdx].options.indexOf(answer);
		const updatedAnswers = [...answers];
		updatedAnswers[QIdx] = optionIndex;
		setAnswers(updatedAnswers);
		console.log(answers);
		dispatch(setSurveyAnswers(updatedAnswers));
	};

	const handleNext = () => {
		if (answers[QIdx] !== undefined) {
			if (QIdx < questions.length - 1) {
				setQIdx(QIdx + 1);
			} else {
				console.log(answers);
				navigate("/home");
			}
		}
	};

	const handlePrev = () => {
		if (QIdx > 0) {
			setQIdx(QIdx - 1);
		}
	};

	return (
		<div>
			<Top />
			{survey ? (
				<Container>
					<Question
						question={questions[QIdx]}
						onAnswer={handleAnswer}
						selectedAnswer={questions[QIdx].options[answers[QIdx]]}
					></Question>
					<div
						style={{
							width: "300px",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							margin: "0 auto",
							marginTop: "30px",
						}}
					>
						<Button
							children="이전"
							onClick={handlePrev}
							disabled={QIdx === 0}
							width="70"
							height="40"
							fontSize="20"
						/>
						<Button
							onClick={handleNext}
							disabled={answers[QIdx] === undefined}
							width="70"
							height="40"
							fontSize="20"
						>
							{QIdx === questions.length - 1 ? "완료" : "다음"}
						</Button>
					</div>
				</Container>
			) : (
				<Container>
					<Button
						children="설문 시작하기"
						onClick={() => {
							setSurvey(true);
						}}
						width="250"
					/>
				</Container>
			)}
		</div>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 80vh;
`;

const QuestionDiv = styled.div`
	width: 300px;
	height: 320px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.question-text {
		display: flex;
		justify-content: center;
		text-align: center;
		width: 320px;
		font-size: 22px;
		font-weight: 600;
		margin-bottom: 30px;
	}
`;

const AnswerDiv = styled.div`
	width: 280px;
	height: 40px;
	border: 2px solid var(--color-main);
	font-size: 18px;
	font-weight: 500;
	line-height: 2;
	border-radius: 10px;
	padding: 8px;
	margin-top: 8px;

	input[type="radio"] {
		display: none;
	}

	label {
		cursor: pointer;
		margin-left: 10px;
	}

	background-color: ${(props) =>
		props.selected ? "var(--color-main)" : "transparent"};
	color: ${(props) => (props.selected ? "#fff" : "inherit")};
`;
