import styled from "styled-components";

export default function Button({
	children,
	onClick,
	disabled,
	width,
	height,
	fontSize,
}) {
	return (
		<MyButton
			onClick={onClick}
			disabled={disabled}
			style={{
				width: `${width}px`,
				height: `${height}px`,
				fontSize: `${fontSize}px`,
			}}
		>
			{children}
		</MyButton>
	);
}

const MyButton = styled.button`
	height: 60px;
	color: ${(props) => (props.disabled ? "#fff" : "var(--color-main)")};
	font-size: 25px;
	font-weight: bold;
	border-radius: 10px;

	background: ${(props) => (props.disabled ? "#d9d9d9" : "#fff")};
	border: 2px solid
		${(props) => (props.disabled ? "#d9d9d9" : "var(--color-main)")};

	&:hover {
		color: ${(props) => (!props.disabled ? "#fff" : null)};
		background: ${(props) =>
			!props.disabled ? "var(--color-main)" : null};
	}
`;
