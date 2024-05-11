import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Button } from "./components";
import logoImg from "./assets/logo.svg";
import {
	LoginPage,
	SurveyPage,
	HomePage,
	RecordPage,
	MyPage,
	ConfirmPage,
} from "./pages";

function App() {
	let navigate = useNavigate();

	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={
						<div className="container" style={{ gap: "80px" }}>
							<div
								className="title righteous-regular"
								style={{ marginLeft: "25px" }}
							>
								Cool World
							</div>
							<img
								src={logoImg}
								width="154px"
								height="154px"
								alt="start"
							/>
							<Button
								children="시작하기"
								onClick={() => {
									navigate("/login");
								}}
								width="250"
							/>
						</div>
					}
				/>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/survey" element={<SurveyPage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/record" element={<RecordPage />} />
				<Route path="/my" element={<MyPage />} />
				<Route path="/confirm" element={<ConfirmPage />} />
			</Routes>
		</div>
	);
}

export default App;
