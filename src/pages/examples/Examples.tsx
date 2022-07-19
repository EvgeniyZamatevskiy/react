import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { ReturnComponentType } from 'types'
import { useAppDispatch, useInput } from 'hooks'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { EMPTY_STRING } from 'constants/base'
import { selectIsLoading, selectItems } from 'store/selectors'

const TWO_FAKE_ITEMS = 2
const users: number[] = [1, 2, 3]
const cats: string[] = ['1', '2', '3']

type ExamplesPropsType = {

}

export const Examples: FC<ExamplesPropsType> = (): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const navigate = useNavigate()
	const pathname = useLocation()
	const params = useParams()

	const isLoading = useSelector(selectIsLoading)
	const items = useSelector(selectItems)

	const [controlledInputValue, setControlledInputValue] = useState<string>(EMPTY_STRING)
	const [toggleShowItems, setToggleShowItems] = useState<boolean>(false)

	const unControlledInputRef = useRef<HTMLInputElement>(null)
	const isMounted = useRef(false)

	const { value, handleValueChange } = useInput()
	const { value: value2, handleValueChange: handleValueChange2 } = useInput()

	const fakeItems = [...new Array(TWO_FAKE_ITEMS)]
	const renderFakeItems = fakeItems.map((_, index) => <div key={index}>fakeItem</div>)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		if (isMounted.current) {
			console.log('КОМПОНЕНТ НЕ БУДЕТ ВМОНТИРОВАН И БУДЕТ ОБНОВЛЯТЬСЯ ПРИ КАЖДОМ ИЗМЕНЕНИИ МАССИВА ЗАВИСИМОСТЕЙ')
		}

		isMounted.current = true
	}, [controlledInputValue])

	const onShowValueClick = (): void => {
		if (unControlledInputRef.current) {
			console.log(unControlledInputRef.current.value)
		}
	}

	const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setControlledInputValue(event.currentTarget.value)
	}

	const onShowFocusClick = (): void => {
		if (unControlledInputRef.current) {
			unControlledInputRef.current.focus()
		}
	}

	const onToggleShowItemsClick = (): void => {
		setToggleShowItems(!toggleShowItems)
	}

	if (!users.length) {
		return null
	}

	if (!cats.length) {
		return null
	}

	return (
		<>
			<input value={controlledInputValue} onChange={onInputChange} placeholder='controlled input' />
			<input ref={unControlledInputRef} defaultValue='' placeholder='un controlled input' />
			<button onClick={onShowFocusClick}>show focus un controlled input</button>
			<button onClick={onShowValueClick}>show value un controlled Input value</button>
			<div onClick={onToggleShowItemsClick}>Show items</div>
			{renderFakeItems}
		</>
	)
}
