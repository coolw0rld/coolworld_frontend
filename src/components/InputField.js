import styled from "styled-components";

export default function InputField({
	children,
	type,
	value,
	onChange,
	placeholder,
}) {
	return (
		<InputDiv>
			<label>{children}</label>
			<input
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			></input>
		</InputDiv>
	);
}

const InputDiv = styled.div`
	width: 250px;
	height: 70px;
	position: relative;

	label {
		display: inline-block;
		position: absolute;
		top: -5px;
		left: 14px;
		padding: 10px;
		background: white;
		font-size: 14px;
		color: #555;
		font-weight: bold;
	}

	input {
		width: 85%;
		border: 2px solid #d9d9d9;
		font-size: 1rem;
		line-height: 2;
		border-radius: 8px;
		padding: 16px;
		margin-top: 10px;

		&:focus {
			border: 2px solid var(--color-main);
			outline: none;
		}
	}

	::placeholder {
		color: #d9d9d9;
	}
`;
