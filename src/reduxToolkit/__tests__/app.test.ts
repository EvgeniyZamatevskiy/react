import exampleSlice,
{
	addItem,
	changeAnyValue,
	changeItemTitle,
	removeItem,
	setErrorMessage,
	setSupplementedItems,
	toggleItemIsActive
} from 'reduxToolkit/slices/app'
import { AppSliceInitialStateType, FilterValue } from '../slices/app/types'

let startState: AppSliceInitialStateType

beforeEach(() => {
	startState = {
		isLoading: false,
		errorMessage: '',
		isDisabled: false,
		items: [
			{ id: 1, title: 'example', isActive: false, filter: FilterValue.ALL, isOnline: false },
			{ id: 2, title: 'example2', isActive: false, filter: FilterValue.ALL, isOnline: false },
		]
	}
})

test('correct error message should be set', () => {

	const action = setErrorMessage('some error occurred!')

	const endState = exampleSlice(startState, action)

	expect(endState.errorMessage).toBe('some error occurred!')
})

test('', () => {

	const startState = { items: [], isLoading: false, errorMessage: '', isDisabled: false }

	const items = [
		{ id: 1, title: 'example', isActive: true, filter: FilterValue.ALL, isOnline: false },
		{ id: 2, title: 'example2', isActive: false, filter: FilterValue.ALL, isOnline: false },
	]

	const action = setSupplementedItems(items)

	const endState = exampleSlice(startState, action)

	expect(endState.items.length).toBe(2)
})

test('', () => {

	const item = { id: Date.now(), title: 'example3', isActive: true, filter: FilterValue.ALL, isOnline: false }

	const action = addItem(item)

	const endState = exampleSlice(startState, action)

	expect(endState.items.length).toBe(3)
	expect(endState.items[0].title).toBe('example3')
})

test('', () => {

	const action = removeItem(1)

	const endState = exampleSlice(startState, action)

	expect(endState.items.length).toBe(1)
	expect(endState.items[0].id).toBe(2)
})

test('', () => {

	const action = changeItemTitle({ id: 1, title: 'newExample' })

	const endState = exampleSlice(startState, action)

	expect(endState.items.find(item => item.id === 1)?.title).toBe('newExample')
})

test('', () => {

	const action = changeAnyValue({ id: 1, domainPayload: { title: 'newExample', isActive: true } })

	const endState = exampleSlice(startState, action)

	expect(endState.items.find(item => item.id === 1)?.title).toBe('newExample')
	expect(endState.items.find(item => item.id === 1)?.isActive).toBe(true)
})

test('', () => {

	const action = toggleItemIsActive({ id: 1 })

	const endState = exampleSlice(startState, action)

	expect(endState.items.find(item => item.id === 1)?.isActive).toBe(true)
	expect(endState.items.find(item => item.id === 2)?.isActive).toBe(false)
})
