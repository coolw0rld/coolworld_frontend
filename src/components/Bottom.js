import styled from "styled-components";
import { LuCalendarCheck } from "react-icons/lu";
import { SlHome } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function Bottom() {
	let navigate = useNavigate();

	return (
		<MyBottom>
			<LuCalendarCheck
				color="#fff"
				size={25}
				onClick={() => {
					navigate("/record");
				}}
			/>
			<SlHome
				color="fff"
				size={25}
				onClick={() => {
					navigate("/home");
				}}
			/>
			<CgProfile
				color="fff"
				size={25}
				onClick={() => {
					navigate("/my");
				}}
			/>
		</MyBottom>
	);
}

const MyBottom = styled.div`
	position: fixed;
	bottom: 0;
	width: 100%;

	height: 60px;
	background-color: var(--color-main);

	display: flex;
	align-items: center;
	justify-content: space-around;
`;
