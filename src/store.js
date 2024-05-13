import { configureStore, createSlice } from "@reduxjs/toolkit";

const confirmationSlice = createSlice({
	name: "confirmation",
	initialState: { isConfirmed: false },
	reducers: {
		setConfirmation(state, action) {
			state.isConfirmed = action.payload;
		},
	},
});

const surveyAnswersSlice = createSlice({
	name: "surveyAnswers",
	initialState: [],
	reducers: {
		setSurveyAnswers(state, action) {
			return action.payload;
		},
	},
});

export default configureStore({
	reducer: {
		confirmation: confirmationSlice.reducer,
		surveyAnswers: surveyAnswersSlice.reducer,
	},
});

export const { setConfirmation } = confirmationSlice.actions;
export const { setSurveyAnswers } = surveyAnswersSlice.actions;
