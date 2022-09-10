export const setDataToLocalStorage = <T>(key: string, data: T): void => {
	localStorage.setItem(key, JSON.stringify(data))
}

export const getParseLocalStorageData = <T>(key: string, defaultData: T): T => {
	const data = localStorage.getItem(key)

	if (data !== null) {
		defaultData = JSON.parse(data) as T
	}

	return defaultData
}

// Example for React:
// export const Example = () => {

// 	const [count, setCount] = useState(getParseLocalStorageData<number>('counter', 0))

// 	useEffect(() => {
// 		setDataToLocalStorage('counter', count)
// 	}, [count])

// 	return (
// 	<>
// 		{count}
// 		<button onClick = {() => {setCount(count + 1)}}>+</button>
// 	</>
// 	)
// }

// Example for Redux:
// export const Example = () => {

// 	const dispatch = useAppDispatch()

// 	const counter = useSelector(selectCounter)

// 	useEffect(() => {
// 		dispatch(getCounterValue())
// 	}, [])

// 	return (
// 	<>
// 		{counter}
// 		<button onClick = {() => dispatch(counterIncrement())}>+</button>
// 	</>
// 	)
// }
