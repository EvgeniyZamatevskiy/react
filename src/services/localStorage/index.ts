export const setToLocalStorage = <T>(key: string, state: T): void => {
  localStorage.setItem(key, JSON.stringify(state))
}

export const getFromLocalStorage = <T>(key: string, defaultState: T) => {
  const state = localStorage.getItem(key)

  if (state !== null) {
    defaultState = JSON.parse(state) as T
  }

  return defaultState
}

// Example for React:
// export const Example = () => {

// 	const [counter, setCounter] = useState(restoreState<number>('counter', 0))

// 	useEffect(() => {
// 		saveState('counter', counter)
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
// 		dispatch(restoreState())
// 	}, [])

// 	return (
// 	<>
// 		{counter}
// 		<button onClick = {() => dispatch(counterIncreaseTC())}>+</button>
// 	</>
// 	)
// }
