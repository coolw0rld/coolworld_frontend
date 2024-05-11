import profileImg from "../assets/profile.svg";
import { styled } from "styled-components";

const participants = [
	{ id: 1, name: "정서영", profileImg: profileImg },
	{ id: 2, name: "정서영", profileImg: profileImg },
	{ id: 3, name: "정서영", profileImg: profileImg },
	{ id: 4, name: "정서영", profileImg: profileImg },
	{ id: 5, name: "정서영", profileImg: profileImg },
	{ id: 6, name: "정서영", profileImg: profileImg },
	{ id: 7, name: "정서영", profileImg: profileImg },
];

export default function Participants() {
	return (
		<ParticipantDiv>
			<div className="participants-cnt">
				참여 ({participants.length}명)
			</div>
			<div className="participants-list">
				{participants.map((participant) => (
					<img
						key={participant.id}
						src={participant.profileImg}
						alt={participant.name}
						className="participant-profileImg"
					/>
				))}
			</div>
		</ParticipantDiv>
	);
}

const ParticipantDiv = styled.div`
	border-top: 2px solid var(--color-main);
	border-bottom: 2px solid var(--color-main);
	padding: 10px;

	.participants-cnt {
		color: #59ccd5;
		margin-top: 5px;
		margin-bottom: 12px;

		font-size: 20px;
		font-weight: 800;
	}

	.participants-list {
		width: 280px;
		display: flex;
		overflow-x: auto;
	}

	.participant-profileImg {
		width: 50px;
		margin-right: 10px;
		scroll-snap-align: start;
	}
`;
