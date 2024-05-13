import axios from "axios";

const API = axios.create({
	baseURL: "http://localhost:8080",
	headers: {
		"Content-type": "application/json",
	},
});

export const getMission = async (surveyAnswers) => {
	try {
		const response = await API.get("/mission", {
			survey_answers: surveyAnswers,
		});
		if (response.status === 200) {
			const { mission, category } = response.data;
			return { mission, category };
		}
	} catch (error) {
		console.log(error);
	}
};

export const submitMission = async (date, photo) => {
	try {
		const response = await API.post("/mission", { date, photo });
		if (response.status === 201 && response.data.status === "success") {
			return "success";
		} else {
			return "fail";
		}
	} catch (error) {
		console.log(error);
	}
};

export const getMonthlyStamps = async (year, month) => {
	try {
		const response = await API.get("/stamp", { year, month });
		if (response.status === 200) {
			return response.data;
		} else {
			return null;
		}
	} catch (error) {
		console.log(error);
	}
};
