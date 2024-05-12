import { configureStore, createSlice } from "@reduxjs/toolkit";

const confirmationSlice = createSlice({
	name: "confirmation",
	initialState: { isConfirmed: false },
	reducers: {
		toggleConfirmation(state) {
			state.isConfirmed = !state.isConfirmed;
		},
	},
});

export default configureStore({
	reducer: {
		confirmation: confirmationSlice.reducer,
	},
});

export const { toggleConfirmation } = confirmationSlice.actions;
