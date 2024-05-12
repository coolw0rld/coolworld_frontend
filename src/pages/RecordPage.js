import { Bottom, Top } from "../components";
import { styled } from "styled-components";
import { useState } from "react";
import logoImg from "../assets/logo.svg";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

export default function RecordPage() {
	const [currentDate, setCurrentDate] = useState(new Date());

	const successDays = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 14, 16, 17, 18];

	const PrevMonth = () => {
		setCurrentDate(
			(prevDate) =>
				new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
		);
	};

	const NextMonth = () => {
		setCurrentDate(
			(prevDate) =>
				new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
		);
	};

	return (
		<div>
			<Top isHome={true} />
			<StampTopDiv>
				<div className="stamp-title righteous-regular">
					Cool World Challenge
				</div>
				<div className="stamp-month">
					<GrFormPrevious onClick={PrevMonth}>이전 달</GrFormPrevious>
					<span className="stamp-current">
						{currentDate.toLocaleString("default", {
							month: "long",
							year: "numeric",
						})}
					</span>
					<GrFormNext onClick={NextMonth}>다음 달</GrFormNext>
				</div>
			</StampTopDiv>
			<CircleContainer>
				{createCircles(currentDate, successDays)}
			</CircleContainer>
			<Bottom />
		</div>
	);
}

function createCircles(currentDate, successDays) {
	const circles = [];

	const lastDayOfMonth = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth() + 1,
		0
	);

	const options = { day: "numeric" };
	const locale = "ko-KR";

	// 첫째 날부터 마지막 날까지 원 생성
	for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
		const dateString = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			day
		).toLocaleDateString(locale, options);

		// 해당 날짜가 성공한 날짜 배열에 포함되어 있는지 확인
		const isSuccessDay = successDays.includes(day);

		// 성공한 날은 이미지를 표시
		let circleContent;
		if (isSuccessDay) {
			circleContent = (
				<img src={logoImg} alt="Logo" style={{ width: "70%" }} />
			);
		} else {
			circleContent = dateString;
		}

		const circle = <Circle key={day}>{circleContent}</Circle>;
		circles.push(circle);
	}

	return circles;
}

const Circle = styled.div`
	wposition: relative;
	width: 55px;
	height: 55px;
	border: 4px dotted #d9d9d9;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 3px;
	margin-top: 3px;
`;

const CircleContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 330px;
	height: 385px;
	margin: 5px auto;
`;

const StampTopDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 35px;
	margin-bottom: 15px;

	.stamp-title {
		color: var(--color-main);
		font-size: 28px;
		font-weight: 500;
	}

	.stamp-month {
		margin-top: 25px;
	}

	.stamp-current {
		font-size: 20px;
		font-weight: 500;
		margin: 30px;
	}
`;
