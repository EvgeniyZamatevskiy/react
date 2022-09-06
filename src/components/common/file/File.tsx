import React, { ChangeEvent, FC, useRef } from 'react'
import { ReturnComponentType } from 'types'
import { FilePropsType } from './types'
import style from './File.module.scss'
import axios from 'axios'

const FIRST_FILES_INDEX = 0
const MAX_FILE_SIZE = 1000000
const ERROR_MESSAGE = 'The file is too large'

export const File: FC<FilePropsType> = (): ReturnComponentType => {

	const inputRef = useRef<HTMLInputElement>(null)

	const onSelectFileClick = (): void => inputRef && inputRef.current?.click()

	const onUploadFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.currentTarget.files && event.currentTarget.files.length) {
			const file = event.currentTarget.files[FIRST_FILES_INDEX]

			if (file.size < MAX_FILE_SIZE) {
				//examplePostFile(file)
			} else {
				alert(ERROR_MESSAGE)
			}
		}
	}

	// const examplePostFile= (file: File) => {
	// 	const formData = new FormData()
	// 	formData.append('myFile', file)

	// 	axios.post('https://dry-forest-56016.herokuapp.com/file', formData)
	// 		.then((res) => console.log(res.data))
	// }

	return (
		<label className={style.label}>
			<input
				className={style.file}
				type='file'
				onChange={onUploadFileChange}
				ref={inputRef}
			/>
			<button className={style.changeAvatarBtn} onClick={onSelectFileClick}>
				Change avatar
			</button>
		</label>
	)
}
