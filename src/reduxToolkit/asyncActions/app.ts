import { createAsyncThunk } from '@reduxjs/toolkit'
import { AUTH } from 'api'
import { AxiosError } from 'axios'
import { RootStateType } from 'reduxToolkit'
import { getParseLocalStorageData, setDataToLocalStorage } from 'services'
import { handleServerNetworkError } from 'utils'

export const asyncAction = createAsyncThunk
	<
		void,
		undefined,
		{ rejectValue: { error: string }, state: RootStateType }
	>
	('app/asyncAction', async (_, { rejectWithValue, getState, dispatch }) => {

		const state = getState()

		try {
			const response = await AUTH.login()
			const { data: items } = response

			return items
		} catch (error) {
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})

export const counterIncrement = createAsyncThunk
	<
		number,
		undefined,
		{ rejectValue: { error: string }, state: RootStateType }
	>
	('app/counterIncrement', (_, { rejectWithValue, getState, dispatch }) => {

		const counter = getState().app.counter

		try {
			setDataToLocalStorage('counter', counter + 1)

			return counter
		} catch (error) {
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})

export const getCounterValue = createAsyncThunk
	<
		number,
		undefined,
		{ rejectValue: { error: string }, state: RootStateType }
	>
	('app/getCounterValue', (_, { rejectWithValue }) => {

		try {
			return getParseLocalStorageData('counter', 0)

		} catch (error) {
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})
