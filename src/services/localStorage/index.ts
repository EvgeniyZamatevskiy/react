export const setDataToLocalStorage = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data))
}

export const getParseLocalStorageData = <T>(key: string, defaultData: T) => {
  const data = localStorage.getItem(key)

  if (data !== null) {
    defaultData = JSON.parse(data) as T
  }

  return defaultData
}

// Example for React:
// export const Example = () => {

// 	const [counter, setCounter] = useState(getParseLocalStorageData<number>('counter', 0))

// 	useEffect(() => {
// 		setDataToLocalStorage('counter', counter)
// 	}, [counter])

// 	return (
// 	<>
// 		{counter}
// 		<button onClick = {() => {setCounter(counter + 1)}}>+</button>
// 	</>
// 	)
// }

// Example for Redux:
// export const Example = () => {

// 	const dispatch = useAppDispatch()

// 	const counter = useSelector(selectCounter)

// 	useEffect(() => {
// 		dispatch(getCurrentCounterValueTC())
// 	}, [])

// 	return (
// 	<>
// 		{counter}
// 		<button onClick = {() => dispatch(counterIncreaseTC())}>+</button>
// 	</>
// 	)
// }
