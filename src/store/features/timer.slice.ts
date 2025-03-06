import { createSlice } from '@reduxjs/toolkit'

interface ITimer {
	WORK: number
	BREAK: number
	SESSIONS_IN_ROUND: number
	isRunning: boolean
}

const initialState: ITimer = {
	WORK: 1500,
	BREAK: 300,
	SESSIONS_IN_ROUND: 4,
	isRunning: false
}

export const timerSlice = createSlice({
	name: 'timer',
	initialState,
	reducers: {
		changeWorkTime: (state, action) => {
			state.WORK = action.payload * 60
		},
		changeBreakTime: (state, action) => {
			state.BREAK = action.payload * 60
		},
		changeSessions: (state, action) => {
			state.SESSIONS_IN_ROUND = action.payload
		},
		setIsRunning: (state, action) => {
			state.isRunning = action.payload
		}
	}
})

export const { changeWorkTime, changeBreakTime, changeSessions, setIsRunning } =
	timerSlice.actions
export default timerSlice.reducer
