import { Button, Top } from "../components";
import { styled } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
	{
		id: 1,
		text: "일주일에 대중교통을 몇 번 이용하시나요?",
		options: ["Q1옵션1", "Q1옵션2", "Q1옵션3"],
	},
	{
		id: 2,
		text: "일주일에 대중교통을 몇 번 이용하시나요?",
		options: ["Q2옵션1", "Q2옵션2", "Q2옵션3"],
	},
	{
		id: 3,
		text: "일주일에 대중교통을 몇 번 이용하시나요?",
		options: ["Q3옵션1", "Q3옵션2", "Q3옵션3"],
	},
	{
		id: 4,
		text: "일주일에 대중교통을 몇 번 이용하시나요?",
		options: ["Q4옵션1", "Q4옵션2", "Q4옵션3"],
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

	const handleAnswer = (answer) => {
		const updatedAnswers = [...answers];
		updatedAnswers[QIdx] = answer;
		setAnswers(updatedAnswers);
		console.log(answers);
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
						selectedAnswer={answers[QIdx]}
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
	width: 250px;
	height: 320px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.question-text {
		width: 180px;
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
